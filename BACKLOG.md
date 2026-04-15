# Backlog — misferiados.cl

> Estado: ✅ Hecho · 🔄 En progreso · 🟡 Pendiente · 💡 Idea

---

## 🔥 Prioridad Alta — Próxima sesión

| # | Tarea | Estado | Notas |
|---|---|---|---|
| B-01 | Validar que Google Analytics esté recibiendo datos | 🟡 Pendiente | Ir a GA4 > Informes > Tiempo real. Tag: `G-9VSSTEV2N7` |
| B-02 | Validar cobertura en Google Search Console | 🟡 Pendiente | Verificar sitemap indexado y sin errores de rastreo |
| T-01 | Refactor limpio pendiente (simplify) | 🟡 Pendiente | Ver detalles abajo en sección Deuda Técnica |
| D-01 | Revisar diseño mobile — nav y sección panoramas | 🟡 Pendiente | Nav comprimido en < 380px; sección panoramas no se ha visto en móvil |

---

## 🎨 Diseño & UX

| # | Tarea | Estado | Notas |
|---|---|---|---|
| D-02 | Accesibilidad: revisar contraste de colores | 🟡 Pendiente | `--muted: #7B8DB0` puede fallar WCAG AA sobre `--bg: #F5F7FF` |
| D-03 | Accesibilidad: agregar `aria-label` a botones | 🟡 Pendiente | Botones de año y vista no tienen aria-label |
| D-04 | Empty state en vista "por mes" sin feriados | 🟡 Pendiente | Muestra lista vacía sin mensaje explicativo |
| D-05 | Ampliar panoramas con imágenes o ilustraciones | 💡 Idea | Las cards de actividades son texto puro; una imagen destacada mejoraría mucho el visual |

---

## 📊 Analytics & SEO

| # | Tarea | Estado | Notas |
|---|---|---|---|
| A-01 | Validar GA4 — pageviews en SPA | 🟡 Pendiente | La SPA cambia vistas sin recargar — verificar si GA registra cada página |
| A-02 | Agregar event tracking a cambios de año y vista | 🟡 Pendiente | Útil para saber qué año/vista usan más los usuarios |
| A-03 | Verificar sitemap en Search Console | 🟡 Pendiente | URL: https://misferiados.cl/sitemap.xml |
| A-04 | Revisar Core Web Vitals en Search Console | 🟡 Pendiente | Sitio es estático y rápido, debería estar bien |

---

## 🔧 Deuda Técnica

| # | Tarea | Estado | Notas |
|---|---|---|---|
| T-01a | Extraer `matchesSeason(a, season)` helper | 🟡 Pendiente | Predicado duplicado en `getActsForCat` y `renderActividades` |
| T-01b | Derivar `allCats` desde `Object.keys(CAT_LABELS)` | 🟡 Pendiente | Lista hardcodeada que puede desincronizarse |
| T-01c | Eliminar variable `actCatFilter` (dead state) | 🟡 Pendiente | Se escribe pero nunca se lee — confuso |
| T-01d | Mover `renderActividades` fuera de `renderAll` | 🟡 Pendiente | Actividades son independientes del año — se reconstruyen innecesariamente |

---

## 💰 Monetización (cuando haya tráfico)

| # | Tarea | Estado | Notas |
|---|---|---|---|
| M-01 | Evaluar umbral para Google AdSense | 💡 Idea | Revisar cuando superen ~500 visitas/mes orgánicas |
| M-02 | Definir zonas de ad placement | 💡 Idea | Candidatos: entre stats y próximo feriado, bajo lista, bajo panoramas |
| M-03 | Evaluar sponsors directos | 💡 Idea | Agencias de viajes, turismo, aerolíneas chilenas |
| M-04 | Implementar Google AdSense | 💡 Idea | Requiere solicitud y aprobación previa |

---

## 🗓️ Mantenimiento Anual

| # | Tarea | Cuándo | Notas |
|---|---|---|---|
| Y-01 | ⚠️ Agregar datos del año nuevo (2028) | **Octubre–Noviembre 2026** | Ver sección "Actualización Anual" en CLAUDE.md |
| Y-02 | Revisar cambios legislativos en feriados | **Noviembre–Diciembre** | Fuente: bcn.cl |
| Y-03 | Actualizar sitemap.xml con URLs del año nuevo | Al mismo tiempo que Y-01 | |
| Y-04 | Actualizar meta tags y title | Al mismo tiempo que Y-01 | Ej: "Feriados Chile 2026, 2027 y 2028" |

---

## ✅ Completado

| # | Tarea | Fecha |
|---|---|---|
| — | Crear sitio inicial con datos 2025–2027 | — |
| — | Configurar dominio en NIC.cl + Cloudflare | — |
| — | Integrar Google Analytics 4 | — |
| — | Verificar Google Search Console | — |
| — | Crear sitemap.xml | — |
| — | Crear CLAUDE.md y BACKLOG.md | 2026-04-15 |
| B-03 | **Etapa 1:** eliminar página Fuente y feriados.cl, reescribir FAQ, scroll en lista, stats x/Y, toggle sandwich, sin iconos, favicon | 2026-04-15 |
| B-04 | **Etapa 2:** cards regionales estilo f-card, sección panoramas 25 actividades curadas, filtros por temporada/categoría, fixes UI (X banner, toggle funcional, próximo feriado azul) | 2026-04-15 |

---

## 💡 Ideas Futuras

- Newsletter mensual con recordatorio del próximo feriado
- Widget embebible para otros sitios (iframe o JS snippet)
- Versión PWA para instalar en móvil
- API pública de feriados (JSON) para desarrolladores
