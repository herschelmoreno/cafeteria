# Onea Coffee — Guía de Estilo

> Reglas visuales, principios de diseño y decisiones de UX que definen la identidad de Onea Coffee. Este documento responde al **por qué** y al **cómo**; los valores concretos están en `design-tokens.md`.

---

## Filosofía de Diseño

**Onea Coffee** es editorial luxury meets artisan warmth — la intersección de una revista de gastronomía premium y una cafetería de especialidad de barrio. El diseño debe sentirse:

- **Cálido pero sofisticado**: No rústico, no frío. Cremas y chocolates, no grises.
- **Orgánico pero preciso**: Formas circulares, tipografía serif con tracking ajustado.
- **Lento pero vivo**: Animaciones suaves que invitan a detenerse, no a correr.

**La pregunta de diseño**: ¿Esto invita a tomarse un café o apresura al usuario? Si apresura, está mal.

---

## Color

### Jerarquía cromática

```
┌─ Fondo ─────────────────────────────────────────────────────┐
│  cream (#FDF6EC)          → 80% del canvas                 │
│  cream-dark (#F5ECD7)     → Secciones alternadas           │
└─────────────────────────────────────────────────────────────┘
┌─ Tipografía ────────────────────────────────────────────────┐
│  chocolate (#1C1208)      → Todo el texto primario         │
│  chocolate-light (#4A2C17)→ Links, texto secundario        │
│  chocolate-muted (#8B6A4A)→ Descripciones, placeholders    │
└─────────────────────────────────────────────────────────────┘
┌─ Acento ────────────────────────────────────────────────────┐
│  coral (#E07B54)          → CTA principal, botón "+"       │
│  amber (#D4A017)          → Logo footer, detalles dorados  │
│  orange-hero (#C96A30)    → Círculo de imagen hero         │
└─────────────────────────────────────────────────────────────┘
┌─ Categorías (solo vía data layer) ──────────────────────────┐
│  olive · brand-teal · red-warm · pink-soft                  │
└─────────────────────────────────────────────────────────────┘
```

### Reglas de color

**✅ Hacer:**
- Fondos siempre en la familia cream
- Texto primario siempre `chocolate`; nunca negro puro (`#000`)
- Usar `coral` solo para acciones primarias o detalles de énfasis (máximo 1 por sección)
- El footer usa `chocolate` como fondo — es el único fondo oscuro de la marca
- Opacidades (`/60`, `/30`) están permitidas para bordes sutiles y overlays

**❌ Evitar:**
- Blancos puros (`#ffffff`) — siempre usar `cream` como mínimo
- Grises neutros — no pertenecen a esta paleta cálida
- Azules, verdes estridentes o morados — rompen la coherencia térmica
- Más de dos colores de acento visibles en la misma sección
- Texto `chocolate-muted` para elementos interactivos (demasiado bajo contraste)

### Contraste y accesibilidad

| Par | Ratio | Estado WCAG |
|-----|-------|-------------|
| `chocolate` sobre `cream` | 14.5:1 | ✅ AAA |
| `chocolate-light` sobre `cream` | 8.2:1 | ✅ AA |
| `chocolate-muted` sobre `cream` | 4.1:1 | ✅ AA (texto grande) |
| `cream` sobre `chocolate` | 14.5:1 | ✅ AAA |
| `coral` sobre `cream` | 3.2:1 | ⚠️ Solo para texto grande (+18px) |

> El coral no debe usarse como color de texto en tamaños pequeños. Funciona bien como fondo de botón con texto `cream`.

---

## Tipografía

### La dupla Playfair + Inter

**Playfair Display** es la voz de la marca — autoritaria, elegante, con carácter. Reservada para títulos, precios importantes y el logo.

**Inter** es la voz funcional — limpia, legible, eficiente. Para todo lo que el usuario necesita leer y entender rápido.

### Cuándo usar cada fuente

| Elemento | Fuente | Peso | Justificación |
|----------|--------|------|---------------|
| H1 hero | Playfair | 800 | Máximo impacto editorial |
| H2 secciones | Playfair | 700 | Autoridad, jerarquía clara |
| H3 card titles | Playfair | 700 | Conexión visual con la marca |
| Precios | Playfair | 700 | Los números deben "pesar" |
| Logo "Onea." | Playfair | 700 | Identidad de marca |
| Body text | Inter | 400 | Legibilidad máxima |
| Nav links | Inter | 500 | Ligeramente enfatizado |
| Botones | Inter | 500–600 | Acción clara, no decorativa |
| Tags/badges | Inter | 600 | Uppercase, tracking wide |
| Captions | Inter | 400 | Subtono |

### Reglas tipográficas

**✅ Hacer:**
- `leading-tight` (line-height 1.25) para headings grandes
- `leading-relaxed` (line-height 1.625) para párrafos de cuerpo
- `tracking-tight` en headings grandes (Playfair lo necesita)
- `tracking-widest` en labels uppercase (Inter a tamaño pequeño)
- `line-clamp-2` en descripciones de cards — nunca más de 2 líneas

**❌ Evitar:**
- Playfair en `font-normal` (400) para textos de UI — demasiado delicado
- Inter en headings de primer nivel — pierde carácter de marca
- Más de 75 caracteres por línea en párrafos (legibilidad)
- `uppercase` en Playfair — pierde su elegancia serif

---

## Espaciado y Layout

### Principios de espaciado

1. **Generosidad vertical**: Las secciones respiran. `py-16 lg:py-24` como mínimo para secciones principales.
2. **Densidad controlada en cards**: Las cards son compactas pero no asfixiantes. El círculo sobresaliente añade aire.
3. **Container consistente**: `max-w-7xl mx-auto px-6 lg:px-10` en todo el contenido.

