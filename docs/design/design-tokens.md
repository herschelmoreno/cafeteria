# Onea Coffee — Design Tokens

> Fuente de verdad para todos los valores de diseño del sistema. Todos los tokens están definidos en `app/globals.css` usando la directiva `@theme inline` de Tailwind CSS v4.

---

## Cómo usar los tokens

```css
/* globals.css — donde viven todos los tokens */
@theme inline {
  --color-cream: #FDF6EC;
  /* ... */
}
```

En componentes Tailwind, los tokens se usan directamente como clases:

```tsx
// ✅ Correcto — usa token
<div className="bg-cream text-chocolate font-display">

// ❌ Evitar — valor hardcoded
<div style={{ backgroundColor: '#FDF6EC' }}>
```

Los únicos valores hardcoded permitidos son los colores de categoría en `lib/data/categories.ts`, usados via `style={{ backgroundColor: color }}` porque son dinámicos.

---

## Colores

### Paleta Crema (Fondos)

| Token | Clase Tailwind | Hex | Uso |
|-------|---------------|-----|-----|
| `--color-cream` | `bg-cream` / `text-cream` | `#FDF6EC` | Fondo principal de toda la app |
| `--color-cream-dark` | `bg-cream-dark` | `#F5ECD7` | Fondo hero, secciones alternativas |
| `--color-cream-deeper` | `bg-cream-deeper` | `#EDE0C8` | Fondos de tags, inputs, hover states |
| `--color-cream-border` | `border-cream-border` | `#D9C9A8` | Bordes de cards y separadores |

### Paleta Chocolate (Tipografía y Fondos Oscuros)

| Token | Clase Tailwind | Hex | Uso |
|-------|---------------|-----|-----|
| `--color-chocolate` | `bg-chocolate` / `text-chocolate` | `#1C1208` | Texto primario, botones primary, footer bg |
| `--color-chocolate-mid` | `bg-chocolate-mid` | `#2C1A0E` | Hover de botón primary |
| `--color-chocolate-light` | `text-chocolate-light` | `#4A2C17` | Texto secundario, nav links |
| `--color-chocolate-muted` | `text-chocolate-muted` | `#8B6A4A` | Texto descriptivo, placeholders |

### Paleta Acento (Acciones e Identidad)

| Token | Clase Tailwind | Hex | Uso |
|-------|---------------|-----|-----|
| `--color-amber` | `bg-amber` / `text-amber` | `#D4A017` | Dot del logo en footer, badges |
| `--color-amber-light` | `bg-amber-light` | `#E8BA3A` | Hover states amber |
| `--color-coral` | `bg-coral` / `text-coral` | `#E07B54` | CTA hero, hover del botón +, sección promo |
| `--color-coral-light` | `bg-coral-light` | `#F09070` | Hover coral |
| `--color-orange-hero` | `bg-orange-hero` | `#C96A30` | Círculo de imagen hero principal |

### Colores de Categoría

> Estos colores se aplican exclusivamente vía `style={{ backgroundColor: color }}` desde `lib/data/categories.ts`. **No usar como clases Tailwind.**

| Token CSS | Hex | Categoría |
|-----------|-----|-----------|
| `--color-olive` | `#7A8B52` | Coffee |
| `--color-olive-light` | `#9AAD6A` | Coffee hover |
| `--color-brand-teal` | `#3A8B7A` | Drinks |
| `--color-brand-teal-light` | `#4BA898` | Drinks hover |
| `--color-red-warm` | `#B84A3A` | Tea |
| `--color-red-warm-light` | `#D06050` | Tea hover |
| `--color-pink-soft` | `#C47A8A` | Bakery |
| `--color-pink-soft-light` | `#D8919F` | Bakery hover |

---

## Tipografía

### Fuentes

| Token | Clase Tailwind | Fuente | Pesos | Uso |
|-------|---------------|--------|-------|-----|
| `--font-display` | `font-display` | Playfair Display | 400, 600, 700, 800 | Títulos h1–h3, precios, logo |
| `--font-body` | `font-body` | Inter | 400, 500, 600 | Todo el texto corporal, labels, botones |

### Variables CSS de fuente (Next.js)
Las fuentes se cargan vía `next/font/google` en `app/layout.tsx` y se inyectan como:
- `--font-playfair` → referenciado por `--font-display`
- `--font-inter` → referenciado por `--font-body`

### Escala tipográfica (Tailwind defaults)

