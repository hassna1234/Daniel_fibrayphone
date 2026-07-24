# AI/ — Índice y puerta de entrada para cualquier IA

> Leer este archivo primero. Explica qué contiene cada documento, en qué orden leerlos y qué documento prevalece cuando hay contradicción.

---

## Qué es esta carpeta

La carpeta `AI/` contiene el contexto completo del proyecto Fibrayphone. Está escrita para que cualquier IA —Cursor, Claude, ChatGPT, Codex, Gemini o cualquier otra— entienda el negocio, sus reglas y su código antes de proponer o ejecutar cualquier cambio.

Trabajar en este proyecto sin leer estos documentos produce decisiones técnicamente correctas pero comercialmente erróneas.

---

## Jerarquía de documentos

Cuando dos documentos se contradigan, el de mayor prioridad en esta lista prevalece:

| Prioridad | Archivo | Qué contiene |
|---|---|---|
| 1 | [`BUSINESS.md`](./BUSINESS.md) | Fuente de verdad del negocio. Historia, modelo, servicios, operadores, perfiles de cliente, objetivos, tono, principios fundamentales y reglas de decisión para IAs. **Si hay conflicto con cualquier otro documento, este gana.** |
| 2 | [`CONVERSION.md`](./CONVERSION.md) | Estrategia de conversión. CTAs, flujos de contacto, formularios, WhatsApp, llamadas y métricas clave. |
| 3 | [`SEO.md`](./SEO.md) | Posicionamiento local en Córdoba. Palabras clave, Schema.org, metadatos, sitemap y reglas de SEO técnico. |
| 4 | [`DESIGN.md`](./DESIGN.md) | Sistema visual. Colores, tipografía, componentes, espaciado y principios de diseño. |
| 5 | [`CODE_STANDARDS.md`](./CODE_STANDARDS.md) | Estándares de código. Convenciones, arquitectura del proyecto y criterios de calidad. |
| 6 | [`GROWTH.md`](./GROWTH.md) | Estrategia de crecimiento empresarial. Captación, fidelización, cross-sell, cultura comercial y priorización. No trata de código ni diseño. |
| 7 | [`CHECKLIST.md`](./CHECKLIST.md) | Lista de verificación antes de hacer push a producción. |
| 8 | [`PROMPTS.md`](./PROMPTS.md) | Prompts reutilizables para tareas frecuentes: textos, SEO, código y análisis. |

---

## BUSINESS.md es la fuente de verdad

`BUSINESS.md` describe cómo es y cómo debe ser Fibrayphone. Si cualquier otro documento, archivo de código, texto de la web o propuesta de IA contradice algo de `BUSINESS.md`, prevalece `BUSINESS.md`.

Esto incluye:
- Si el código hace algo distinto a lo que dice `BUSINESS.md`, el código debe corregirse.
- Si otro documento de esta carpeta describe algo de forma diferente, debe actualizarse para alinearse.
- Si una IA propone algo que contradice los principios de `BUSINESS.md`, la propuesta debe rechazarse o reformularse.

---

## Orden de lectura según la tarea

No todos los documentos son necesarios para cada tarea. Este esquema ayuda a decidir qué leer:

### Antes de cualquier tarea
Leer siempre `BUSINESS.md` completo. Sin excepciones.

### Tarea de código (HTML, CSS, JS, API)
1. `BUSINESS.md`
2. `CODE_STANDARDS.md`
3. `DESIGN.md` — si el cambio afecta a la interfaz
4. `SEO.md` — si el cambio afecta a contenido, URLs o estructura HTML
5. `CHECKLIST.md` — antes del push

### Tarea de contenido o textos
1. `BUSINESS.md`
2. `CONVERSION.md`
3. `SEO.md`

### Tarea de diseño o UX
1. `BUSINESS.md`
2. `DESIGN.md`
3. `CONVERSION.md`

### Tarea de SEO
1. `BUSINESS.md`
2. `SEO.md`
3. `CONVERSION.md`

### Antes de hacer push a producción
1. `CHECKLIST.md` — siempre, independientemente de la tarea

---

## Estado de los documentos

| Archivo | Estado |
|---|---|
| `BUSINESS.md` | Completo y auditado |
| `INDEX.md` | Completo |
| `CONVERSION.md` | Completo y auditado |
| `SEO.md` | Completo y auditado |
| `DESIGN.md` | Pendiente de redactar |
| `CODE_STANDARDS.md` | Pendiente de redactar |
| `GROWTH.md` | Completo y auditado |
| `CHECKLIST.md` | Pendiente de redactar |
| `PROMPTS.md` | Pendiente de redactar |

---

*Actualizar este índice si se añaden, renombran o eliminan archivos en esta carpeta, o si cambia el estado de algún documento.*