### Grid system

```
Mobile:  1 columna, gap-6 a gap-10
Tablet:  2 columnas (sm:grid-cols-2)
Desktop: 3-4 columnas (lg:grid-cols-3, xl:grid-cols-4)
Hero:    grid-cols-1 lg:grid-cols-[1fr_auto_auto]
```

### ProductCard — espaciado especial

La card tiene `pt-14` (56px de padding top) para que el círculo centrado (-top-10 = -40px) quede flotando. Esta es una decisión de diseño deliberada, no un bug. No reducir.

---

## Componentes Circulares

Los círculos son el elemento más distintivo de Onea Coffee. Aparecen en:
- CircleImage (productos y hero)
- Category icons (sidebar)
- Logo avatar en navbar/footer
- Botón "+" en ProductCard

### Reglas de los círculos

1. **Siempre con highlight radial**: `radial-gradient(circle at 33% 28%, rgba(255,255,255,0.28))`. Da profundidad tridimensional.
2. **Sombra obligatoria**: `shadow-xl` mínimo en círculos de contenido.
3. **El color viene del data layer**: Los colores de categoría son propiedades de los datos, no tokens Tailwind.
4. **El hover escala el círculo**: `group-hover:scale-110` en las cards — nunca rotar en hover.

---

## Motion y Animaciones

### Principios de movimiento

Onea Coffee usa animaciones que **invitan a detenerse**, no que aceleran el ritmo. El movimiento es:
- **Suave**: `ease-in-out`, `ease-out` — nunca `linear` excepto en loops infinitos
- **Lento**: Duraciones de 0.5s–5s — sin flashes rápidos
- **Escalonado**: Los elementos entran en secuencia con `delay-*` — nunca todos a la vez

### Cuándo animar

| ✅ Animar | ❌ No animar |
|-----------|-------------|
| Entrada de página (fade-up) | Loading spinners rápidos |
| Hero drink (float continuo) | Notificaciones urgentes |
| Rings del hero (spin-slow) | Mensajes de error |
| Marquee del footer | Navegación entre páginas |
| Hover de cards y botones | Texto cuerpo |

### Jerarquía de animaciones

```
1. Hero drink float      → Siempre activo, llama la atención
2. Category circles      → Solo en hover, feedback inmediato
3. Fade-up en scroll     → Entrada de secciones
4. Hover de cards        → translate-y(-8px) + shadow
5. Botones               → active:scale-95 (100ms)
```

### Reducir movimiento (accesibilidad)

Si en el futuro se implementa `prefers-reduced-motion`, las clases de animación deben respetarla:

```css
@media (prefers-reduced-motion: reduce) {
  .animate-float,
  .animate-spin-slow,
  .animate-spin-rev,
  .animate-marquee {
    animation: none;
  }
}
```

---

## Iconografía

Onea Coffee usa **SVG inline** para todos los iconos. No hay librería de iconos. Criterios:

- `strokeWidth="2"` o `strokeWidth="2.5"` — trazo medio, no ultradelgado ni bold
- `strokeLinecap="round"` — bordes redondeados, coherente con la estética orgánica
- Tamaño base: `w-5 h-5` para UI, `w-4 h-4` para botones, `w-8 h-8` para decorativos

Los **emojis** se usan como ilustraciones de producto (dentro de CircleImage), no como iconos de UI.

---

## Interacción y Estados

### Estados de botón

| Estado | Comportamiento |
|--------|---------------|
| Default | Color base del variant |
| Hover | Oscurece fondo (primary) / rellena (outline) |
| Active | `scale-95` — 100ms — feedback táctil |
| Focus | Ring de Tailwind por defecto (pendiente de customizar) |
| Disabled | No implementado aún — añadir `opacity-50 cursor-not-allowed` |

### Estados de card

| Estado | Comportamiento |
|--------|---------------|
| Default | `shadow-sm`, borde `cream-border/40` |
| Hover | `-translate-y-2`, `shadow-xl`, borde `cream-border` |
| Círculo en hover | `scale-110` (0.3s) |

### Feedback de navegación

- Los `link-underline` se animan en 0.28s — rápido pero no instantáneo
- El navbar es sticky — siempre visible, sin cambio de fondo al scroll (pendiente)

---

## Responsive Design

### Breakpoints (Tailwind defaults)

| Breakpoint | Ancho | Estrategia |
|------------|-------|-----------|
| Default | < 640px | Stack vertical, 1 columna |
| `sm:` | ≥ 640px | 2 columnas en grids |
| `md:` | ≥ 768px | Navbar desktop visible |
| `lg:` | ≥ 1024px | Layout hero 3 columnas, padding aumenta |
| `xl:` | ≥ 1280px | 4 columnas en menu grid |

### Hero en mobile

En mobile el orden visual cambia: heading → categorías (row) → drink circle → CTA. Las categorías se muestran en fila horizontal (`flex-row`) en lugar de columna vertical.

---

## Voz y Tono (Copy)

| Contexto | Tono | Ejemplo |
|----------|------|---------|
| Headings hero | Poético, evocador | "When Life Gives You Lemons, Trade Them For Coffee" |
| Descripciones de producto | Sensorial, concreto | "Denso y húmedo, corteza crujiente, centro fundente" |
| CTAs | Directo, cálido | "Get Promo", "Ver todo el menú" |
| Footer/About | Personal, artesanal | "Hecho con ❤️ y mucho café" |
| Error states | Honesto, suave | "No hay productos en esta categoría todavía 🫙" |
