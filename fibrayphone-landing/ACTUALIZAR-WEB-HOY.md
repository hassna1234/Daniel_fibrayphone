# Actualizar fibrayphone.es con los cambios de hoy

## Checklist antes de subir

En `C:\Users\fibra\fibrayphone-landing\assets` deben estar:

- [ ] `tienda-fachada.webp`
- [ ] `tienda-interior.webp`
- [ ] `favicon.svg`, logos svg (opcional)

Comprueba en local: abre `index.html` → Ctrl+F5 → fotos, formulario WhatsApp, sección Nosotros, Segurma/Verisure en marcas.

---

## Si usas GitHub + Vercel (recomendado)

Repositorio: **Daniel_fibrayphone** (cuenta hassna1234).

### En PowerShell:

```powershell
cd C:\Users\fibra\fibrayphone-landing
git status
git add index.html css/styles.css js/config.js js/main.js vercel.json package.json api/ assets/
git add assets/tienda-fachada.webp assets/tienda-interior.webp
git commit -m "Actualiza web con envío email Resend"
git push origin main
```

Vercel despliega solo en 1–2 minutos. Comprueba https://www.fibrayphone.es

**No subas** archivos `.txt`, `.bat` (son instrucciones internas).

### Variable de entorno RESEND_API_KEY

Para que el formulario envíe copia por email necesitas configurar la API key de Resend en Vercel:

1. Entra en https://resend.com → Sign in → API Keys → Create API Key
2. Copia la key (empieza por `re_...`)
3. En Vercel → tu proyecto → Settings → Environment Variables
4. Añade: Name = `RESEND_API_KEY`, Value = la key que copiaste
5. Marca las tres casillas (Production, Preview, Development)
6. Guarda y haz **Redeploy** desde Deployments (para que coja la variable)

**Importante sobre el remitente:** Mientras no verifiques tu dominio en Resend, los emails salen desde `onboarding@resend.dev`. Para que salgan desde `@fibrayphone.es`, ve a Resend → Domains → Add domain → sigue los pasos DNS.

---

## Si subes a mano en vercel.com

1. Comprime solo: `index.html`, `css/`, `js/`, `assets/` (con los .webp), `vercel.json`, `package.json`, `api/`.
2. Proyecto → Deployments → redeploy o conecta push de GitHub.

Framework: **Other**, sin comando de build. Vercel instala `node_modules` automáticamente desde `package.json`.

---

## Activar medición de clientes

1. Sigue **MEDIR-CLIENTES-WEB.md** (crear GA4, copiar `G-...` en `config.js`).
2. Vuelve a hacer `git push` o redeploy.
3. Prueba en Tiempo real de Analytics.

---

## Comprobar que es la web nueva

En fibrayphone.es debe verse:

- Título: “Comparativa gratuita… en Córdoba”
- Botón formulario: “Enviar por WhatsApp”
- Sección “Quiénes somos” con fotos
- Email info@fibrayphone.es
- Marcas: Segurma, Movistar Prosegur, Verisure

Si ves la web antigua con promos tipo operador, el deploy sigue apuntando al proyecto Next.js viejo → cambia la carpeta/repo en Vercel Settings.
