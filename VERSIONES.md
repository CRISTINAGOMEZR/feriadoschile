# Versiones — misferiados.cl

> Registro de cambios por sesión. Cada versión incluye qué cambió, el commit hash para rollback, y el estado del sitio en ese momento.
>
> **Para hacer rollback a una versión:** `git revert <hash>` (seguro) o `git reset --hard <hash>` (destructivo)

---

## v1.4 — Sprint 1 Mobile/Responsive · 2026-04-16

| Campo | Detalle |
|---|---|
| **Hash** | `pendiente` |
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
