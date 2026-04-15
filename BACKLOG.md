# Backlog — misferiados.cl

> Estado: ✅ Hecho · 🔄 En progreso · 🟡 Pendiente · 💡 Idea

---

## 🔥 Prioridad Alta

| # | Tarea | Estado | Notas |
|---|---|---|---|
| B-01 | Validar que Google Analytics esté recibiendo datos | 🟡 Pendiente | Ir a GA4 > Informes > Tiempo real. Tag: `G-9VSSTEV2N7` |
| B-02 | Validar cobertura en Google Search Console | 🟡 Pendiente | Verificar que el sitemap esté indexado y no haya errores de rastreo |
| B-03 | Ajustes de diseño — etapa 1 | ✅ Hecho | Ver detalle en sección Completado |

---

## 🎨 Diseño & UX

| # | Tarea | Estado | Notas |
|---|---|---|---|
| D-01 | Revisar diseño mobile (nav comprimido) | 🟡 Pendiente | En pantallas < 380px el nav se ve apretado |
| D-02 | Accesibilidad: revisar contraste de colores | 🟡 Pendiente | `--muted: #7B8DB0` puede fallar WCAG AA sobre `--bg: #F5F7FF` |
| D-03 | Accesibilidad: agregar `aria-label` a botones icono | 🟡 Pendiente | Botones de año y vista no tienen aria-label |
| D-04 | Mejorar empty state cuando no hay feriados en un mes | 🟡 Pendiente | Vista "por mes" muestra lista vacía sin mensaje |

---

## 📊 Analytics & SEO

| # | Tarea | Estado | Notas |
|---|---|---|---|
| A-01 | Validar GA4 — eventos de navegación entre páginas | 🟡 Pendiente | La SPA cambia vistas sin recargar — verificar si GA registra pageviews |
| A-02 | Agregar event tracking a cambios de año y vista | 🟡 Pendiente | Útil para saber qué año y vista usan más los usuarios |
| A-03 | Verificar sitemap en Search Console | 🟡 Pendiente | URL: https://misferiados.cl/sitemap.xml |
| A-04 | Revisar Core Web Vitals en Search Console | 🟡 Pendiente | Sitio es estático y rápido, debería estar bien |

---

## 💰 Monetización (cuando haya tráfico)

| # | Tarea | Estado | Notas |
|---|---|---|---|
| M-01 | Evaluar umbral de tráfico para aplicar a Google AdSense | 💡 Idea | Google no tiene mínimo oficial pero recomienda tener contenido estable y tráfico orgánico. Revisar cuando se superen ~500 visitas/mes. |
| M-02 | Definir zonas de ad placement que no rompan UX | 💡 Idea | Candidatos: entre stats y próximo feriado, al final de lista, sidebar en desktop |
| M-03 | Evaluar alternativa: anuncios directos / sponsors | 💡 Idea | Ej: empresas de turismo, agencias de viajes chilenas |
| M-04 | Implementar Google AdSense | 💡 Idea | Requiere solicitud y aprobación. Tener CLAUDE.md actualizado con el proceso |

---

## 🗓️ Mantenimiento Anual

| # | Tarea | Cuándo | Notas |
|---|---|---|---|
| Y-01 | ⚠️ Agregar datos del año nuevo (ej: 2028) | **Octubre–Noviembre de cada año** | Ver sección "Actualización Anual" en CLAUDE.md |
| Y-02 | Revisar cambios legislativos en feriados | **Noviembre–Diciembre** | Fuente: bcn.cl — buscar leyes nuevas o modificaciones |
| Y-03 | Actualizar sitemap.xml con URLs del año nuevo | Al mismo tiempo que Y-01 | |
| Y-04 | Actualizar meta tags y title para el año nuevo | Al mismo tiempo que Y-01 | Ej: "Feriados Chile 2026, 2027 y 2028" |

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
| B-03 | **Etapa 1 diseño:** eliminar fuente/feriados.cl, reescribir FAQ, scroll en lista, stats x/Y, toggle sandwich, sin iconos, favicon | 2026-04-15 |

---

## 💡 Ideas Futuras

- Newsletter mensual con recordatorio del próximo feriado
- Widget embebible para otros sitios (iframe o JS snippet)
- Versión PWA para instalar en móvil
- API pública de feriados (JSON) para desarrolladores
