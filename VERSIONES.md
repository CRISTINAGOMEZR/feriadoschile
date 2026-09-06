# Versiones — misferiados.cl

> Registro de cambios por sesión. Cada versión incluye qué cambió, el commit hash para rollback, y el estado del sitio en ese momento.
>
> **Para hacer rollback a una versión:** `git revert <hash>` (seguro) o `git reset --hard <hash>` (destructivo)

---

## v1.7 — Fix: motor de "Recomiéndame mis vacaciones" · 2026-09-06

| Campo | Detalle |
|---|---|
| **Hash** | `pendiente` |
| **Estado** | 🟡 En PR, esperando aprobación |

### Contexto
La feature "Recomiéndame mis vacaciones" (js/app.js, sección VACACIONES) se construyó en un tramo
de commits previos (`0590fb4`…`d24f5ff`) sin quedar documentada en este archivo ni en BACKLOG.md.
Una auditoría de correctness encontró que el motor de cálculo no funcionaba como se pretendía.

### Cambios
- `countRestWindow` ahora expande la ventana de descanso real pedida (`windowStart..windowEnd`),
  no solo el primer día. Antes, `daysFree` nunca influía en el cálculo: pedir 1 o 10 días de
  vacaciones daba exactamente el mismo resultado, y ninguna oportunidad de más de 1 día llegaba
  a mostrarse (0 de 120 tarjetas simuladas en 2025-2027).
- El listado ya no recomienda fechas pasadas: se filtra desde `today` cuando el año seleccionado
  es el actual.
- La fórmula visible (`vac + feriados + fds + sandwich = días`) ya no cuenta un feriado de fin de
  semana dos veces (en "feriados" y en "fds"), ni suma los "días de vacaciones disponibles" al
  total como si fueran descanso extra — ese campo ahora solo filtra qué tan largo puede ser el
  plan pedido, saneado a un rango 0-30.
- Se descartan oportunidades que no aprovechan ningún feriado ni sandwich (antes, cualquier
  viernes o lunes suelto aparecía en la lista con "aprovechando: " vacío).
- El texto "De X a Y" y el mini calendario ahora usan la ventana de descanso ya expandida en vez
  de recalcularla con una fórmula que tenía un off-by-one (generaba una fila huérfana en el
  calendario y marcaba un día de más como "tu ventana").
- Cambiar de año (botones 2025/2026/2027) con el panel de vacaciones abierto ahora lo
  re-renderiza; antes quedaba mostrando datos del año anterior.
- Se eliminaron 13 `console.log` de depuración que quedaron en el código de producción.
- **Fuera de este cambio, a propósito:** el motor todavía no ve feriados del año siguiente/anterior
  al expandir una ventana cerca del 31 de diciembre (p. ej. no detecta que 31/12/2026 + Año Nuevo
  2027 + fin de semana da 4 días de descanso). Es un cambio de mayor alcance —requiere manejar años
  sin datos cargados (2024, 2028)— y se deja para un PR aparte.

### Verificación
Se corrió el algoritmo real (extraído de `js/app.js`, con los datos reales de `js/data.js`) en
Node para los 3 años y ambos estados del toggle "Contar sándwiches como gratis": 120 tarjetas en
total, 0 fechas pasadas, 0 fórmulas que no cuadran, 0 "aprovechando" vacíos. Se probó también en
el navegador (`python3 -m http.server 8765`, Chromium headless, 1280px y 375px): el panel abre,
calcula y cambia de año sin errores de consola atribuibles al código (los únicos errores en
consola son de red, por bloqueo de Google Fonts/Analytics en el entorno de pruebas).

### Rollback
```bash
git revert <hash-de-este-commit>
```

---

## v1.6 — Sprint 2: Rendimiento, Accesibilidad, Landscape · 2026-04-16

| Campo | Detalle |
|---|---|
| **Hash** | `a4a7ba4` |
| **Estado** | ✅ En producción |

### Cambios
- PERF-01: preconnect para Google Fonts, charset y viewport antes del resto del `<head>`
- PERF-02: `defer` en data.js y app.js — no bloquean render inicial
- ACC-01: aria-label en todos los botones (años, toggle sandwich, vistas, hamburguesa, volver arriba)
- TYP-05: media query landscape — hero compacto, lista reducida en mobile horizontal
- LAY-06: overflow-x:auto en ley-card, overflow-x:hidden en contenedores de páginas
- LAY-04 / ACC-02: marcados como N/A (sin imágenes reales ni formularios en el sitio)

### Rollback
```bash
git reset --hard c6d9c4d   # vuelve a v1.5 (Sprint 1 completo)
```

---

## v1.5 — Sprint 1 Mobile completo · 2026-04-16

| Campo | Detalle |
|---|---|
| **Hash** | `d708a4f` |
| **Estado** | ✅ En producción |

