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
| LAY-04 | Imágenes en WebP con srcset adaptativo | Alta | Should Have | 5 | ⚪ N/A | No aplica — el sitio no tiene imágenes reales (panoramas usan gradientes CSS) |
| LAY-05 | Espaciados y márgenes apropiados para mobile | Alta | Must Have | 3 | ✅ Hecho | Margen lateral ≥16px · Espaciado entre secciones ≥24px · Revisado en 375px y 360px |
| LAY-06 | Tablas con scroll horizontal | Media | Should Have | 3 | ✅ Hecho | overflow-x:auto en leyes · overflow-x:hidden en contenedores · Sin afectar ancho página |
| LAY-07 | Videos embebidos responsive 16:9 | Media | Could Have | 2 | 🟡 Sprint 3 | aspect-ratio:16/9 · Contenedor responsive · YouTube/Vimeo |

### ✍️ Épica: Textos / Tipografía

| # | Historia | Prioridad | Categoría | SP | Estado | Criterios de aceptación |
|---|---|---|---|---|---|---|
| TYP-01 | Fuente base ≥16px en mobile | Crítica | Must Have | 2 | ✅ Hecho | font-size base ≥16px · Sin zoom de usuario · Párrafos, listas, etiquetas |
| TYP-02 | Títulos H1–H3 proporcionales a pantalla pequeña | Alta | Must Have | 3 | ✅ Hecho | H1 ≤28px mobile · H2 ≤22px · clamp() o media queries |
| TYP-03 | Interlineado adecuado | Alta | Must Have | 2 | ✅ Hecho | line-height ≥1.5 párrafos · ≥1.2 títulos |
| TYP-04 | Contraste texto/fondo ≥4.5:1 WCAG AA | Alta | Must Have | 2 | ✅ Hecho | Contraste ≥4.5:1 · Aplica a texto, links y botones |
| TYP-05 | Textos correctos en orientación landscape | Media | Should Have | 3 | ✅ Hecho | Media query landscape · Hero compacto · List height reducido · iOS y Android |

### ⚡ Épica: Rendimiento

| # | Historia | Prioridad | Categoría | SP | Estado | Criterios de aceptación |
|---|---|---|---|---|---|---|
| PERF-01 | Carga en <3s en 4G | Alta | Must Have | 8 | ✅ Hecho | preconnect Google Fonts · charset y viewport primero · LCP optimizado |
| PERF-02 | Scripts JS no bloquean render | Alta | Should Have | 5 | ✅ Hecho | defer en data.js y app.js · GA ya tiene async |

### ♿ Épica: Accesibilidad

| # | Historia | Prioridad | Categoría | SP | Estado | Criterios de aceptación |
|---|---|---|---|---|---|---|
| ACC-01 | Accesibilidad en botones interactivos | Alta | Must Have | 2 | ✅ Hecho | aria-label en todos los botones · aria-pressed en toggle · role="group" en view toggle |
| ACC-02 | Formularios con labels y teclado correcto | Alta | Must Have | 3 | ⚪ N/A | No aplica — el sitio no tiene formularios |

### 📐 Épica: UI Componentes

| # | Historia | Prioridad | Categoría | SP | Estado | Criterios de aceptación |
|---|---|---|---|---|---|---|
| UI-01 | Sin scroll horizontal en ningún breakpoint | Crítica | Must Have | 5 | ✅ Hecho | Ningún elemento >100vw · overflow-x:hidden · Probado en 320/375/414px |
| UI-02 | Cards de panoramas con portada visual | Crítica | Must Have | 5 | ✅ Hecho | Portada con gradiente por categoría · aspect-ratio 16:9 · layout horizontal en mobile |
| UI-03 | Cards de panoramas compactas en mobile | Alta | Must Have | 5 | ✅ Hecho | Layout horizontal (img izq, texto der) · ≤120px alto · Título ≤13px |
| UI-04 | Filtros de panoramas compactos sin desborde | Alta | Must Have | 3 | ✅ Hecho | Chips con wrap · Alto 36px · Sin overflow horizontal |

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
| D-07 | Regresión mobile reportada por Cristina | 🟡 **Próxima sesión** | Feedback 2026-08-03: "el sitio responsive en mobile se ve realmente mal", pese a que NAV/LAY/TYP del Sprint 1 y PERF/ACC del Sprint 2 están marcados ✅ Hecho. Re-testear en dispositivo real (no solo DevTools) antes de asumir que hay regresión de código. **Decidido 2026-08-03:** auditar a 390px y 360px en todas las secciones, priorizando el listado de feriados (es el contenido central y la mayoría del tráfico llega por búsqueda en móvil). Hay licencia para ajustar layout, espaciado y tamaños de fuente en mobile **sin preguntar**, siempre dentro de la paleta actual: no introducir colores nuevos ni reestructurar desktop. |
| D-08 | Rediseño visual: sacar el "look de IA", priorizar legibilidad humana | 🟡 Pendiente | Feedback 2026-08-03 de Cristina: quitar la estética genérica de IA, mejorar legibilidad y accesibilidad. Alimenta directamente a D-02 (rediseño de paleta + design system) — usar como criterio de aceptación del rediseño, no como tarea separada. **Decidido 2026-08-03: NO hay licencia autónoma acá.** "Sacar el look de IA" es una decisión de gusto. Presentar 2–3 direcciones visuales en un preview y esperar a que Cristina elija antes de tocar la paleta o la tipografía. |
| D-09 | "¿Qué hacer en el próximo feriado?" no referencia el feriado real | 🟡 Pendiente | Feedback 2026-08-03: el título de la sección Panoramas promete el "próximo feriado" pero el contenido solo filtra por temporada (`getSeason`/`matchesSeason`), sin usar la fecha del próximo feriado. Evaluar si debe nombrar el feriado próximo o al menos destacar actividades relevantes a esa fecha concreta. |

