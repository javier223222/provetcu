@AGENTS.md
# Proyecto: Provetcu — Landing Page

##  Sobre este archivo

Este `CLAUDE.md` contiene todo el contexto del proyecto Provetcu definido durante el descubrimiento UX/UI. Claude Code lee este archivo automáticamente al iniciar una sesión en este repo. Mantén actualizado conforme avances.

>  **REGLA CRÍTICA PARA EL AGENTE:** este documento describe el **estado real** del proyecto, no un ideal. Antes de proponer cambios estructurales (mover archivos, renombrar carpetas, instalar dependencias), revisar la sección "Estructura actual del proyecto" y confirmar con el usuario. **No alucinar carpetas o archivos que no existan.**

---

##  Contexto del cliente

**Provetcu** es una distribuidora de productos veterinarios establecida en Chiapas, México. Atiende un mercado mixto B2B + B2C con líneas pecuarias y de mascotas.

**Misión:** Impulsar el desarrollo del campo y el cuidado animal en Chiapas, abasteciendo con insumos veterinarios y productos de alta calidad a veterinarios, ganaderos, productores, granjas y dueños de mascotas.

**Visión:** Consolidarse como empresa referente de confianza en el sector pecuario, agroveterinario y de mascotas en Chiapas.

**Marcas que distribuye:** ACP (Animal Care Products), Arboretto, OptiCare Pet Essentials, Labiana, entre otras.

**Producto destacado actual:** OptiCare Pet Essentials — alimento super premium para perros y gatos del mismo fabricante (ACP) cuya distribución se está impulsando en la región.

---

##  Objetivos de la landing

1. Fortalecer presencia digital de Provetcu.
2. Comunicar trayectoria y generar confianza.
3. Servir a clientes B2B y B2C en una misma experiencia.
4. Integrar catálogo de productos con búsqueda y filtros.
5. Facilitar cotización vía WhatsApp.

---

##  End Users (5 personas)

1. **Don Ramiro** — Ganadero (B2B/B2C híbrido pequeño-mediano). Busca productos rápido, cotiza por WhatsApp, valora confianza local.
2. **Marisol** — Subdistribuidora (B2B revendedor). Evalúa portafolio completo, descarga catálogo PDF, contacta asesor comercial.
3. **Dr. Carlos** — Veterinario / Profesional. Busca info técnica detallada (principio activo, dosis, vía, registro sanitario).
4. **Andrea** — Dueña de mascota (B2C). Busca beneficios en lenguaje claro, fotos atractivas, dónde comprar.
5. **Lic. Roberto** — Comprador de empresa pecuaria (B2B corporativo). Evalúa portafolio, valida formalidad, cotiza por volumen.

**Reglas transversales:**
- Catálogo único para los 5 perfiles, con doble capa (fácil + técnica).
- WhatsApp como CTA universal.
- Confianza visible (trayectoria, ubicación, marcas, registros).
- PDF descargable transversal (no exclusivo de subdistribuidores).

---

##  Stack técnico

- **Framework:** Next.js 16.2.0 (App Router)
- **Runtime UI:** React 19.2.4
- **Lenguaje:** TypeScript 5
- **Estilos:** Tailwind CSS v4 (importado vía `@import "tailwindcss"` y `@config "../tailwind.config.ts"`)
- **Animaciones:** `framer-motion` v12 — usado en el hero para crossfade de fondo y entrada escalonada de contenido
- **Fonts:** `next/font/google` → Bricolage Grotesque (display) + Montserrat (body)
- **Iconos UI:** `lucide-react` v0.577 (botones, navegación, acciones, estados)
- **Iconos especies:** `@iconify/react` v6 (sets `mdi`, `game-icons`, etc. para vaca, cerdo, oveja, cabra, caballo, gallina, perro, gato)
- **Analytics:** `@vercel/analytics` v2 — integrado en `app/layout.tsx`
- **CMS / Datos de productos:** **Sanity** (pendiente de integrar — `lib/sanity/` no existe aún)
- **Imágenes:** `next/image` con fuentes libres de derechos (Pexels, Unsplash) + imágenes de laboratorios y logo locales en `/public`
- **Internacionalización:** español (es-MX) por defecto, sin i18n inicial

---

##  Estructura actual del proyecto

Esta es la estructura **real** del proyecto en este momento. El agente debe respetarla y no inventar carpetas que no existen. Si necesita crear una carpeta nueva, debe proponerlo explícitamente al usuario antes.

