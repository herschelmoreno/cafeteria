# Onea Coffee — Especificaciones de Componentes

> API de cada componente, sus props, variantes, ejemplos de uso y reglas de accesibilidad.
> Todos los componentes son Server Components a menos que se indique `"use client"`.

---

## Componentes UI Primitivos (`components/ui/`)

---

### `<CircleImage />`

El elemento visual más icónico del sistema. Círculo de color sólido con contenido emoji y highlight radial 3D.

**Ruta:** `components/ui/CircleImage.tsx`

**Props:**

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `color` | `string` | — | Color de fondo en hex (requerido) |
| `emoji` | `string` | — | Emoji centrado como contenido visual (requerido) |
| `alt` | `string` | `undefined` | Texto alternativo para accesibilidad |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Tamaño del círculo |
| `float` | `boolean` | `false` | Activa la animación `animate-float` |
| `className` | `string` | `undefined` | Clases adicionales de Tailwind |

**Tamaños:**

| Size | Diámetro | Emoji | Uso |
|------|---------|-------|-----|
| `xs` | 56px (w-14) | text-2xl | Logo en navbar/footer |
| `sm` | 80px (w-20) | text-3xl | Category sidebar, satélites en about |
| `md` | 128px (w-32) | text-5xl | ProductCard (sobre el borde) |
| `lg` | 192px (w-48) | text-7xl | FeaturedProducts en home |
| `xl` | 240px (w-60) | text-8xl | Hero drink, AboutHero central |

**Ejemplos:**

```tsx
// Mínimo requerido
<CircleImage color="#E07B54" emoji="🍫" alt="Bebida de chocolate" />

// Hero con flotación
<CircleImage color="#C96A30" emoji="☕" alt="Café" size="xl" float />

// Card — size md (default)
<CircleImage color={product.circleColor} emoji={product.emoji} alt={product.name} />
```

**Reglas de uso:**
- El `color` viene siempre de `lib/data/categories.ts` o `lib/data/products.ts`
- `float` solo en el elemento hero principal — máximo 1 por página
- El highlight radial es automático — no sobreescribir con `background`

---

### `<CTAButton />`

Botón pill con variantes de estilo y opción de icono play. Renderiza `<Link>` o `<button>` según `href`.

**Ruta:** `components/ui/CTAButton.tsx`

**Props:**

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `label` | `string` | — | Texto del botón (requerido) |
| `href` | `string` | `undefined` | Si se pasa, renderiza `<Link>` de Next.js |
| `onClick` | `() => void` | `undefined` | Handler para `<button>` |
| `variant` | `"primary" \| "outline" \| "ghost"` | `"primary"` | Estilo visual |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Tamaño del botón |
| `className` | `string` | `undefined` | Clases adicionales |
| `showPlay` | `boolean` | `false` | Muestra icono play coral a la derecha |

**Variantes:**

| Variant | Fondo | Texto | Borde | Hover |
|---------|-------|-------|-------|-------|
| `primary` | `chocolate` | `cream` | `chocolate` | Fondo `chocolate-mid` |
| `outline` | Transparente | `chocolate` | `chocolate` | Fondo `chocolate`, texto `cream` |
| `ghost` | Transparente | `chocolate` | Transparente | Fondo `cream-deeper` |

**Ejemplos:**

```tsx
// CTA hero con play icon
<CTAButton label="Get Promo" href="/menu" showPlay />

// Outline en hero de about
<CTAButton label="Ver menú" href="/menu" variant="outline" size="md" />

// Ghost para acciones secundarias
<CTAButton label="Cancelar" onClick={handleClose} variant="ghost" size="sm" />
```

**Reglas de uso:**
- Máximo 1 botón `primary` por sección visual
- `showPlay` solo en el CTA principal del hero
- No pasar `href` y `onClick` al mismo tiempo — usar uno u otro
- El `active:scale-95` está incorporado — no añadir transform extra con `className`

---

### `<SectionHeading />`

Composición de heading + subtítulo con alineación flexible.

**Ruta:** `components/ui/SectionHeading.tsx`

**Props:**

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | `string` | — | Texto del heading (requerido) |
| `subtitle` | `string` | `undefined` | Párrafo descriptivo bajo el título |
| `align` | `"left" \| "center" \| "right"` | `"left"` | Alineación del bloque |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Escala del heading |
| `tag` | `"h1" \| "h2" \| "h3"` | `"h2"` | Elemento HTML semántico |
| `className` | `string` | `undefined` | Clases adicionales |

**Tamaños del título:**