---

## 🗓️ Recomiéndame mis vacaciones

> Feature implementada (commits `077b42b`…`da499b6`) pero nunca se agregó a este backlog ni a VERSIONES.md — feedback de Cristina 2026-08-03 la trae a la vista.

| # | Tarea | Estado | Notas |
|---|---|---|---|
| VAC-01 | No recomendar fechas ya pasadas | 🟡 Pendiente | Cristina, 2026-08-03: probando el sitio en agosto, la tarjeta #1 seguía siendo "Lunes 5 de Enero" — una fecha ya pasada. `findVacationOpportunities` recorre todo el año calendario sin filtrar por la fecha de hoy. **Decidido 2026-08-03:** ocultar las fechas pasadas por completo — solo mostrar oportunidades desde hoy en adelante. Si el año en curso se queda sin oportunidades, pasar a los datos del año siguiente. |
| VAC-02 | Lógica de ranking poco intuitiva | 🟡 Pendiente | Cristina, 2026-08-03: "la lógica no cuadra, funciona raro, no es intuitiva". Causa raíz identificada en el PR #3: el ranking ordena por `ratio = totalRestDays / daysFree`, que garantiza matemáticamente que siempre ganen los bloques de 1 día. **Decidido 2026-08-03:** dejar de rankear por un único ratio global. Mostrar **la mejor opción por cada tamaño de bloque** ("con 1 día → 4 de descanso", "con 3 días → 9", "con 5 días → 11"), para que la persona elija según cuántos días de vacaciones está dispuesta a gastar, en vez de que el sitio finja que hay una sola respuesta correcta. |
| VAC-03 | Documentar la feature | 💡 Idea | Una vez resueltos VAC-01/VAC-02, agregar entrada retroactiva en VERSIONES.md — hoy no existe registro de cuándo ni por qué se agregó "Recomiéndame mis vacaciones". |
| VAC-04 | `daysFree` debe contar solo días hábiles | 🟡 Pendiente | Hallazgo del bug-hunter (2026-08-03): un bloque jueves–lunes se cobra como 5 días de vacaciones cuando en la vida real cuesta 3 — nadie pide libre el fin de semana. Esto castiga sistemáticamente a los bloques largos y es una de las razones de fondo del problema de VAC-02. **Decidido 2026-08-03:** contar solo días hábiles. |
| VAC-05 | El input "días disponibles" inventa días | 🟡 Pendiente | Hallazgo del bug-hunter (2026-08-03): hoy el valor del input se **suma** directo a `totalRestDays` sin cambiar la ventana calculada, produciendo textos como "tomándote 1 día obtienes 10 días de descanso" que no corresponden a ninguna fecha mostrada. **Decidido 2026-08-03:** convertirlo en un **filtro** — mostrar solo las oportunidades que cuesten esa cantidad de días o menos. |
| VAC-06 | La fórmula de la tarjeta no suma | 🟡 Pendiente | Hallazgo del bug-hunter (2026-08-03): un feriado que cae sábado o domingo se cuenta a la vez en `holidayCount` y en `weekendCount`, y un día sandwich tomado como vacación se cuenta como "vac" y como "sandwich". Resultado: tarjetas que muestran "1 + 2 + 2 = 4". Hacer las categorías mutuamente excluyentes (feriado > sandwich > fin de semana). Se arregla junto con VAC-02 porque toca el mismo render. |
| VAC-07 | Desfase de días en el cambio de horario | 🟡 Pendiente | Hallazgo del bug-hunter (2026-08-03): el conteo `while(cur<=end){cnt++;cur.setDate(+1)}` pierde un día cuando la ventana cruza el inicio del horario de verano (primer domingo de septiembre). Verificado con `TZ=America/Santiago`: **75 ventanas mal contadas en 2025–2027, todas en la semana previa a Fiestas Patrias**. Invisible hoy porque solo afecta bloques multi-día, que el ranking actual nunca muestra — pero al resolver VAC-02 **pasa a ser visible**. Fix: `Math.round((midnight(end)-midnight(start))/86400000)+1`, el mismo idioma que ya usa `calcSW`. |

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
- Mecanismo de feedback de usuarios reales (formulario simple o botón flotante) — pedido por Cristina 2026-08-03, para capturar opiniones de visitantes en vez de solo inferir desde analytics