```
provetcu-site/
├── app/
│   ├── layout.tsx                          # Root layout (fonts, analytics)
│   ├── page.tsx                            # Home (compone secciones)
│   └── catalogo/
│       └── page.tsx                        # Catálogo — esqueleto (en construcción)
│
├── components/
│   ├── layout/
│   │   ├── hero/
│   │   │   ├── HeroSlider.tsx              # Orquestador del carrusel (lógica, animaciones)
│   │   │   ├── HeroSlide.tsx               # Contenido de un slide (badge, título, desc, CTAs)
│   │   │   ├── SlideBackground.tsx         # Imagen de fondo + overlay oscuro
│   │   │   ├── SlideNavigation.tsx         # Dots de navegación inferior
│   │   │   └── types.ts                    # SlideData, SlideStat, CtaVariant
│   │   ├── About.tsx
│   │   ├── Hero.tsx                        # Contenedor del hero (monta HeroSlider)
│   │   └── Navbar.tsx
│   └── ui/
│       ├── Laboratories.tsx                # Sección de marcas/laboratorios
│       ├── LaboratoriesItems.tsx           # Item individual de laboratorio
│       ├── NavItems.tsx                    # Items del menú de navegación
│       └── WhatsAppIcon.tsx               # SVG de WhatsApp como componente
│
├── hooks/
│   └── useCarousel.ts                      # Auto-avance + pausa + navegación manual
│
├── lib/
│   ├── constants.ts                        # HERO_SLIDES, LABORATORIES, NAV_ITEMS, variantes Framer
│   └── whatsapp.ts                         # buildWhatsAppLink(message) + WHATSAPP_NUMBER
│
├── public/                                 # Logo de Provetcu + imágenes de laboratorios + assets del hero
│
├── .gitignore
├── AGENTS.md
├── CLAUDE.md                               # Este archivo
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts                      # Configuración Tailwind con tokens custom
└── tsconfig.json
```

### Notas sobre la estructura actual

- `app/catalogo/page.tsx` existe pero es un esqueleto (`<div>Catalogo en construccion...</div>`). La integración con Sanity está pendiente.
- `hooks/useCarousel.ts` ya existe — no recrear. Expone `{ currentIndex, next, prev, goTo, pause, resume }`.
- `lib/whatsapp.ts` ya existe — exporta `buildWhatsAppLink(message: string)` y `WHATSAPP_NUMBER = '5219611551674'`.
- `components/layout/hero/types.ts` centraliza los tipos del hero (`SlideData`, `SlideStat`, `CtaVariant`). Re-exportado también desde `lib/constants.ts`.
- **No existen aún:** `types/`, `config/`, `components/shared/`, `components/home/`, `components/catalog/`, `lib/data/`, `lib/sanity/`. Proponer su creación al usuario antes de hacerla.
- La carpeta `components/layout/` contiene también componentes de la home (`Hero`, `About`). Intencional; no reorganizar sin acuerdo.
- `components/ui/` contiene piezas reutilizables, no solo átomos UI. Mantener esta convención.
- Existe `AGENTS.md` además de este `CLAUDE.md` — confirmar con el usuario su rol antes de tocarlo.

### Crecimiento futuro (cuando aplique)

- `app/catalogo/[producto]/page.tsx` — ficha de producto.
- `lib/sanity/` — `client.ts`, `queries.ts`, `types.ts`.
- `components/catalog/` — `ProductCard`, `ProductFilters`, `ProductSearch`, `ProductDetail`.
- `components/shared/` — `SpeciesIcon`, `WhatsAppCTA`, etc.
- `hooks/useProductFilters.ts` — lógica de filtros del catálogo.
- `types/` — tipos TypeScript del dominio (Product, Brand, Species…).
- `config/` — constantes de sectores, navegación, configuración general.

---

##  Configuración de Tailwind (actual)

> Esta es la configuración **real** que ya está aplicada en el proyecto. **No modificar sin acuerdo del usuario.** Todos los componentes deben usar estos tokens en lugar de hex inline.