| Clase | Tamaño | Uso típico |
|-------|--------|-----------|
| `text-xs` | 0.75rem / 12px | Tags, labels, copyright |
| `text-sm` | 0.875rem / 14px | Nav links, body secundario, precios small |
| `text-base` | 1rem / 16px | Body text principal |
| `text-lg` | 1.125rem / 18px | Body destacado, card names |
| `text-xl` | 1.25rem / 20px | Precios en card, subtítulos pequeños |
| `text-2xl` | 1.5rem / 24px | `SectionHeading` size sm |
| `text-3xl` | 1.875rem / 30px | `SectionHeading` size md (mobile) |
| `text-4xl` | 2.25rem / 36px | `SectionHeading` size lg (mobile) |
| `text-5xl` | 3rem / 48px | `HeroSection` headline (tablet) |
| `text-6xl` | 3.75rem / 60px | `HeroSection` headline (desktop) |

### Reglas de peso

| Peso | Clase | Uso |
|------|-------|-----|
| 400 | `font-normal` | Cuerpo regular |
| 500 | `font-medium` | Botones, nav links |
| 600 | `font-semibold` | Tags, labels |
| 700 | `font-bold` | Headings h2/h3, card names |
| 800 | `font-extrabold` | Hero headline h1 |

---

## Espaciado

> Onea Coffee usa la escala de espaciado estándar de Tailwind. Los patrones de padding más comunes:

| Contexto | Clases | Valor |
|----------|--------|-------|
| Sección completa (X) | `px-6 lg:px-10` | 24px → 40px |
| Sección completa (Y) | `py-16 lg:py-24` | 64px → 96px |
| Card interior | `pt-14 pb-7 px-5` | Top 56px, Bottom 28px, X 20px |
| Botón sm | `px-5 py-2.5` | X 20px, Y 10px |
| Botón md | `px-7 py-3.5` | X 28px, Y 14px |
| Botón lg | `px-9 py-4` | X 36px, Y 16px |
| Container max | `max-w-7xl mx-auto` | 1280px centrado |

---

## Border Radius

| Token | Clase Tailwind | Valor | Uso |
|-------|---------------|-------|-----|
| `--radius-circle` | `rounded-circle` | 9999px | CircleImage, badges circulares |
| `--radius-card` | `rounded-card` | 1.5rem / 24px | ProductCard, ValuesGrid cards |
| `--radius-btn` | `rounded-btn` | 9999px | Todos los botones y pills |
| — | `rounded-lg` | 0.5rem | Search inputs, UI secundaria |
| — | `rounded-full` | 9999px | Botón + en cards, avatar del logo |

---

## Sombras

| Clase Tailwind | Uso |
|---------------|-----|
| `shadow-sm` | Cards en reposo |
| `shadow-md` | Category circles, active states |
| `shadow-lg` | Cards hover, filter buttons activos |
| `shadow-xl` | CircleImage (componente), promo hover |
| `shadow-2xl` | Hero drink circle |

---

## Animaciones y Motion

### Keyframes disponibles

| Clase CSS | Duración | Easing | Descripción |
|-----------|----------|--------|-------------|
| `.animate-float` | 5s | ease-in-out | Flotación vertical continua (hero drink) |
| `.animate-fade-up` | 0.65s | ease-out | Entrada desde abajo con fade |
| `.animate-fade-in` | 0.5s | ease-out | Fade simple de opacidad |
| `.animate-spin-slow` | 22s | linear | Rotación lenta (anillo externo hero) |
| `.animate-spin-rev` | 18s | linear | Rotación inversa (anillo interno hero) |
| `.animate-marquee` | 25s | linear | Scroll horizontal infinito |
| `.animate-pulse-ring` | 2.5s | ease-out | Expansión pulsante con fade |

### Delays de escalonado

```css
.delay-100  /* 0.10s */
.delay-200  /* 0.20s */
.delay-300  /* 0.30s */
.delay-400  /* 0.40s */
.delay-500  /* 0.50s */
.delay-600  /* 0.60s */
.delay-700  /* 0.70s */
.delay-800  /* 0.80s */
```

### Transiciones de Tailwind usadas

| Clase | Duración | Uso |
|-------|----------|-----|
| `transition-all duration-200` | 200ms | Botones, hover rápido |
| `transition-all duration-300` | 300ms | Cards, scale effects |
| `transition-colors duration-150` | 150ms | Nav links, colores |
| `transition-colors duration-200` | 200ms | Iconos sociales, links footer |
| `transition-transform duration-300` | 300ms | CircleImage hover en cards |

---

## Clases Utilitarias Personalizadas

| Clase | Descripción |
|-------|-------------|
| `.grain` | Superpone textura de ruido SVG (opacity 4%) sobre un elemento `position: relative` |
| `.glass-card` | Fondo semi-transparente crema con `backdrop-filter: blur(12px)` |
| `.link-underline` | Animación de subrayado deslizante desde la izquierda al hover |
| `.animate-*` | Ver tabla de animaciones arriba |
| `.delay-*` | Delays de escalonado para animaciones |
