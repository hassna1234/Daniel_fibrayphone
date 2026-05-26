# Landing Fibrayphone

Web nueva orientada a **conversión local** (Córdoba): comparativa gratuita, llamada, WhatsApp y formulario.

## Ver en local

Abre `index.html` en el navegador o, con Node/Python:

```bash
cd fibrayphone-landing
npx --yes serve .
```

## Personalizar contenido

- **Marcas:** edita las listas en `js/config.js` → `brands.telecom`, `brands.energia` y `brands.seguridad`.
- **Ofertas ejemplo:** edita los precios y textos en `index.html`, sección `#ofertas`.
- **Estudio gratuito:** textos en la franja cyan y en el formulario.

## Antes de publicar

1. **`js/config.js`**
   - `formspreeId`: crea un formulario gratis en [Formspree](https://formspree.io) (o conecta Zoho Forms → Bigin).
   - `gaId`: ID de Google Analytics 4 (opcional).

2. **Logo original**
   - Guarda la imagen que nos pasaste como **`assets/logo.png`** (mismo nombre, carpeta `assets`).
   - La web la usará automáticamente en cabecera y pie (si no existe, usa el SVG corporativo).

3. **Fotos de la tienda**
   - Añade `assets/tienda.jpg` y una sección en el HTML (opcional; te la podemos añadir).

4. **Reseñas**
   - En `index.html`, sección `#opiniones`: pega textos reales de Google.

5. **Subir al dominio**
   - Sube todo el contenido de esta carpeta a la raíz de `fibrayphone.es` (FTP / panel del hosting).
   - Mantén `index.html` en la raíz.

## Integrar con Zoho Bigin

Opciones sencillas:

- **Zoho Forms** embebido: crea formulario en Bigin → incrusta iframe en lugar del `<form>` actual.
- **Formspree + Zapier/Make**: email del lead → crea contacto en Bigin.
- **Email directo**: Formspree envía a `info@fibrayphone.es` y registráis manualmente (válido al inicio).

## Colores corporativos (logo original)

| Uso           | Color     |
|---------------|-----------|
| Cyan marca    | `#00A9C6` |
| Cyan oscuro   | `#008da6` |
| Fondo suave   | `#e5f7fa` |

## Estructura

```
fibrayphone-landing/
├── index.html
├── css/styles.css
├── js/config.js    ← configuración
├── js/main.js
├── assets/logo.svg
└── README.md
```
