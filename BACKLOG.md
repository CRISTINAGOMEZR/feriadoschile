# Backlog — misferiados.cl

> Estado: ✅ Hecho · 🔄 En progreso · 🟡 Pendiente · 💡 Idea

---

## 🔥 Prioridad 1 — Sprint 1 (Mobile/Responsive)

> Product Backlog v1.0 · 2026-04-16 · Épicas: Navegación + Layout

### 🧭 Épica: Navegación

| # | Historia | Prioridad | Categoría | SP | Estado | Criterios de aceptación |
|---|---|---|---|---|---|---|
| NAV-01 | Menú hamburguesa que se abre/cierra fácilmente en mobile | Crítica | Must Have | 5 | ✅ Hecho | Abre/cierra con un toque · Ícono visible en <768px · Overlay semitransparente · Cierra al tocar fuera |
| NAV-02 | Ítems del menú con área de toque mínima 48px | Alta | Must Have | 3 | ✅ Hecho | Alto mínimo 48px · Espaciado ≥8px · Sin superposición táctil · WCAG 2.5.5 |
| NAV-03 | Menú sticky al hacer scroll | Alta | Must Have | 3 | ✅ Hecho | Header fijo con z-index correcto · No cubre contenido · Funciona en iOS Safari y Chrome Android |
| NAV-04 | Botón "Volver arriba" flotante | Media | Should Have | 2 | ✅ Hecho | Aparece al bajar 300px · Smooth scroll · No bloquea contenido |
| NAV-05 | Links de navegación activos resaltados | Media | Should Have | 2 | ✅ Hecho | Color diferenciado · Aplica en menú hamburguesa · Contraste ≥4.5:1 WCAG AA |

### 🖼️ Épica: Layout / Imágenes

| # | Historia | Prioridad | Categoría | SP | Estado | Criterios de aceptación |
|---|---|---|---|---|---|---|
| LAY-01 | Imágenes responsive sin desbordamiento | Crítica | Must Have | 5 | ✅ Hecho | max-width:100% · Sin scroll horizontal <375px · loading="lazy" |
| LAY-02 | Layout multi-columna colapsa a 1 columna en mobile | Crítica | Must Have | 5 | ✅ Hecho | Grid/Flex a 1 col en <768px · Sin overflow horizontal · Padding lateral ≥16px |
| LAY-03 | Botones CTA con tamaño óptimo para pulgar | Alta | Must Have | 3 | ✅ Hecho | Ancho mínimo 44px · Alto mínimo 44px |

---

## 🗂️ Prioridad Alta — Backlog General

| # | Tarea | Estado | Notas |
|---|---|---|---|
| B-01 | Validar que Google Analytics esté recibiendo datos | 🟡 Pendiente | Ir a GA4 > Informes > Tiempo real. Tag: `G-9VSSTEV2N7` |
| B-02 | Validar cobertura en Google Search Console | 🟡 Pendiente | Verificar sitemap indexado y sin errores de rastreo |
| T-01 | Refactor limpio pendiente (simplify) | 🟡 Pendiente | Ver detalles abajo en sección Deuda Técnica |
| D-01 | Revisar diseño mobile — nav y sección panoramas | 🔄 En progreso | Cubierto por Sprint 1 Mobile |

---

## 🎨 Diseño & UX

| # | Tarea | Estado | Notas |
|---|---|---|---|
| D-02 | **Rediseño de paleta + design system** | 🟡 Pendiente | Definir tokens de color, tipografía, espaciado y componentes base antes de seguir iterando. Incluye modo oscuro como opción. |
| D-03 | **Verificar accesibilidad en todos los dispositivos** | 🟡 Pendiente | Desktop, tablet y móvil. WCAG AA mínimo: contraste, aria-labels, navegación por teclado, tamaño de tap targets en móvil |
| D-04 | Accesibilidad: contraste `--muted` | 🟡 Pendiente | `#7B8DB0` sobre `#F5F7FF` puede fallar WCAG AA — parte de D-03 |
| D-05 | Empty state en vista "por mes" sin feriados | 🟡 Pendiente | Muestra lista vacía sin mensaje explicativo |
| D-06 | Ampliar panoramas con imágenes o ilustraciones | 💡 Idea | Cards de actividades son texto puro; imagen destacada mejoraría el visual |

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