### `tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BD2E2C',
          dark: '#9B2520',
          light: '#D44542',
        },
        secondary: {
          DEFAULT: '#2D5F4E',
          dark: '#1F4537',
        },
        success: '#3FA66A',
        info: '#1E6FB8',
        premium: '#F4C95D',
        warning: '#E89B3C',
        error: '#9B2520',
        ink: '#1A1A1A',
        gray: {
          900: '#1F1F1F',
          700: '#4A4A4A',
          500: '#888785',
          300: '#D4D3CD',
          200: '#E5E4DD',
          100: '#F5F5F4',
        },
      },
      fontFamily: {
        display: ['var(--font-bricolage_grotesque)', 'system-ui', 'sans-serif'],
        body: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['4.5rem', { lineHeight: '1.0', fontWeight: '900' }],
        h1: ['3rem', { lineHeight: '1.05', fontWeight: '700' }],
        h2: ['2.25rem', { lineHeight: '1.1', fontWeight: '600' }],
        h3: ['1.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.3', fontWeight: '500' }],
        micro: ['0.75rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.05em' }],
      },
    },
  },
  plugins: [],
}

export default config
```

>  Importante: la variable CSS de Bricolage es `--font-bricolage_grotesque` (con guion bajo, no guion medio). Asegurarse de que `next/font/google` la registre con ese nombre exacto.

### `app/globals.css` (actual)

El proyecto ya tiene estilos base definidos para tipografía y tokens de tema. **Estos estilos aplican globalmente** — el agente debe ser consciente de que `h1`, `h2`, `h3`, `h4`, `p`, `span`, `small` ya tienen tamaños/pesos por defecto.

```css
@import "tailwindcss";
@config "../tailwind.config.ts";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans);
}

@layer base {
  h1, h2, h3, .font-display {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
  }

  .text-hero {
    font-family: var(--font-display);
    font-size: clamp(64px, 5vw, 72px);
    font-weight: 900;
    line-height: 1.1;
  }

  h1 { font-size: 48px; font-weight: 700; line-height: 1.2; }
  h2 { font-size: clamp(32px, 3vw, 36px); font-weight: 600; line-height: 1.3; }
  h3 { font-size: 24px; font-weight: 600; line-height: 1.4; }
  h4 { font-family: var(--font-sans); font-size: 20px; font-weight: 500; line-height: 1.5; }
  p, span { font-size: 16px; font-weight: 400; line-height: 1.6; }
  small, .text-small { font-size: 14px; font-weight: 400; }
  .text-micro { font-size: 12px; font-weight: 500; }
}
```

### Implicaciones para el agente

- **No re-aplicar tamaños de tipografía** sobre `h1`–`h4`, `p`, `span`, `small` con clases Tailwind si los defaults globales ya son los correctos. Solo override cuando sea estrictamente necesario.
- **Usar `.text-hero`** para el título principal del hero, no recrear con clases sueltas.
- **Usar `.text-micro`** para eyebrows, badges y labels pequeños.
- **Usar `.text-small`** para captions.
- **No introducir hex inline** — siempre usar tokens (`bg-primary`, `text-secondary`, `bg-success/10`).
- **Tailwind v4** usa `@import "tailwindcss"` y `@config`. No usar la sintaxis antigua `@tailwind base/components/utilities`.

### Uso de clases con la paleta

```tsx
<button className="bg-primary text-white hover:bg-primary-dark">Cotizar</button>
<div className="bg-secondary text-white">Sección mascotas</div>
<span className="bg-success/10 text-success">Disponible</span>
<span className="bg-info/10 text-info">B2B</span>

<h1>Título principal</h1>
<h2>Subtítulo</h2>
<p className="text-gray-700">Body</p>
<span className="text-micro uppercase tracking-wider text-primary">Eyebrow</span>
<h1 className="text-hero">Salud animal de confianza</h1>
```

---

##  Sistema de diseño

### Paleta "Salud Animal Moderna"

| Token | Hex | Uso |
|---|---|---|
| `primary` | `#BD2E2C` | CTAs principales, énfasis |
| `primary-dark` | `#9B2520` | Hover, errores |
| `primary-light` | `#D44542` | Acentos suaves |
| `secondary` | `#2D5F4E` | Soporte, mascotas |
| `secondary-dark` | `#1F4537` | Hover de secondary |
| `success` | `#3FA66A` | Stock, éxito |
| `info` | `#1E6FB8` | Información, B2B |
| `premium` | `#F4C95D` | Destacados, badges premium |
| `warning` | `#E89B3C` | Avisos |
| `error` | `#9B2520` | Errores |
| `ink` | `#1A1A1A` | Texto principal |
| `gray.900–100` | varios | Neutros |

### Tipografía

**Pareja:** Bricolage Grotesque (headings) + Montserrat (body/UI). Variables CSS: `--font-bricolage_grotesque`, `--font-montserrat`.