### Cambios
- LAY-05: Spacing entre secciones ≥24px, padding lateral 16px en mobile
- TYP-01: font-size base 16px global (sin zoom forzado)
- TYP-02: Títulos con clamp() — H1 ≤28px, H2 ≤20px en mobile
- TYP-03: line-height 1.5 en body, 1.2 en títulos
- TYP-04: Contraste de textos secundarios mejorado (#5a6a8a)
- UI-01: overflow-x:hidden en html y body, sin scroll horizontal
- UI-02: Cards panoramas con portada de gradiente por categoría (aspect-ratio 16:9)
- UI-03: Cards en mobile con layout horizontal (imagen izq, texto der, max 120px)
- UI-04: Filtros de categoría como chips compactos (36px, wrap)

### Rollback
```bash
git reset --hard 71708e9   # vuelve a v1.4 (Sprint 1 nav)
```

---

## v1.4 — Sprint 1 Mobile/Responsive · 2026-04-16

| Campo | Detalle |
|---|---|
| **Hash** | `45060ae` |
| **Estado** | ✅ En producción |

### Cambios
- NAV-01: Menú hamburguesa con overlay y animación (visible en <768px)
- NAV-02: Tap targets mínimo 48px en todos los ítems de nav
- NAV-03: Nav sticky con z-index 200, no cubre contenido
- NAV-04: Botón "volver arriba" flotante (aparece al bajar 300px)
- NAV-05: Link activo resaltado en amarillo en menú mobile
- LAY-01: `img { max-width:100% }` global
- LAY-02: Layout colapsa a 1 columna en <768px, padding lateral 16px
- LAY-03: Todos los botones CTA con altura mínima 44px

### Rollback
```bash
git reset --hard 923d9c0   # vuelve a v1.3 (arquitectura separada)
```

---

## v1.3 — Arquitectura separada + seguridad · 2026-04-16

| Campo | Detalle |
|---|---|
| **Hash** | `7accaca` |
| **Estado** | ✅ En producción |

### Cambios
- Separación de `index.html` en 3 archivos: `css/styles.css`, `js/data.js`, `js/app.js`
- `index.html` queda solo con estructura HTML (27 líneas)
- Creación de `env.local/` para tokens y datos sensibles
- Creación de `.gitignore` — `env.local/` excluido de git

### Rollback
```bash
git reset --hard a24bc9e   # vuelve a v1.2 (todo en un solo index.html)
```

---

## v1.2 — Regionales + Panoramas + Fixes UI · 2026-04-15

| Campo | Detalle |
|---|---|
| **Hash** | `a24bc9e` |
| **Estado** | ✅ Publicado |

### Cambios
- Cards de feriados regionales con mismo estilo que nacionales (`f-card regional`)
- Sección "Panoramas" con 25 actividades curadas por temporada
- Filtros por categoría (solo muestra categorías con ≥1 actividad en temporada actual)
- Mínimo 3 actividades por categoría (rellena con off-season si necesario)
- Fix: botón X en banner sandwich
- Fix: toggle sandwich muestra/oculta filas en lista
- Fix: labels stat → "feriados restantes" / "feriados este año"
- Fix: próximo feriado en azul (no rojo)

### Rollback
```bash
git reset --hard 2fd76bb   # vuelve a v1.1
```

---

## v1.1 — Etapa 1 Diseño + Favicon · 2026-04-15

| Campo | Detalle |
|---|---|
| **Hash** | `2fd76bb` |
| **Estado** | ✅ Publicado |

### Cambios
- Eliminada página "Fuente" y referencias a feriados.cl
- FAQ reescrito con 8 preguntas de contenido real
- Lista de feriados con scroll (max-height + overflow-y)
- Stats formato X/Y (restantes/total)
- Toggle sandwich funcional en header de lista
- Sin iconos en tarjetas
- Favicon SVG (calendario con colores de la bandera)

### Rollback
```bash
git reset --hard 41e6ef2   # vuelve antes de etapa 1
```

---

## v1.0 — Sitio inicial · (fecha original)

| Campo | Detalle |
|---|---|
| **Hash** | `8d83df8` |
| **Estado** | ✅ Base del proyecto |

### Cambios
- Sitio inicial con datos 2025–2027
- Dominio misferiados.cl configurado (NIC.cl + Cloudflare)
- Google Analytics 4 integrado (`G-9VSSTEV2N7`)
- Google Search Console verificado
- Sitemap.xml creado

### Rollback
```bash
git reset --hard 8d83df8
```

---

## Formato para versiones futuras

Copiar este bloque al inicio del archivo para cada nueva versión:

```markdown
## vX.X — Título del cambio · YYYY-MM-DD

| Campo | Detalle |
|---|---|
| **Hash** | `hash` |
| **Estado** | ✅ En producción |

### Cambios
- ...

### Rollback
\```bash
git reset --hard <hash-version-anterior>
\```
```
