const { Resend } = require("resend");

const ALLOWED_ORIGINS = [
  "https://www.fibrayphone.es",
  "https://fibrayphone.es",
  "http://localhost",
  "http://127.0.0.1",
];

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.some((o) => origin?.startsWith(o));
  return {
    "Access-Control-Allow-Origin": allowed ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

module.exports = async function handler(req, res) {
  const origin = req.headers.origin || "";
  const cors = corsHeaders(origin);
  Object.entries(cors).forEach(([k, v]) => res.setHeader(k, v));

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Método no permitido" });
  }

  const { nombre, telefono, servicio, mensaje } = req.body || {};

  if (!nombre || !telefono || !servicio) {
    return res.status(400).json({ ok: false, error: "Faltan campos obligatorios" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no configurada");
    return res.status(500).json({ ok: false, error: "Error de configuración del servidor" });
  }

  const resend = new Resend(apiKey);

  const htmlBody = `
    <h2>Nuevo lead desde fibrayphone.es</h2>
    <table style="border-collapse:collapse;font-family:sans-serif;">
      <tr><td style="padding:6px 12px;font-weight:bold;">Nombre</td><td style="padding:6px 12px;">${esc(nombre)}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Teléfono</td><td style="padding:6px 12px;">${esc(telefono)}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Servicio</td><td style="padding:6px 12px;">${esc(servicio)}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Comentario</td><td style="padding:6px 12px;">${esc(mensaje || "—")}</td></tr>
    </table>
    <p style="margin-top:16px;color:#888;font-size:13px;">Enviado automáticamente desde el formulario de fibrayphone.es</p>
  `;

  try {
    await resend.emails.send({
      from: "Fibrayphone Web <web@fibrayphone.es>",
      to: "info@fibrayphone.es",
      subject: `Nueva solicitud web — ${servicio} — ${nombre}`,
      html: htmlBody,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ ok: false, error: "No se pudo enviar el email" });
  }
};

function esc(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
