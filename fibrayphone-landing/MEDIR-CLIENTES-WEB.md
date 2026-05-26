# Google Analytics 4 — Fibrayphone (paso a paso)

## Parte 1 — Crear la cuenta (10 min)

1. Abre **https://analytics.google.com**
2. Inicia sesión con tu **Gmail** (el que uses para el negocio).
3. Pulsa **Empezar a medir** (o **Administrar** si ya tienes cuenta).
4. **Nombre de la cuenta:** `Fibrayphone` → Siguiente.
5. **Nombre de la propiedad:** `Fibrayphone web` → Zona horaria **España** → Siguiente.
6. Datos del negocio: categoría **Servicios** (o similar) → Siguiente.
7. Objetivos: marca **Generar clientes potenciales** → Crear.
8. Elige **Web** → URL: `https://www.fibrayphone.es` → Nombre del flujo: `Web fibrayphone.es`.
9. Copia el **ID de medición** (empieza por **`G-`**, ejemplo `G-ABC12XYZ34`).

---

## Parte 2 — Activar en la web

### En tu PC

1. Abre `C:\Users\fibra\fibrayphone-landing\js\config.js`
2. Busca `gaId:` y pega tu ID entre comillas:

```javascript
gaId: "G-TU-ID-AQUI",
```

3. Guarda el archivo.

### Subir a GitHub (para que funcione en fibrayphone.es)

1. Entra en tu repo en **github.com**
2. Carpeta `js` → archivo **config.js** → icono **lápiz** (Edit)
3. Cambia la línea `gaId: ""` por tu `G-...`
4. **Commit changes**

O sube el `config.js` desde el PC como hiciste con el resto de archivos.

Espera 1–2 minutos al deploy de Vercel.

---

## Parte 3 — Comprobar que funciona

1. En Analytics: menú **Informes** → **Tiempo real**.
2. En el móvil o PC abre **https://www.fibrayphone.es**
3. Pulsa **WhatsApp** o **Enviar por WhatsApp** en el formulario.
4. En Tiempo real deberías ver **1 usuario activo** y eventos en unos segundos.

Si no aparece nada tras 5 minutos:
- Revisa que el ID en `config.js` empiece por `G-` (sin espacios).
- Prueba en ventana de incógnito (sin bloqueadores de anuncios).

---

## Qué puedes medir cada semana

| En Analytics | Qué significa |
|--------------|----------------|
| **Usuarios** / **Sesiones** | Cuánta gente entra a la web |
| **Adquisición** → Tráfico | Si vienen de Google, Maps, directo, etc. |
| **Eventos** → `contact` | Clics en WhatsApp o Llamar |
| **Eventos** → `generate_lead` | Envíos del formulario (abren WhatsApp) |
| **Eventos** → `select_content` | Clics en “Comparativa”, ofertas, etc. |

### Eventos importantes (conversiones)

- **contact** (method: whatsapp) = interés fuerte por WhatsApp  
- **contact** (method: phone) = clic en llamar  
- **generate_lead** = rellenó el formulario y fue a WhatsApp  

En Admin → **Eventos** → puedes marcar `generate_lead` y `contact` como **eventos clave** para verlos en el resumen.

---

## Privacidad

La web ya menciona Analytics en la política de privacidad (modal al enviar el formulario).

---

## Enlace en Google Maps (recomendado)

En el perfil de empresa, campo **Sitio web**:

`https://www.fibrayphone.es/?from=maps`

El cliente pulsa el botón web; no ve el enlace largo. La web registra el origen y limpia la barra a `fibrayphone.es`.

En Analytics → **Adquisición** verás **google / maps**.

---

## Resumen

1. Crear propiedad en analytics.google.com → copiar **G-...**  
2. Pegar en `js/config.js` → subir a GitHub  
3. Enlace Maps: `?from=maps`  
4. Mirar **Tiempo real** y cada semana **Eventos** y **Adquisición**