**Escala oficial** (ya implementada en `app/globals.css`):

| Nivel | Tamaño | Peso | Fuente | Cómo se aplica |
|---|---|---|---|---|
| Display / Hero | 64–72px (clamp) | 900 | Bricolage | `.text-hero` |
| H1 / Title | 48px | 700 | Bricolage | `<h1>` (default) |
| H2 / Subtitle 1 | 32–36px (clamp) | 600 | Bricolage | `<h2>` (default) |
| H3 / Subtitle 2 | 24px | 600 | Bricolage | `<h3>` (default) |
| H4 | 20px | 500 | Montserrat | `<h4>` (default) |
| Body | 16px | 400 | Montserrat | `<p>`, `<span>` (default) |
| Small / Caption | 14px | 400 | Montserrat | `<small>`, `.text-small` |
| Micro | 12px | 500 | Montserrat | `.text-micro` |

---

##  Iconografía

### `lucide-react` — UI general

Para botones, navegación, acciones, estados, indicadores.

```tsx
import { ShoppingCart, Phone, Search, Download, Filter, ArrowRight } from 'lucide-react'

<Search size={20} strokeWidth={1.8} className="text-gray-500" />
<ArrowRight size={18} className="text-primary" />
```

**Convención:** `strokeWidth={1.8}` por defecto.

### `@iconify/react` — Iconos de especies

Para iconos de especies en fichas de producto, filtros del catálogo, sectores del hero.

```tsx
import { Icon } from '@iconify/react'

<Icon icon="mdi:cow" className="w-6 h-6 text-primary" />
<Icon icon="mdi:pig" className="w-6 h-6 text-primary" />
<Icon icon="mdi:sheep" className="w-6 h-6 text-primary" />
<Icon icon="game-icons:goat" className="w-6 h-6 text-primary" />
<Icon icon="mdi:horse" className="w-6 h-6 text-primary" />
<Icon icon="mdi:bird" className="w-6 h-6 text-primary" />
<Icon icon="mdi:dog" className="w-6 h-6 text-primary" />
<Icon icon="mdi:cat" className="w-6 h-6 text-primary" />
```

**Convención:** crear un componente `<SpeciesIcon species="bovinos" />` en `components/shared/` (cuando exista) que centralice el mapeo.

---

##  Patrones de animación — framer-motion

El hero usa `framer-motion` v12. Estos patrones ya están establecidos; usarlos de forma consistente en nuevas animaciones.

### Curva de animación estándar

```ts
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]
```

Definida en `HeroSlide.tsx`. Produce una entrada rápida con desaceleración suave (estilo iOS). Usar esta curva para animaciones de entrada de contenido en todo el proyecto.

### Patrón de entrada escalonada (`item`)

```ts
const item = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: EXPO_OUT },
})

<motion.div {...item(0.05)}>Badge</motion.div>
<motion.h1  {...item(0.17)}>Título</motion.h1>
<motion.p   {...item(0.29)}>Descripción</motion.p>
```

Delays escalonados de ~0.12s entre elementos. Produce la sensación de que el contenido "cae en cascada".

### Crossfade de fondo

El `SlideBackground` usa `AnimatePresence` con `opacity` en 1.2 s. El contenido del slide usa `AnimatePresence mode="wait"` con `exit: { opacity: 0, y: -15 }` en 0.3 s. El fondo tarda más que el contenido intencionalmente.

---

##  WhatsApp

`lib/whatsapp.ts` ya implementado. Número: `5219611551674` (México, Chiapas).

```ts
import { buildWhatsAppLink } from '@/lib/whatsapp'

const url = buildWhatsAppLink('Hola, me interesa cotizar el producto X de la marca Y.')
```

**Plantilla para fichas de producto:**
```
Hola, me interesa cotizar el producto "{NombreProducto}" de la marca {Marca}, presentación {Presentación}. ¿Podrían darme más información?
```

No crear nuevos helpers de WhatsApp — usar `buildWhatsAppLink` de `lib/whatsapp.ts`.

---

##  Datos del catálogo — Sanity

El catálogo de productos se gestiona en **Sanity**. El frontend consumirá los datos vía `@sanity/client` o `next-sanity` (pendiente de instalar).

### Esquema esperado de producto en Sanity (referencia)