| Size | Mobile | Desktop |
|------|--------|---------|
| `sm` | text-2xl | text-3xl |
| `md` | text-3xl | text-4xl |
| `lg` | text-4xl | text-5xl |

**Ejemplos:**

```tsx
// Header de sección con subtítulo, izquierda
<SectionHeading
  title="Nuestros Favoritos"
  subtitle="Selección de la casa — los sabores que todos piden."
/>

// Centrado en página de menú
<SectionHeading
  title="Nuestro Menú"
  subtitle="Ingredientes de origen único, preparación artesanal."
  align="center"
  size="lg"
/>
```

---

## Componentes de Layout (`components/layout/`)

---

### `<Navbar />`

Navegación principal sticky. Server Component con links estáticos.

**Ruta:** `components/layout/Navbar.tsx`

**Estructura visual:**
```
[☕ Onea.]  ←  [Inicio · Menú · Nosotros · Blog]  →  [🔍 Search...]  [☰]
```

**Comportamiento:**
- `sticky top-0 z-50` — siempre visible en scroll
- `backdrop-blur-sm` — leve desenfoque del contenido bajo la barra
- Search input: `w-32` → `focus:w-44` (transición CSS)
- Mobile: links y search ocultos, hamburger visible (`md:hidden`)
- Logo dot: coral en light mode (`.`)

**Accesibilidad:**
- `aria-label="Onea Coffee — ir al inicio"` en el logo link
- `aria-label="Abrir menú"` en el toggle mobile
- `aria-label="Buscar productos"` en el input search

**Extensión futura:** El estado del mobile menu (open/close) requeriría convertir a `"use client"` o extraer un `MobileMenu.tsx` client.

---

### `<Footer />`

Footer de 3 columnas sobre fondo `chocolate`.

**Ruta:** `components/layout/Footer.tsx`

**Estructura:**
```
┌──────────┬────────────┬──────────────┐
│ Brand    │ Explorar   │ Contacto     │
│ Logo     │ Inicio     │ Dirección    │
│ Bio      │ Menú       │ Email        │
│ Socials  │ Nosotros   │ Teléfono     │
│          │ Blog       │              │
└──────────┴────────────┴──────────────┘
© 2025 Onea Coffee                    Hecho con ❤️
```

**Iconos sociales:** Instagram, Twitter/X, Facebook — SVG inline con `aria-label` individual.

---

## Componentes Home (`components/home/`)

---

### `<HeroSection />`

Sección hero de la página principal. Estructura de 3 columnas en desktop.

**Ruta:** `components/home/HeroSection.tsx`

**Layout:**
```
[Copy + CTA]  |  [Hero drink circle + rings]  |  [CategorySidebar]
   ~45%                  ~30%                        ~25%
```

**Elementos clave:**
- Textura `.grain` sobre fondo `cream-dark`
- Glow radial detrás del círculo (naranja suave, pointer-events: none)
- Eyebrow badge con punto amber
- H1 con `<em>` en `text-coral` para el énfasis dramático
- Dos anillos: dashed externo (22s) + solid interno (18s, dirección inversa)
- Decorative SVG heart-loop debajo del círculo

**Mobile:** heading → categorías (row) → drink → CTA (stacking natural)

---

### `<CategorySidebar />`

Cuatro circles de categoría con label. Server Component.

**Ruta:** `components/home/CategorySidebar.tsx`

**Comportamiento:**
- Desktop: columna vertical (`md:flex-col`)
- Mobile/Home: fila horizontal (`flex-row`)
- Cada item es un `<Link>` a `/menu?category=<id>`
- Hover: `scale-110` + `shadow-lg` en el círculo
- Entrada escalonada: `animate-fade-up delay-[100–400]ms`

---

### `<FeaturedProducts />`

3 productos destacados (`featured: true` en products data).

**Ruta:** `components/home/FeaturedProducts.tsx`

**Layout:** `grid-cols-1 sm:grid-cols-3`

**Estructura de cada item:**
```
    [CircleImage lg]      ← hover: scale-105
    Nombre del producto   ← Playfair Display bold
    $00.00                ← coral, Playfair
```

No usa `ProductCard` — es un layout de visualización más simple, orientado a impacto visual en home.

---

## Componentes Menu (`components/menu/`)

---

### `<ProductCard />`

Card de producto con círculo flotante. Server Component.

**Ruta:** `components/menu/ProductCard.tsx`

**Props:**

