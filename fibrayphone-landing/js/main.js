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
      .querySelectorAll("#wa-header, #wa-hero, #wa-contact, #wa-fab, #wa-mobile-bar, #wa-vs, #wa-steps, #wa-servicios, #wa-features, #wa-opiniones, #wa-promo, #wa-faq")
      .forEach((el) => {
        el.href = url;
      });
  }

  function setupHeroCTAs() {
    const textComparativa = "Hola, quiero pedir una comparativa gratuita de fibra y móvil. ¿Podéis ayudarme?";
    const textAsesor = "Hola, quiero hablar con un asesor sobre mis opciones de fibra y móvil en Córdoba.";

    const comparativaBtn = document.getElementById("wa-hero-comparativa");
    if (comparativaBtn) {
      comparativaBtn.href = buildWhatsAppUrl({ text: textComparativa });
      comparativaBtn.addEventListener("click", () => {
        track("clic_whatsapp", { punto: "hero_comparativa" });
      });
    }

    const asesorBtn = document.getElementById("wa-hero-asesor");
    if (asesorBtn) {
      asesorBtn.href = buildWhatsAppUrl({ text: textAsesor });
      asesorBtn.addEventListener("click", () => {
        track("clic_whatsapp", { punto: "hero_asesor" });
      });
    }
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
      .slice(0, 4)
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
      track("clic_whatsapp", { punto: id });
      return;
    }
    if (id.startsWith("call-")) {
      track("clic_llamar", { punto: id });
      return;
    }
    if (id === "maps-hero") {
      track("clic_como_llegar", { punto: "hero" });
      return;
    }
    if (id === "google-reviews") {
      track("clic_ver_reseñas", { punto: "opiniones" });
      return;
    }
    if (id.startsWith("cta-")) {
      track("clic_cta", { cta_id: id });
    }
  }

  function setupExtraTracking() {
    // Email links
    document.querySelectorAll('a[href^="mailto:"]').forEach((el) => {
      el.addEventListener("click", () => {
        track("clic_email", { destino: el.href.replace("mailto:", "") });
      });
    });

    // Google Maps links sin data-track (sección Nosotros y Contacto)
    document.querySelectorAll('a[href*="maps.google.com"]').forEach((el) => {
      if (!el.hasAttribute("data-track")) {
        el.addEventListener("click", () => {
          track("clic_como_llegar", { punto: "pagina" });
        });
      }
    });
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

    track("clic_whatsapp", { punto: "formulario", servicio });
    track("generate_lead", { method: "whatsapp", service: servicio });

    sendLeadEmail(data)
      .then(() => {
        track("formulario_enviado", { servicio });
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

  const WA_SERVICE_TEXTS = {
    fibra:       "Hola, me interesa comparar tarifas de fibra e internet en Córdoba. ¿Podéis ayudarme?",
    pack:        "Hola, me interesa el pack de fibra + móvil + TV. ¿Podéis hacer una comparativa para mi caso?",
    deportes:    "Hola, me interesa el pack de fibra + móvil ilimitado con fútbol y baloncesto. ¿Podéis hacer una comparativa para mi caso?",
    estudiantes: "Hola, me interesa la oferta de fibra para estudiantes desde 20 €/mes. ¿Podéis ayudarme?",
    luz:         "Hola, quiero comparar mi factura de luz para ver si puedo ahorrar. ¿Podéis ayudarme?",
    alarma:      "Hola, me interesa comparar sistemas de alarma para mi hogar. ¿Podéis hacer un estudio gratuito?",
  };

  document.querySelectorAll("[data-wa-service]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const service = el.getAttribute("data-wa-service");
      const text = WA_SERVICE_TEXTS[service] || defaultWaText();
      track("clic_whatsapp", { punto: "oferta_" + service });
      track("generate_lead", { method: "whatsapp_offer", service });
      window.location.href = buildWhatsAppUrl({ text });
    });
  });

  function updateStoreStatus() {
    const el = document.getElementById("store-status");
    if (!el) return;
    try {
      const now = new Date();
      const spain = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Madrid" }));
      const day = spain.getDay();
      const t = spain.getHours() * 60 + spain.getMinutes();
      const T = (h, m) => h * 60 + m;
      let open = false;
      if (day >= 1 && day <= 4) {
        open = (t >= T(9, 30) && t < T(14, 0)) || (t >= T(18, 0) && t < T(20, 30));
      } else if (day === 5) {
        open = t >= T(9, 30) && t < T(14, 0);
      } else if (day === 6) {
        open = t >= T(10, 0) && t < T(13, 30);
      }
      el.textContent = open ? "Abierto ahora" : "Ahora cerrado";
      el.className = "store-status " + (open ? "store-status--open" : "store-status--closed");
      el.hidden = false;
    } catch (_) {}
  }

  function setupPromoBar() {
    const bar = document.getElementById("promo-bar");
    if (!bar) return;
    const messages = bar.querySelectorAll(".promo-bar__message");
    const dots = bar.querySelectorAll(".promo-bar__dot");
    const closeBtn = document.getElementById("promo-bar-close");
    let current = 0;
    let timer;

    function show(index) {
      messages.forEach((m, i) => m.classList.toggle("active", i === index));
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
      current = index;
    }

    function startRotation() {
      timer = setInterval(() => show((current + 1) % messages.length), 5000);
    }

    startRotation();

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        clearInterval(timer);
        show(i);
        startRotation();
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        bar.style.display = "none";
      });
    }
  }

  setWaLinks();
  setupHeroCTAs();
  applyContact();
  renderBrands();
  renderReviews();
  setupMobileMenu();
  setupStorePhotos();
  updateStoreStatus();
  setupExtraTracking();
  setupPromoBar();
})();