```ts
// Campos para TODOS los productos
{
  _id: string
  name: string
  slug: { current: string }
  brand: reference
  species: reference[]
  type: reference
  presentation: string
  uses: string
  description: text
  image: image
  isMedicine: boolean
}

// Campos SOLO si isMedicine = true
{
  routeOfAdministration: string
  dose: text
  formula: text
  sanitaryRegistration: string   // ej. SAGARPA Q-7654-073
}
```

### Convenciones de integración (cuando se implemente)

- Cliente de Sanity en `lib/sanity/client.ts`.
- Queries GROQ centralizadas en `lib/sanity/queries.ts`.
- Tipos TypeScript en `lib/sanity/types.ts` o `types/`.
- **No hacer fetch en componentes UI.** Las páginas hacen el fetch en el server y pasan los datos como props.
- Usar `next-sanity` con ISR/revalidación por tag.

---

##  Arquitectura de Información

**2 rutas únicas:**

### Ruta 1 — Home (`/`)

1. **Header sticky** — Logo + nav anclas (Inicio · Sectores · Marcas · Empresa · Contacto · Catálogo) + CTA "Cotizar"
2. **Hero con carrusel de 4 slides** (ya implementado)
3. **Marcas / Laboratorios** (`components/ui/Laboratories.tsx`)
4. **Sectores que atendemos** (Bovinos, Porcinos, Ovinos/Caprinos, Equinos, Aves, Mascotas)
5. **Sobre Provetcu** (`components/layout/About.tsx`)
6. **Contacto** (WhatsApp, ubicación, horarios, formulario)
7. **Footer**

**Persistente:** Botón flotante WhatsApp en toda la página.

### Ruta 2 — Catálogo (`/catalogo`) — en construcción

- Buscador + filtros por especie, tipo y marca
- Grid de productos
- Ficha de producto en `/catalogo/[producto]`

**Ficha — todos los productos:** imagen, nombre, marca, iconos especies, presentación, usos, descripción, CTA WhatsApp.
**Solo medicamentos (adicional):** vía de administración, dosis, fórmula, registro sanitario.

---

##  Decisiones validadas

| Tema | Decisión |
|---|---|
| Filtro por marca en el catálogo | ✅ Sí (junto con especie y tipo) |
| Indicador de disponibilidad por producto | ❌ No incluir |
| Número de registro sanitario en ficha de medicamentos | ✅ Sí |
| WhatsApp con mensaje pre-llenado | ✅ Sí — `lib/whatsapp.ts` ya implementado |
| Sin secciones por persona | ✅ Una sola home, navegación por anclas |
| Sin sección dedicada a OptiCare | ✅ Vive integrado en el catálogo (categoría Mascotas) |
| Sin condiciones comerciales públicas | ✅ Se manejan offline con asesor |

---

##  Problemas conocidos y decisiones técnicas

Decisiones no obvias tomadas durante el desarrollo. Leer antes de tocar los componentes afectados.

### GPU compositing en texto del hero (móvil)

**Problema:** En móviles (iOS Safari / WebKit), el texto del hero se ve nítido y brillante durante la animación de entrada de `framer-motion`, pero al terminar la animación el navegador saca el elemento de la capa GPU y el renderizado del `text-shadow` cambia: la sombra se vuelve más densa y el texto parece oscuro.

**Solución aplicada en `HeroSlide.tsx`:**
- `antialiased` — fuerza `-webkit-font-smoothing: antialiased` igual que en GPU.
- `[backface-visibility:hidden]` — mantiene el elemento en la capa GPU de forma permanente.
- `text-shadow-lg sm:text-shadow-2xl` — shadow más suave en móvil para reducir el efecto de densidad.

**No eliminar estas clases** de la descripción (`motion.p`) aunque parezcan innecesarias; son el fix deliberado para este comportamiento.

### Overlay del hero (`SlideBackground.tsx`)

El overlay es `bg-ink/50`. Fue ajustado desde `/65` (muy oscuro) a `/50` (equilibrio imagen-contraste). No subir más sin acuerdo; si el texto pierde contraste en ciertos slides, resolverlo con `text-shadow` o `[backface-visibility:hidden]`, no oscureciendo el overlay globalmente.

---

##  Principios de ingeniería (NO NEGOCIABLES)

Estas reglas son **obligatorias** para todo el código que se escriba en este proyecto.

### 1. Separación de responsabilidades (SoC)