| Prop | Tipo | Descripción |
|------|------|-------------|
| `product` | `Product` | Objeto de `lib/data/products.ts` |
| `className` | `string?` | Clases adicionales |

**Estructura visual:**
```
     [CircleImage md]         ← -top-10, hover: scale-110
  ┌─────────────────────┐
  │ [tag] [tag]         │
  │                     │
  │ Nombre del producto │
  │ Descripción breve   │
  │                     │
  │ $00.00         [+]  │
  └─────────────────────┘
```

**Detalles:**
- `pt-14` en la card para que el círculo (-top-10) sobresalga correctamente
- Tags: máximo 2, estilo pill `text-[10px]` uppercase tracking-wider
- Descripción: `line-clamp-2` — máximo 2 líneas
- Botón `+`: `rounded-full bg-chocolate` → `hover:bg-coral` → `hover:scale-110`
- Card hover: `-translate-y-2` + `shadow-xl` + borde más visible

**Tipo Product:**

```typescript
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "coffee" | "drinks" | "tea" | "bakery";
  emoji: string;
  circleColor: string;   // hex directo
  featured: boolean;
  tags: string[];
};
```

---

### `<MenuSection />` ⚡ Client Component

Wrapper con estado para filtros. El único componente `"use client"` en el sistema.

**Ruta:** `components/menu/MenuSection.tsx`

**Props:**

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `initialCategory` | `string` | `"all"` | Categoría activa al montar |

**Estado:** `activeCategory: string` (string ID de la categoría o `"all"`)

**Por qué client:** gestiona `useState` para el filtro activo. Los datos son estáticos (no hay fetch). El page.tsx padre sigue siendo Server Component.

---

### `<MenuFilters />` ⚡ Client Component

Barra de tabs de filtro por categoría.

**Ruta:** `components/menu/MenuFilters.tsx`

**Props:**

| Prop | Tipo | Descripción |
|------|------|-------------|
| `activeCategory` | `string` | Categoría actualmente activa |
| `onSelect` | `(id: string) => void` | Callback al seleccionar |

**Opciones:** `all` + las 4 categorías de `lib/data/categories.ts`

**Estilo activo:** fondo del color de la categoría + `text-cream` + `scale-105`

**Accesibilidad:** `aria-pressed` en cada botón, `role="nav"` en el contenedor.

---

### `<MenuGrid />`

Grid responsivo de ProductCard, filtrado por categoría.

**Ruta:** `components/menu/MenuGrid.tsx`

**Props:**

| Prop | Tipo | Descripción |
|------|------|-------------|
| `category` | `string` | `"all"` o ID de categoría |

**Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`

**Vacío:** muestra emoji 🫙 con mensaje amable cuando no hay productos.

---

## Componentes About (`components/about/`)

---

### `<AboutHero />`

Hero de la página About con layout 2 columnas: copy + cluster de círculos.

**Ruta:** `components/about/AboutHero.tsx`

**Cluster visual (columna derecha):**
```
         [☕ xl, float]   ← circulo central orange-hero
    [🌱 sm]              [🥐 sm]   ← satélites
  [💛 xs]                          ← satélite pequeño
```

---

### `<ValuesGrid />`

Stats row + grid de 3 tarjetas de valores + cita de marca.

**Ruta:** `components/about/ValuesGrid.tsx`

**Stats:** 5+ años · 12 orígenes · 50K+ tazas/mes · 100% comercio justo

**Cards de valores:**
1. 🌿 Origen & Calidad
2. 🤝 Comunidad
3. ✨ Artesanía

Cada card: `rounded-card`, icono circulo color de categoría, h3 Playfair, párrafo Inter.

---

## Data Layer (`lib/data/`)

---

### `products.ts`

Exporta `products: Product[]` (12 items) y `featuredProducts: Product[]` (3 items con `featured: true`).

Categorías: `"coffee"` · `"drinks"` · `"tea"` · `"bakery"`

### `categories.ts`

Exporta `categories: Category[]` (4 items).

```typescript
type Category = {
  id: string;
  label: string;
  color: string;        // hex — aplicar vía style={}
  lightColor: string;   // hex — para hover states futuros
  emoji: string;
};
```

---

## Notas de Accesibilidad Global

- Todos los `<img>` equivalentes (CircleImage) tienen `role="img"` + `aria-label`
- Emojis decorativos tienen `aria-hidden="true"`
- Botones sin texto visible tienen `aria-label` descriptivo
- Links de navegación describen su destino claramente
- Inputs tienen `aria-label` o `<label>` asociado
- Orden de foco sigue el flujo visual de la página
