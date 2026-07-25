# Cartel Vacaciones – FibrayPhone

Cartel profesional A4 para imprimir anunciando el cierre por vacaciones.

## Archivos

| Archivo                   | Descripción                                      |
|---------------------------|--------------------------------------------------|
| `cartel-vacaciones.html`  | Diseño completo del cartel (HTML/CSS)            |
| `exportar-cartel.js`      | Script Node.js para exportar a PDF y PNG         |
| `qr-code.png`             | ⚠️ **TÚ debes colocar aquí el QR original**     |

## Cómo colocar el QR

1. Guarda la imagen del QR que proporcionaste como **`qr-code.png`** en esta misma carpeta (`cartel-vacaciones/`).
2. El cartel la referencia con `<img src="./qr-code.png">` — sin modificar su contenido.

## Cómo exportar el cartel

### Opción A – Imprimir desde el navegador (más rápida)

1. Abre `cartel-vacaciones.html` en Chrome o Edge.
2. `Ctrl+P` → **Guardar como PDF**.
3. Configuración: Sin márgenes · Papel A4 · Fondo activado.

### Opción B – Script automático (PDF + PNG a 300 dpi)

```bash
cd cartel-vacaciones
npm install puppeteer
node exportar-cartel.js
```

Genera:
- `cartel-vacaciones.pdf` (impresión A4 lista)
- `cartel-vacaciones.png` (2480 × 3508 px, equivalente 300 dpi)

## Verificación del QR

Antes de imprimir, abre el HTML en el navegador y escanea el QR con el móvil.
Debe abrir WhatsApp con el número **696 78 54 71**.

## Datos del cartel

- **Cierre:** Domingo 27 de julio
- **Reapertura:** Lunes 10 de agosto
- **Atención WhatsApp durante vacaciones:** Altas de fibra y cambios de luz
- **Teléfono:** 696 78 54 71