- **Presentación** (componentes UI puros): solo renderizan props.
- **Lógica** (hooks, helpers en `/lib`): cálculos, transformaciones, llamadas a API.
- **Datos** (`lib/sanity/`): obtención y estructura. Abstraído del componente.
- **Tipos** (`/types` o junto al módulo): interfaces TypeScript.
- **Configuración** (`/config`, `tailwind.config.ts`): constantes y tokens.

### 2. Componentes reutilizables y composición

- Un componente, una responsabilidad.
- Antes de duplicar JSX, extraer a un componente compartido.
- Más de ~6 props → considerar partir el componente.

### 3. Reglas estructurales por tipo de archivo

| Tipo | Ubicación esperada | Responsabilidad |
|---|---|---|
| Página (route) | `app/**/page.tsx` | Composición de secciones, fetching server. Sin lógica de UI compleja. |
| Sección | `components/<area>/<Seccion>.tsx` | Bloque grande de la página. |
| Componente UI base | `components/ui/<Componente>.tsx` | Pieza reutilizable atómica. |
| Componente de dominio | `components/<area>/` o `components/shared/` | Pieza que conoce el dominio. |
| Hook | `hooks/use<Cosa>.ts` | Lógica con estado/efectos reutilizable. |
| Helper | `lib/<funcion>.ts` | Funciones puras, sin estado. |
| Tipo | `types/<dominio>.ts` o junto al módulo | Definiciones TypeScript. |
| Constante | `lib/constants.ts` o `config/<dominio>.ts` | Datos estáticos. |

### 4. Tamaño y complejidad

- Máximo ~150 líneas por componente. Si crece más, dividir.
- Máximo ~200 líneas por archivo en general.
- Funciones con más de 3 niveles de anidamiento → refactorizar.
- `useEffect` o handler de más de 15 líneas → extraer a hook o helper.

### 5. Naming y organización

- Componentes: **PascalCase** (`HeroSlider.tsx`).
- Hooks: **camelCase con `use`** (`useCarousel.ts`).
- Helpers: **camelCase** (`buildWhatsAppLink.ts`).
- Constantes exportadas: **SCREAMING_SNAKE_CASE** (`HERO_SLIDES`, `LABORATORIES`).
- Tipos/interfaces: **PascalCase** sin prefijo `I` (`SlideData`, no `ISlideData`).

### 6. Props y tipado

- Siempre tipar props con interfaces explícitas.
- Evitar `any`; usar `unknown` o tipos específicos.
- `Readonly<>` para props inmutables, `as const` en datos estáticos.

### 7. Server / Client Components

- **Default: Server Component.** Solo `"use client"` cuando hay interactividad, hooks de React o browser APIs.
- Aislar la parte interactiva en su propio componente cliente.
- El fetch a Sanity va en server components; los datos se pasan como props serializables.

### 8. Estado y efectos

- Levantar estado solo lo necesario; preferir estado local.
- No poner lógica en `useEffect` que pueda calcularse en render.
- Custom hooks para lógica con estado reutilizable.

### 9. Antes de escribir código

1. Revisar la sección "Estructura actual del proyecto". No alucinar archivos.
2. Pensar la arquitectura primero: qué archivos tocar/crear y qué responsabilidad tendrá cada uno.
3. Proponer la estructura al usuario antes de implementar.
4. Identificar componentes reutilizables desde el inicio.
5. Implementar archivo por archivo respetando límites de tamaño.
6. Refactorizar si aparece duplicación o crecimiento excesivo.

### 10. Limpieza de código (obligatorio al terminar)

- Eliminar imports no usados en todos los archivos modificados.
- Eliminar variables, funciones y bloques de código no usados.
- No dejar `console.log`, `console.warn`, `console.error`, `console.info` ni `console.table`.
- No agregar comentarios que solo describen lo que el código hace. Solo comentar el **por qué** cuando no es obvio.

---

##  Convenciones de código

- Componentes en PascalCase, archivos `.tsx`
- Server Components por defecto; `"use client"` solo cuando es necesario
- Variables de marca en `tailwind.config.ts`, **nunca hex inline**
- Mobile-first responsive (`sm` 640, `md` 768, `lg` 1024, `xl` 1280)
- Accesibilidad: contraste AA mínimo, `alt` en imágenes, `aria-label` en botones de iconos
- Imágenes optimizadas con `next/image` (`sizes`, `priority` en hero)
- Respetar tipografía global de `app/globals.css`: no re-aplicar tamaños en `h1`–`h4`, `p`, `span`, `small` salvo override justificado

_Última actualización: 2026-04-27_
