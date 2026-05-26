/**

 * Configuración — edita aquí teléfono, reseñas y marcas

 */

window.FIBRAYPHONE = {

  /** Teléfono y WhatsApp (mismo número, sin espacios, con prefijo 34) */

  phone: "34696785471",

  phoneDisplay: "696 78 54 71",

  whatsapp: "34696785471",

  /** Enlace a vuestras reseñas en Google Maps (pegad la URL de vuestro perfil) */

  googleMapsUrl:

    "https://www.google.com/maps/search/?api=1&query=Fibrayphone+Calle+Diego+Serrano+13+Cordoba",



  /** Resumen Google (actualizad si cambia) */

  googleRating: "5,0",

  googleReviewCount: "200+",



  /**

   * Reseñas — sustituid por las reales de Google:

   * 1. Abre Google Maps → busca "Fibrayphone Córdoba"

   * 2. Pestaña Reseñas → copia texto y nombre (o iniciales)

   * 3. Pegad aquí abajo

   */

  reviews: [

    {
      text: "He contratado aquí el WiFi y móvil y me han atendido muy bien, me han recomendado la mejor opción para mi casa y han ayudado en todo, contratación y después con la baja de mi otra compañía.",
      author: "Felipa Susana",
      date: "Hace 4 meses · Google",
    },

    {
      text: "Daniel fue quien me atendió: excelente atención, trato muy amable y mucha eficiencia. Son unos profesionales. Por segunda vez me atendió Daniel, y fenomenal: muy resolutivo y con un trato estupendo.",
      author: "Raquel",
      date: "Hace un mes · Google",
    },

    {
      text: "En esta asesoría me llevan la telefonía, el wifi y la luz, siempre me recomiendan la tarifa más económica, muy buenos en su trabajo Daniel y Hassna.",
      author: "Rafael",
      date: "Hace 2 meses · Google",
    },

  ],



  formspreeId: "",

  notifyEmail: "info@fibrayphone.es",

  /**
   * Google Analytics 4 — ID de medición (formato G-XXXXXXXXXX)
   * Crear en https://analytics.google.com → Admin → Flujos de datos → Web
   * Guía: ver MEDIR-CLIENTES-WEB.md en esta carpeta
   */
  gaId: "G-MGWELKXBFS",

  /**
   * Fotos de la tienda (solo el nombre del archivo dentro de assets/)
   * Si Windows te duplica la extensión, pon aquí el nombre EXACTO que ves en el Explorador.
   */
  storePhotos: {
    fachada: "tienda-fachada.webp",
    interior: "tienda-interior.webp",
  },

  brands: {

    telecom: [

      "Movistar",

      "Orange",

      "Vodafone",

      "Yoigo",

      "MásMóvil",

      "Digi",

      "O2",

      "Pepephone",

      "Lowi",

      "Jazztel",

    ],

    energia: [

      "Iberdrola",

      "Endesa",

      "Naturgy",

      "Repsol",

      "TotalEnergies",

      "Holaluz",

      "Octopus Energy",

      "Gana Energía",

      "Lucera",

      "CHC Energía",

    ],

    seguridad: ["Segurma", "Movistar Prosegur", "Verisure"],

  },

};


