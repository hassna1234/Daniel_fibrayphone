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
    const textComparativa = "Hola, quiero comparar opciones de fibra y móvil para mi dirección. ¿Me podéis ayudar?";
    const textAsesor = "Hola, quiero hablar con un asesor sobre mis opciones de fibra y móvil en Córdoba.";

    const comparativaBtn = document.getElementById("wa-hero-comparativa");
    if (comparativaBtn) {
      comparativaBtn.href = buildWhatsAppUrl({ text: textComparativa });
    }

    const asesorBtn = document.getElementById("wa-hero-asesor");
    if (asesorBtn) {
      asesorBtn.href = buildWhatsAppUrl({ text: textAsesor });
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

  const CONSENT_KEY = "fibrayphone-analytics";

  function consentChoice() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch (_) {
      return null;
    }
  }

  function setConsentChoice(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (_) {}
  }

  const ADS_DENIED = {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  };

  function measurementEnabled() {
    return cfg.analyticsEnabled === true;
  }

  function gtagPush() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  function initAnalytics() {
    if (!measurementEnabled()) return;
    if (consentChoice() !== "accepted") return;
    if (!gaId || !/^G-/i.test(gaId)) return;
    window["ga-disable-" + gaId] = false;
    if (window.__fpGaLoaded) {
      gtagPush();
      window.gtag("set", "ads_data_redaction", true);
      window.gtag("set", "url_passthrough", false);
      window.gtag("consent", "update", Object.assign({ analytics_storage: "granted" }, ADS_DENIED));
      return;
    }
    window.__fpGaLoaded = true;
    const campaign = campaignFromUrl();
    gtagPush();
    window.gtag("set", "ads_data_redaction", true);
    window.gtag("set", "url_passthrough", false);
    window.gtag("consent", "default", Object.assign({
      analytics_storage: "granted",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "granted",
    }, ADS_DENIED));
    gtag("js", new Date());
    gtag("config", gaId, {
      send_page_view: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
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
    if (!measurementEnabled() || consentChoice() !== "accepted" || typeof gtag !== "function" || !gaId) return;
    gtag("event", eventName, Object.assign({ transport_type: "beacon" }, params || {}));
  }

  function trackClick(id, el) {
    const context = {};
    const href = el?.getAttribute("href") || "";
    if (el?.dataset?.landing) context.landing = el.dataset.landing;
    else if (document.body.dataset.landing) context.landing = document.body.dataset.landing;
    if (el?.dataset?.position) context.position = el.dataset.position;
    if (el?.dataset?.action) context.action = el.dataset.action;
    const isWa = id.startsWith("wa-") || el?.hasAttribute("data-wa-service") || href.includes("wa.me");
    const isCall = id.startsWith("call-") || href.startsWith("tel:");
    if (isWa) {
      track("clic_whatsapp", { punto: id, ...context });
      return;
    }
    if (isCall) {
      track("clic_llamar", { punto: id, ...context });
      return;
    }
    if (id.startsWith("maps-") || id === "google-reviews") {
      track("clic_como_llegar", { punto: id });
      return;
    }
    if (id.startsWith("cta-") || id.startsWith("footer-")) {
      track("clic_cta", { cta_id: id, ...context });
    }
  }

  function removeConsentBanner() {
    document.getElementById("consent-banner")?.remove();
  }

  function updateConsentStatus() {
    const status = document.getElementById("consent-status");
    if (!status) return;
    const choice = consentChoice();
    status.textContent = choice === "accepted"
      ? "Analítica aceptada. No incluye publicidad ni remarketing, ni enviamos nombre, teléfono o mensajes."
      : choice === "rejected"
        ? "Analítica rechazada. Google Analytics no está cargado."
        : "Aún no has elegido.";
  }

  function showConsentBanner() {
    if (document.getElementById("consent-banner")) return;
    const banner = document.createElement("div");
    banner.className = "consent";
    banner.id = "consent-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-modal", "true");
    banner.setAttribute("aria-labelledby", "consent-title");
    banner.innerHTML = `
      <div class="consent__box">
        <h2 id="consent-title" tabindex="-1">Analítica de la web</h2>
        <p>Si aceptas, Google Analytics cuenta visitas y clics en WhatsApp, llamada y formulario. Eso no autoriza publicidad ni remarketing. No enviamos tu nombre, teléfono ni el texto de los mensajes. Aceptar y rechazar hacen lo mismo de fácil, y puedes cambiarlo cuando quieras.</p>
        <div class="consent__actions">
          <button type="button" class="btn btn--outline" id="consent-reject">Rechazar</button>
          <button type="button" class="btn btn--primary" id="consent-accept">Aceptar</button>
        </div>
      </div>`;
    document.body.appendChild(banner);
    banner.querySelector("#consent-reject").addEventListener("click", () => applyConsent("rejected"));
    banner.querySelector("#consent-accept").addEventListener("click", () => applyConsent("accepted"));
    banner.querySelector("#consent-title").focus();
  }

  function applyConsent(value) {
    if (!measurementEnabled()) return;
    setConsentChoice(value);
    if (gaId) window["ga-disable-" + gaId] = value !== "accepted";
    if (value !== "accepted" && window.__fpGaLoaded && typeof window.gtag === "function") {
      window.gtag("consent", "update", Object.assign({ analytics_storage: "denied" }, ADS_DENIED));
      window.gtag = function () {};
    }
    removeConsentBanner();
    updateConsentStatus();
    if (value === "accepted") initAnalytics();
  }

  function setupConsent() {
    if (!measurementEnabled()) {
      document.getElementById("open-analytics")?.setAttribute("hidden", "");
      return;
    }
    if (consentChoice() === "rejected" && gaId) window["ga-disable-" + gaId] = true;
    const privacyBox = document.querySelector("#privacy-modal .modal__box");
    if (privacyBox && !document.getElementById("consent-status")) {
      const controls = document.createElement("div");
      controls.className = "consent-controls";
      controls.innerHTML = `
        <p id="consent-status"></p>
        <div class="consent__actions">
          <button type="button" class="btn btn--outline" id="privacy-reject">Rechazar analítica</button>
          <button type="button" class="btn btn--primary" id="privacy-accept">Aceptar analítica</button>
        </div>`;
      privacyBox.appendChild(controls);
      controls.querySelector("#privacy-reject").addEventListener("click", () => applyConsent("rejected"));
      controls.querySelector("#privacy-accept").addEventListener("click", () => applyConsent("accepted"));
    }

    let analyticsBtn = document.getElementById("open-analytics");
    if (!analyticsBtn) {
      const privacyLink = document.getElementById("open-privacy-footer");
      analyticsBtn = document.createElement("button");
      analyticsBtn.type = "button";
      analyticsBtn.id = "open-analytics";
      analyticsBtn.className = "link-button";
      analyticsBtn.textContent = "Analítica";
      if (privacyLink) privacyLink.before(analyticsBtn);
      else document.querySelector(".footer__inner")?.appendChild(analyticsBtn);
    }
    analyticsBtn.hidden = false;
    analyticsBtn.addEventListener("click", () => showConsentBanner());

    updateConsentStatus();
    if (consentChoice() === "accepted") initAnalytics();
    else if (!consentChoice()) showConsentBanner();
  }

  function setupExtraTracking() {
    // Email links
    document.querySelectorAll('a[href^="mailto:"]').forEach((el) => {
      el.addEventListener("click", () => {
        track("clic_email", { punto: "mailto" });
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

  setupConsent();

  document.querySelectorAll("[data-track]").forEach((el) => {
    el.addEventListener("click", () => {
      trackClick(el.getAttribute("data-track"), el);
    });
  });

  const yearEl = document.getElementById("year") || document.getElementById("year-o2");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const modal = document.getElementById("privacy-modal");
  const openers = [
    document.getElementById("open-privacy"),
    document.getElementById("open-privacy-inline"),
    document.getElementById("open-privacy-footer"),
  ];
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
        if (!body.ok) throw new Error("formulario");
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

    if (form.dataset.sending === "1") return;
    form.dataset.sending = "1";
    const data = { nombre, telefono, servicio, mensaje };
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando…";

    const waUrl = buildWhatsAppUrl({ text: formWaText(data) });
    const waSuccess = document.getElementById("wa-success");
    if (waSuccess) waSuccess.href = waUrl;

    sendLeadEmail(data)
      .then(() => {
        track("solicitud_formulario", { servicio });
        showFormStatus("Hemos recibido tu solicitud. Si quieres, continúa por WhatsApp. El mensaje solo nos llega cuando lo envías.", false);
      })
      .catch(() => {
        showFormStatus("No hemos podido recibir la solicitud. Si quieres, puedes continuarla por WhatsApp.", true);
      })
      .finally(() => {
        form.dataset.sending = "0";
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar solicitud";
        const box = document.getElementById("form-success");
        if (box) {
          box.hidden = false;
          box.classList.add("visible");
        }
      });
  });

  function renderBrands() {
    const brands = cfg.brands;
    if (!brands) return;

    function fill(containerId, data) {
      const el = document.getElementById(containerId);
      if (!el) return;

      let html = "";
      if (Array.isArray(data)) {
        html = data.map((n) => `<span class="brand-chip">${n}</span>`).join("");
      } else {
        const confirmed = data?.confirmed ?? [];
        const other = data?.other ?? [];
        html = confirmed.map((n) => `<span class="brand-chip">${n}</span>`).join("");
        if (other.length) {
          html += `<span class="brands-other-label">También comparamos:</span>`;
          html += other.map((n) => `<span class="brand-chip brand-chip--other">${n}</span>`).join("");
        }
      }
      el.innerHTML = html;
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
    deportes:    "Hola, quiero consultar las opciones actuales de fibra y móvil con deporte para mi dirección. ¿Podéis decirme qué hay vigente?",
    estudiantes: "Hola, necesito fibra para un piso de estudiantes o compartido en Córdoba. ¿Podéis decirme las opciones vigentes para esa dirección?",
    luz:         "Hola, quiero enviaros mi factura de luz o gas para que reviséis consumo, potencia, precios y servicios. ¿Podéis comprobar si puedo ahorrar?",
    alarma:      "Hola, he visto la página de alarmas de Fibrayphone y quiero solicitar un estudio gratuito para mi vivienda o negocio",
  };

  document.querySelectorAll("[data-wa-service]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const service = el.getAttribute("data-wa-service");
      const text = WA_SERVICE_TEXTS[service] || defaultWaText();
      window.location.href = buildWhatsAppUrl({ text });
    });
  });

  function updateStoreStatus() {
    const nodes = document.querySelectorAll("#store-status, .store-status");
    if (!nodes.length) return;
    try {
      const now = new Date();
      const spain = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Madrid" }));
      const day = spain.getDay();
      const t = spain.getHours() * 60 + spain.getMinutes();
      const T = (h, m) => h * 60 + m;
      let open = false;
      if (day >= 1 && day <= 4) {
        open = (t >= T(9, 30) && t < T(14, 0)) || (t >= T(17, 0) && t < T(20, 30));
      } else if (day === 5) {
        open = t >= T(9, 30) && t < T(14, 0);
      } else if (day === 6) {
        open = t >= T(10, 0) && t < T(13, 30);
      }
      nodes.forEach((el) => {
        el.textContent = open ? "Abierto ahora" : "Ahora cerrado";
        el.className = "store-status " + (open ? "store-status--open" : "store-status--closed");
        el.hidden = false;
      });
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
