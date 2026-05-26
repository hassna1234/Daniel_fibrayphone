# Subir la web a Vercel (fibrayphone.es)

Tu web nueva es **HTML estática** (carpeta `fibrayphone-landing`).
La antigua en Vercel seguramente era **Next.js** (carpeta en Descargas).

---

## Opción A — Desde la web de Vercel (la más fácil)

1. Entra en https://vercel.com e inicia sesión.
2. Abre tu proyecto **fibrayphone** (o como se llame).
3. Ve a **Settings** → **General** → baja hasta **Build & Development Settings**:
   - **Framework Preset:** `Other`
   - **Build Command:** déjalo **vacío**
   - **Output Directory:** déjalo **vacío** o pon `.`
   - **Install Command:** vacío
4. Guarda (**Save**).

5. En tu PC, comprime la carpeta (solo lo necesario):
   - `index.html`, `css/`, `js/`, `assets/` (logo svg, favicon)
   - `vercel.json`
   - **No hace falta** subir los `.txt` ni el `.bat` (instrucciones internas).

6. En Vercel: pestaña **Deployments** → botón **Deploy** o sube con **Git** si el proyecto está conectado a GitHub.

**Si el proyecto está ligado a GitHub (lo habitual):**
- Sustituye el contenido del repositorio por esta carpeta y haz push, O
- Crea un repo nuevo solo con `fibrayphone-landing` y reconecta el dominio.

---

## Opción B — Arrastrar carpeta (sin Git)

1. https://vercel.com/new
2. **Import** no hace falta si no tienes repo.
3. Usa **Vercel CLI** (abajo) o sube vía Git.

---

## Opción C — Terminal (Vercel CLI)

Abre PowerShell:

```powershell
cd C:\Users\fibra\fibrayphone-landing
npm i -g vercel
vercel login
vercel
```

Responde las preguntas:
- Set up and deploy? **Y**
- Which scope? tu cuenta
- Link to existing project? **Y** (elige el proyecto fibrayphone si sale)
- Override settings? **N** (o **Y** y framework **Other**, sin build)

Para publicar en producción:

```powershell
vercel --prod
```

---

## Dominio fibrayphone.es

1. Vercel → tu proyecto → **Settings** → **Domains**
2. Debe aparecer `fibrayphone.es` y `www.fibrayphone.es`
3. Si no está: **Add** → `fibrayphone.es`
4. En tu proveedor del dominio (donde compraste la web), los DNS deben apuntar a Vercel (registros que Vercel te muestra, tipo A o CNAME).

Cuando el deploy nuevo esté en **Production**, el dominio mostrará la web nueva en unos minutos.

---

## Después de publicar — cambiar textos

1. Editas `index.html` o `js/config.js` en el PC.
2. Vuelves a desplegar (`vercel --prod` o push a Git).
3. Listo.

---

## ¿Problema con la web vieja?

Si Vercel sigue mostrando la landing de ChatGPT/Next.js:
- El proyecto sigue compilando desde **Descargas\fibrayphone-landing** (Next.js).
- Hay que **cambiar la carpeta origen** a `C:\Users\fibra\fibrayphone-landing` o subir esta carpeta al repo conectado.

Si me dices si usas **GitHub** o solo **Vercel sin Git**, te guío el paso exacto siguiente.
