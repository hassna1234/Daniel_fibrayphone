(function () {
  const cfg = window.FIBRAYPHONE || {};
  const gaId = String(cfg.gaId || "").trim();
  const phone = cfg.phone || "34696785471";
  const wa = cfg.whatsapp || phone;
  const phoneDisplay = cfg.phoneDisplay || "696 78 54 71";
  const telHref = `tel:+${phone.replace(/\D/g, "")}`;

  function buildWhatsAppUrl(opts) {
    const number = String(wa).replace(/\D/g, "");
    const text = opts?.text || defaultWaText();
    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  }

  function defaultWaText() {
    return "Hola, me gustaría una comparativa gratuita. ¿Podéis ayudarme?";
  }

  function formWaText(data) {
    let msg =
      `Hola, solicito comparativa desde la web de Fibrayphone.\n\n` +
      `Nombre: ${data.nombre}\n` +
      `Teléfono: ${data.telefono}\n` +
      `Interés: ${data.servicio}`;
    if (data.mensaje) msg += `\nComentario: ${data.mensaje}`;
    return msg;
  }

  function setWaLinks() {
    const url = buildWhatsAppUrl();
    document
      .querySelectorAll("#wa-header, #wa-hero, #wa-contact, #wa-fab, #wa-mobile-bar")
      .forEach((el) => {
        el.href = url;
      });
  }

  function setupMobileMenu() {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-mobile");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const open = nav.hidden;
      nav.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Cerrar" : "Menú";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menú";
      });
    });
  }

  function applyContact() {
    document.querySelectorAll("[data-tel]").forEach((el) => {
      el.href = telHref;
    });
    document.querySelectorAll("[data-phone-text]").forEach((el) => {
      el.textContent = phoneDisplay;
    });

    const ratingEl = document.getElementById("google-rating-text");
    if (ratingEl && cfg.googleRating && cfg.googleReviewCount) {
      ratingEl.textContent = `${cfg.googleRating} · ${cfg.googleReviewCount} reseñas en Google`;
    }

    const mapsBtn = document.getElementById("google-reviews-btn");
    if (mapsBtn && cfg.googleMapsUrl) mapsBtn.href = cfg.googleMapsUrl;
  }

  function renderReviews() {
    const list = document.getElementById("reviews-list");
    if (!list || !cfg.reviews?.length) return;

    list.innerHTML = cfg.reviews
      .map(
        (r) => `
      <blockquote class="review">
        <div class="review__stars" aria-label="5 estrellas">★★★★★</div>
        <p>«${r.text}»</p>
        <cite>— ${r.author}${r.date ? ` · ${r.date}` : ""}</cite>
      </blockquote>`
      )
      .join("");
  }

  function campaignFromUrl() {
    const p = new URLSearchParams(location.search);
    const from = p.get("from");
    if (from === "maps") {
      return {
        campaign_source: "google",
        campaign_medium: "maps",
        campaign_name: "perfil_maps",
      };
    }
    const source = p.get("utm_source");
    if (source) {
      return {
        campaign_source: source,
        campaign_medium: p.get("utm_medium") || "",
        campaign_name: p.get("utm_campaign") || "",
      };
    }
    return {};
  }

  function cleanTrackingParamsInAddressBar() {
    const p = new URLSearchParams(location.search);
    const keys = ["from", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
    if (!keys.some((k) => p.has(k))) return;
    const url = new URL(location.href);
    keys.forEach((k) => url.searchParams.delete(k));
    const qs = url.searchParams.toString();
    const next = url.pathname + (qs ? `?${qs}` : "") + url.hash;
    history.replaceState({}, "", next);
  }

  function initAnalytics() {
    if (!gaId || !/^G-/i.test(gaId)) return;
    const campaign = campaignFromUrl();
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    gtag("js", new Date());
    gtag("config", gaId, {
      send_page_view: true,
      cookie_flags: "SameSite=None;Secure",
      ...campaign,
    });
    cleanTrackingParamsInAddressBar();
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
    document.head.appendChild(s);
  }

  function track(eventName, params) {
    if (typeof gtag !== "function" || !gaId) return;
    gtag("event", eventName, params || {});
  }

  function trackClick(id, el) {
    if (id.startsWith("wa-")) {
      track("contact", { method: "whatsapp", contact_point: id });
      return;
    }
    if (id.startsWith("call-")) {
      track("contact", { method: "phone", contact_point: id });
      return;
    }
    if (id === "maps-hero") {
      track("click", { link_text: "como_llegar" });
      return;
    }
    if (id === "google-reviews") {
      track("click", { link_text: "google_reviews" });
      return;
    }
    if (id.startsWith("cta-")) {
      track("select_content", {
        content_type: "cta",
        item_id: id,
        link_url: el?.getAttribute("href") || "",
      });
    }
  }

  initAnalytics();

  document.querySelectorAll("[data-track]").forEach((el) => {
    el.addEventListener("click", () => {
      trackClick(el.getAttribute("data-track"), el);
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  const modal = document.getElementById("privacy-modal");
  const openers = [document.getElementById("open-privacy"), document.getElementById("open-privacy-footer")];
  const closer = document.getElementById("close-privacy");

  openers.forEach((btn) => {
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("open");
    });
  });

  closer?.addEventListener("click", () => modal.classList.remove("open"));
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });

  const form = document.getElementById("lead-form");
  form?.querySelectorAll("input, select, textarea").forEach((el) => {
    el.addEventListener("input", () => {
      el.classList.remove("field--error");
      const container = el.closest(".form-group") || el.parentNode;
      container.querySelector(".field-error")?.remove();
    });
  });

  function clearFieldErrors() {
    form.querySelectorAll(".field-error").forEach((el) => el.remove());
    form.querySelectorAll(".field--error").forEach((el) => el.classList.remove("field--error"));
    form.querySelectorAll(".form-check--error").forEach((el) => el.classList.remove("form-check--error"));
  }

  function showFieldError(fieldId, msg) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.classList.add("field--error");
    field.focus();
    const container = field.closest(".form-group") || field.parentNode;
    let err = container.querySelector(".field-error");
    if (!err) {
      err = document.createElement("p");
      err.className = "field-error";
      container.appendChild(err);
    }
    err.textContent = msg;
  }

  function sendLeadEmail(data) {
    return fetch("/api/send-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((body) => {
        if (!body.ok) throw new Error(body.error || "Error del servidor");
        return body;
      });
  }

  function showFormStatus(msg, isError) {
    let el = document.getElementById("form-status-msg");
    if (!el) {
      el = document.createElement("p");
      el.id = "form-status-msg";
      el.style.cssText = "margin-top:0.5rem;font-size:0.9rem;font-weight:600;";
      form.parentNode.insertBefore(el, form.nextSibling);
    }
    el.textContent = msg;
    el.style.color = isError ? "#c0392b" : "#27ae60";
    el.hidden = false;
  }

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value.trim();
    const privacidad = document.getElementById("privacidad").checked;

    clearFieldErrors();
    let hasError = false;
    if (!nombre) {
      showFieldError("nombre", "Escribe tu nombre.");
      hasError = true;
    }
    if (!telefono) {
      showFieldError("telefono", "Escribe tu teléfono.");
      hasError = true;
    }
    if (!servicio) {
      showFieldError("servicio", "Selecciona qué servicio te interesa.");
      hasError = true;
    }
    if (!privacidad) {
      const checkEl = document.getElementById("privacidad");
      const checkWrap = checkEl?.closest(".form-check");
      if (checkWrap) {
        checkWrap.classList.add("form-check--error");
        let err = checkWrap.querySelector(".field-error");
        if (!err) {
          err = document.createElement("p");
          err.className = "field-error";
          checkWrap.after(err);
        }
        err.textContent = "Acepta la política de privacidad para continuar.";
        checkEl.focus();
      }
      hasError = true;
    }
    if (hasError) return;

    const data = { nombre, telefono, servicio, mensaje };
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando…";

    const waUrl = buildWhatsAppUrl({ text: formWaText(data) });
    const waSuccess = document.getElementById("wa-success");
    if (waSuccess) waSuccess.href = waUrl;

    track("generate_lead", { method: "whatsapp", service: servicio });

    sendLeadEmail(data)
      .then(() => {
        showFormStatus("✓ Datos enviados. Se abre WhatsApp…", false);
      })
      .catch((err) => {
        console.warn("Email error:", err);
        showFormStatus("WhatsApp se abrirá, pero no se pudo enviar copia por email.", true);
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar por WhatsApp";
        window.location.href = waUrl;
      });
  });

  function renderBrands() {
    const brands = cfg.brands;
    if (!brands) return;

    function fill(containerId, list) {
      const el = document.getElementById(containerId);
      if (!el || !list?.length) return;
      el.innerHTML = list
        .map((name) => `<span class="brand-chip">${name}</span>`)
        .join("");
    }

    fill("brands-telecom", brands.telecom);
    fill("brands-energia", brands.energia);
    fill("brands-seguridad", brands.seguridad);
  }

  /** Carga fotos reales (.webp, .jpg…) o muestra ilustración SVG */
  function setupStorePhotos() {
    const variants = {
      fachada: [
        cfg.storePhotos?.fachada,
        "tienda-fachada.webp",
        "tienda-fachada.webp.webp",
        "tienda-fachada.jpg",
        "tienda-fachada.jpeg",
        "tienda-fachada.png",
      ],
      interior: [
        cfg.storePhotos?.interior,
        "tienda-interior.webp",
        "tienda-interior.webp.webp",
        "tienda-interior.jpg",
        "tienda-interior.jpeg",
        "tienda-interior.png",
      ],
    };

    function toAssetPath(name) {
      if (!name) return null;
      if (name.includes("/")) return name;
      return `assets/${name}`;
    }

    function uniquePaths(list) {
      const seen = new Set();
      return list
        .map(toAssetPath)
        .filter((p) => {
          if (!p || seen.has(p)) return false;
          seen.add(p);
          return true;
        });
    }

    document.querySelectorAll("img[data-photo-key]").forEach((img) => {
      const key = img.getAttribute("data-photo-key");
      const paths = uniquePaths(variants[key] || []);
      const fallback = img.getAttribute("data-fallback");
      const wrap = img.closest("figure");
      let i = 0;

      function tryNext() {
        if (i >= paths.length) {
          if (fallback) img.src = fallback;
          wrap?.classList.add("about__photo--placeholder");
          return;
        }
        const url = paths[i];
        i += 1;
        const probe = new Image();
        probe.onload = () => {
          img.src = url;
          wrap?.classList.remove("about__photo--placeholder");
          wrap?.classList.add("about__photo--loaded");
        };
        probe.onerror = tryNext;
        probe.src = url;
      }

      tryNext();
    });
  }

  setWaLinks();
  applyContact();
  renderBrands();
  renderReviews();
  setupMobileMenu();
  setupStorePhotos();
})();
