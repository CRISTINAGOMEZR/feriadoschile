# Feriados Chile — Contexto del Proyecto

## Descripción
Sitio web estático de una sola página (index.html) que muestra los feriados nacionales y regionales de Chile para 2025, 2026 y 2027. Incluye días sandwich, feriados irrenunciables y respaldo legal de cada fecha.

**URL:** https://misferiados.cl

---

## Stack Técnico
- **Frontend:** HTML + CSS + JS vanilla (sin frameworks, sin build tools)
- **Estructura:** Un solo archivo `index.html` (~735 líneas)
- **Fuentes:** Google Fonts — Nunito (body) + Fraunces (títulos)
- **Hosting:** Cloudflare Pages (o Workers)
- **Dominio:** `misferiados.cl` — registrado en NIC.cl
- **DNS / CDN:** Cloudflare
- **Analytics:** Google Analytics 4 (tag: `G-9VSSTEV2N7`)
- **Indexación:** Google Search Console (verificación via meta tag: `qrj3rofXLTCaoiQmz4KdeTTxePiM9bEhBg1F93wLU38`)
- **Sitemap:** `sitemap.xml` en la raíz

---

## Arquitectura del Código

### Datos
Los feriados están hardcodeados en el objeto `DATA` dentro del JS:
- `DATA[2025].feriados` — array de objetos `{fecha, nombre, tipo, irr, ley}`
- `DATA[2025].regionales` — feriados regionales
- Mismo patrón para 2026 y 2027

### Vistas
- **Lista** — tarjetas `f-card` con fecha, nombre, tags
- **Por mes** — misma lista filtrada con tabs de meses
- **Calendario** — grilla mensual 7 columnas

### Páginas (SPA manual)
- `home` — feriados principales
- `faq` — preguntas frecuentes
- `leyes` — respaldo legal
- `fuente` — fuentes y sitios útiles

---

## Paleta de Colores
```css
--rojo:    #E83030   /* Feriados religiosos, acciones principales */
--rojo-s:  #FF5C5C   /* Hover, bandera */
--azul:    #1B3F72   /* Nav, texto principal */
--azul-m:  #2D6BB5   /* Feriados civiles, links */
--azul-s:  #4A8FE7   /* Bandera */
--amarillo:#FFD93D   /* Acento nav, active states */
--verde:   #2ECC71   /* Hoy, irrenunciables badge */
--naranja: #FF8C42   /* Stat card */
--bg:      #F5F7FF   /* Fondo general */
--card:    #fff      /* Tarjetas */
--text:    #1B3F72   /* Texto principal */
--muted:   #7B8DB0   /* Texto secundario */
--border:  #E2E8F6   /* Bordes */
```

---

## Infraestructura Conectada
| Servicio | Detalle |
|---|---|
| Dominio | misferiados.cl — registrado en NIC.cl |
| DNS / Proxy | Cloudflare |
| Hosting | Cloudflare (Pages o CDN directo) |
| Analytics | Google Analytics 4 — `G-9VSSTEV2N7` |
| Search Console | Google Search Console — verificado via meta tag |
| Sitemap | /sitemap.xml |

---

## Decisiones de Diseño
- Fuentes serif (`Fraunces`) para títulos y números → sensación premium
- Animaciones sutiles (fadeUp, bounceIn, riseUp) al cargar
- Confetti decorativo en el hero (28 puntos animados)
- Cards con `border-left` de color según tipo de feriado
- Feriados pasados con `opacity: 0.42` para contexto visual
- Responsive: en móvil se oculta la columna derecha de countdown

---

## Actualización Anual de Datos ⚠️
Los datos están hardcodeados en el JS. **A fin de año hay que:**
1. Agregar `DATA[{año+1}]` con los feriados del año nuevo
2. Actualizar los botones del año en nav y hero
3. Actualizar `setYear()` para incluir el nuevo año
4. Actualizar el sitemap.xml con las fechas nuevas
5. Revisar si hay cambios legislativos (la BCN es la fuente oficial)

**Fuente oficial:** https://www.bcn.cl/leychile/

---

## Notas SEO
- `<title>` optimizado para búsquedas de feriados Chile + año
- Meta description, keywords, og:tags configurados
- Canonical URL apunta a https://misferiados.cl/
- Sitemap.xml presente en la raíz
