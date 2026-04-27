@AGENTS.md
# Proyecto: Provetcu — Landing Page

##  Sobre este archivo

Este `CLAUDE.md` contiene todo el contexto del proyecto Provetcu definido durante el descubrimiento UX/UI. Claude Code lee este archivo automáticamente al iniciar una sesión en este repo. Mantén actualizado conforme avances.

>  **REGLA CRÍTICA PARA EL AGENTE:** este documento describe el **estado real** del proyecto, no un ideal. Antes de proponer cambios estructurales (mover archivos, renombrar carpetas, instalar dependencias), revisar la sección "   Estructura actual del proyecto" y confirmar con el usuario. **No alucinar carpetas o archivos que no existan.**

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
2. **Marisol** — Subdistribuidora (B2B revendedor). Evalúa portafolio completo, descarga catálogo PDF, contacta aseso|r comercial.
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

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4 (importado vía `@import "tailwindcss"` y `@config "../tailwind.config.ts"`)
- **Fonts:** `next/font/google` → Bricolage Grotesque (display) + Montserrat (body)
- **Iconos UI:** `lucide-react` (botones, navegación, acciones, estados)
- **Iconos especies:** `@iconify/react` (sets `mdi`, `game-icons`, etc. para vaca, cerdo, oveja, cabra, caballo, gallina, perro, gato)
- **CMS / Datos de productos:** **Sanity** (los productos del catálogo se obtienen desde Sanity)
- **Imágenes:** `next/image` con fuentes libres de derechos (Pexels, Unsplash) + imágenes de laboratorios y logo locales en `/public`
- **Internacionalización:** español (es-MX) por defecto, sin i18n inicial

---

##  Estructura actual del proyecto

Esta es la estructura **real** del proyecto en este momento. El agente debe respetarla y no inventar carpetas que no existen. Si necesita crear una carpeta nueva (por ejemplo `hooks/`, `types/`, `lib/sanity/`), debe proponerlo explícitamente al usuario antes.

```
provetcu-site/
├── app/
│   └── page.tsx                        # Home (compone secciones)
│
├── components/
│   ├── layout/
│   │   ├── hero/
│   │   │   └── HeroSlider.tsx          # Slider/carrusel del hero
│   │   ├── About.tsx
│   │   ├── Hero.tsx                    # Contenedor del hero (compone HeroSlider + contenido)
│   │   └── Navbar.tsx
│   └── ui/
│       ├── Laboratories.tsx            # Sección de marcas/laboratorios
│       ├── LaboratoriesItems.tsx       # Item individual de laboratorio
│       └── NavItems.tsx                # Items del menú de navegación
│
├── lib/
│   └── constants.ts                    # Constantes globales del proyecto
│
├── public/                             # Logo de Provetcu + imágenes de laboratorios ya descargadas
│
├── .gitignore
├── AGENTS.md
├── CLAUDE.md                           # Este archivo
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts                  # Configuración Tailwind con tokens custom
└── tsconfig.json
```

### Notas sobre la estructura actual

- **No existe** todavía `app/catalogo/`, `hooks/`, `types/`, `config/`, `components/shared/`, `components/home/`, `components/catalog/`, `lib/data/`, `lib/sanity/`. Cuando se necesiten, **proponer su creación al usuario antes de hacerla**.
- La carpeta `components/layout/` actualmente contiene también componentes de la home (`Hero`, `About`). Esto es intencional según la organización actual del usuario; no reorganizar sin acuerdo.
- `components/ui/` contiene piezas reutilizables (`Laboratories`, `LaboratoriesItems`, `NavItems`), no solo átomos UI. Mantener esta convención hasta que el usuario decida otra cosa.
- Existe un archivo `AGENTS.md` además de este `CLAUDE.md` — confirmar con el usuario su rol antes de tocarlo.

### Crecimiento futuro (cuando aplique)

Cuando el proyecto requiera nuevas secciones, sugerir al usuario crearlas siguiendo este patrón:

- `app/catalogo/page.tsx` y `app/catalogo/[producto]/page.tsx` — para el catálogo y la ficha de producto.
- `lib/sanity/` — cliente y queries de Sanity (`client.ts`, `queries.ts`, `types.ts`).
- `lib/whatsapp.ts` — helper para construir links de WhatsApp con mensaje pre-llenado.
- `components/catalog/` — `ProductCard`, `ProductFilters`, `ProductSearch`, `ProductDetail`.
- `components/shared/` — `SpeciesIcon`, `WhatsAppCTA`, etc.
- `hooks/` — `useCarousel`, `useProductFilters`, etc.
- `types/` — tipos TypeScript del dominio.
- `config/` — constantes (sectores, navegación, número WhatsApp).

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

### `globals.css` (actual)

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
  /* Bricolage en encabezados mayores con tracking ligeramente cerrado */
  h1, h2, h3, .font-display {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
  }

  /* Display / Hero: 64–72px, Black / 900 */
  .text-hero {
    font-family: var(--font-display);
    font-size: clamp(64px, 5vw, 72px);
    font-weight: 900;
    line-height: 1.1;
  }

  /* H1 / Title: 48px, Bold / 700 */
  h1 { font-size: 48px; font-weight: 700; line-height: 1.2; }

  /* H2 / Subtitle 1: 32–36px, SemiBold / 600 */
  h2 { font-size: clamp(32px, 3vw, 36px); font-weight: 600; line-height: 1.3; }

  /* H3 / Subtitle 2: 24px, SemiBold / 600 */
  h3 { font-size: 24px; font-weight: 600; line-height: 1.4; }

  /* H4: 20px, Medium / 500, Montserrat */
  h4 { font-family: var(--font-sans); font-size: 20px; font-weight: 500; line-height: 1.5; }

  /* Body: 16px, Regular / 400 */
  p, span { font-size: 16px; font-weight: 400; line-height: 1.6; }

  /* Small / Caption: 14px, Regular / 400 */
  small, .text-small { font-size: 14px; font-weight: 400; }

  /* Micro: 12px, Medium / 500 */
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
// Colores de marca
<button className="bg-primary text-white hover:bg-primary-dark">Cotizar</button>
<div className="bg-secondary text-white">Sección mascotas</div>
<span className="bg-success/10 text-success">Disponible</span>
<span className="bg-info/10 text-info">B2B</span>

// Tipografía (los headings ya tienen tamaño por defecto vía globals.css)
<h1>Título principal</h1>                    {/* 48px Bold */}
<h2>Subtítulo</h2>                            {/* 32–36px SemiBold */}
<p className="text-gray-700">Body</p>         {/* 16px Regular */}
<span className="text-micro uppercase tracking-wider text-primary">Eyebrow</span>

// Hero
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

**Escala oficial** (ya implementada en `globals.css`):

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

```bash
npm install lucide-react
```

```tsx
import { ShoppingCart, Phone, Search, Download, Filter, ArrowRight } from 'lucide-react'

<Search size={20} strokeWidth={1.8} className="text-gray-500" />
<ArrowRight size={18} className="text-primary" />
```

**Convención:** `strokeWidth={1.8}` por defecto.

### `@iconify/react` — Iconos de especies

Para iconos de especies en fichas de producto, filtros del catálogo, sectores del hero.

```bash
npm install @iconify/react
```

```tsx
import { Icon } from '@iconify/react'

<Icon icon="mdi:cow" className="w-6 h-6 text-primary" />        // Bovinos
<Icon icon="mdi:pig" className="w-6 h-6 text-primary" />        // Porcinos
<Icon icon="mdi:sheep" className="w-6 h-6 text-primary" />      // Ovinos
<Icon icon="game-icons:goat" className="w-6 h-6 text-primary" />// Caprinos
<Icon icon="mdi:horse" className="w-6 h-6 text-primary" />      // Equinos
<Icon icon="mdi:bird" className="w-6 h-6 text-primary" />       // Aves
<Icon icon="mdi:dog" className="w-6 h-6 text-primary" />        // Perros
<Icon icon="mdi:cat" className="w-6 h-6 text-primary" />        // Gatos
```

**Convención:** crear un componente `<SpeciesIcon species="bovinos" />` en `components/shared/` (cuando exista) que centralice el mapeo.

---

##  Datos del catálogo — Sanity

El catálogo de productos se gestiona en **Sanity**. El frontend consume los datos vía el cliente oficial de Sanity (`@sanity/client` o `next-sanity`).

### Esquema esperado de producto en Sanity (referencia)

```ts
// Campos para TODOS los productos
{
  _id: string
  name: string                      // Nombre del producto
  slug: { current: string }         // Para la URL /catalogo/[slug]
  brand: reference                  // Marca (ACP, Arboretto, OptiCare, Labiana, etc.)
  species: reference[]              // Especies que trata (multi)
  type: reference                   // Tipo/categoría (antibiótico, desparasitante, etc.)
  presentation: string              // Presentación (ej. "100 ml", "2 kg")
  uses: string                      // Usos específicos
  description: text                 // Descripción
  image: image                      // Imagen del producto
  isMedicine: boolean               // Define si se muestran los campos extra
}

// Campos SOLO si isMedicine = true
{
  routeOfAdministration: string     // Vía de administración
  dose: text                        // Dosis
  formula: text                     // Fórmula
  sanitaryRegistration: string      // Número de registro sanitario (ej. SAGARPA Q-7654-073)
}
```

### Convenciones de integración

- Crear cliente de Sanity en `lib/sanity/client.ts` (cuando se cree).
- Queries GROQ centralizadas en `lib/sanity/queries.ts`.
- Tipos TypeScript de los documentos de Sanity en `lib/sanity/types.ts` o `types/`.
- **No hacer fetch en componentes UI**. Las páginas (`app/catalogo/page.tsx`, etc.) hacen el fetch en el server y pasan los datos como props.
- Usar `next-sanity` con ISR/revalidación por tag para mantener el catálogo actualizado.

---

##  Arquitectura de Información

**2 rutas únicas:**

### Ruta 1 — Home (`/`)

Toda la información de la empresa en una sola página, con navegación por anclas:

1. **Header sticky** — Logo + nav anclas (Inicio · Sectores · Marcas · Empresa · Contacto · Catálogo) + CTA "Cotizar"
2. **Hero con carrusel de 4 slides:**
   - Slide 1 — Introducción de la empresa + contexto + CTA principal
   - Slide 2 — Ganadería 🐄 + CTA "Ver productos pecuarios"
   - Slide 3 — Avícolas 🐔 + CTA "Ver productos avícolas"
   - Slide 4 — Mascotas 🐶 + CTA "Conocer productos para mascotas"
3. **Marcas / Laboratorios que distribuimos** (ya implementado en `components/ui/Laboratories.tsx`)
4. **Sectores que atendemos** (los 6 sectores: Bovinos, Porcinos, Ovinos/Caprinos, Equinos, Aves, Mascotas)
5. **Sobre Provetcu** (Historia, Misión, Visión, Logros en la región — `components/layout/About.tsx`)
6. **Contacto** (WhatsApp, ubicación física en Chiapas, horarios, formulario)
7. **Footer**

**Persistente:** Botón flotante WhatsApp en toda la página.

### Ruta 2 — Catálogo (`/catalogo`)

- Buscador
- **Filtros: por especie, por tipo/categoría, por marca** (los tres filtros confirmados)
- Grid de productos (tarjeta: imagen, nombre, marca, especies)
- Ficha de producto en `/catalogo/[producto]`

**Ficha de producto — campos para TODOS los productos:**
- Imagen
- Nombre
- Marca
- Iconos de especies que trata
- Presentación
- Usos específicos
- Descripción
- Botón "Cotizar por WhatsApp" **con mensaje pre-llenado**

**Solo para MEDICAMENTOS (campos adicionales):**
- Vía de administración
- Dosis
- Fórmula
- **Número de registro sanitario** (ej. SAGARPA Q-7654-073)

---

##  WhatsApp con mensaje pre-llenado

Confirmado: el botón "Cotizar por WhatsApp" en cada ficha de producto debe abrir WhatsApp con un mensaje pre-llenado que incluya el contexto del producto.

**Plantilla sugerida:**

```
Hola, me interesa cotizar el producto "{NombreProducto}" de la marca {Marca}, presentación {Presentación}. ¿Podrían darme más información?
```

**Implementación:** crear un helper `lib/whatsapp.ts` (cuando se cree) que reciba `{ phone, productName, brand, presentation }` y devuelva la URL `https://wa.me/<phone>?text=<encoded>` usando `encodeURIComponent`.

---

##  Decisiones validadas

| Tema | Decisión |
|---|---|
| Filtro por marca en el catálogo | ✅ Sí (junto con especie y tipo) |
| Indicador de disponibilidad por producto | ❌ No incluir |
| Número de registro sanitario en ficha de medicamentos | ✅ Sí |
| WhatsApp con mensaje pre-llenado | ✅ Sí |
| Sin secciones por persona | ✅ Una sola home, navegación por anclas |
| Sin sección dedicada a OptiCare | ✅ Vive integrado en el catálogo (categoría Mascotas) |
| Sin condiciones comerciales públicas | ✅ Se manejan offline con asesor |

---

##  Principios de ingeniería (NO NEGOCIABLES)

Estas reglas son **obligatorias** para todo el código que se escriba en este proyecto. Antes de implementar cualquier feature, pensar la arquitectura del módulo respetando estos principios. **Nunca poner todo en un solo archivo.**

### 1. Separación de responsabilidades (SoC)

Cada archivo debe tener **una sola razón para cambiar**. Separar en capas claras:

- **Presentación** (componentes UI puros): solo renderizan props, no contienen lógica de negocio ni acceso a datos.
- **Lógica de negocio** (hooks, helpers, servicios en `/lib`): cálculos, transformaciones, validaciones, llamadas a API.
- **Datos** (`lib/sanity/`, `lib/data/`): obtención y estructura de datos. Abstraído del componente.
- **Tipos** (`/types` o colocados junto al módulo): interfaces y tipos TypeScript.
- **Configuración** (`/config`, `tailwind.config.ts`): constantes, tokens, valores que no cambian en runtime.

### 2. Componentes reutilizables y composición

- Crear componentes **pequeños y enfocados**: un componente, una responsabilidad.
- Antes de duplicar JSX en dos lugares, extraer a un componente compartido.
- Preferir **composición sobre props gigantes**: si un componente tiene más de ~6 props, probablemente debería partirse.
- Componentes UI base reutilizables esperados: `Button`, `Badge`, `Card`, `Container`, `SectionHeader`, `Tag`, `Input`, `Select`, `Skeleton`.
- Componentes compuestos del dominio: `ProductCard`, `BrandLogo`, `SectorCard`, `WhatsAppCTA`, `SpeciesIcon`.

### 3. Reglas estructurales por tipo de archivo

| Tipo | Ubicación esperada | Responsabilidad |
|---|---|---|
| Página (route) | `app/**/page.tsx` | Composición de secciones, fetching de datos del lado server. **Sin lógica de UI compleja.** |
| Sección | `components/<area>/<Seccion>.tsx` | Bloque grande de la página (Hero, About, etc.). Compone componentes UI base. |
| Componente UI base | `components/ui/<Componente>.tsx` | Pieza reutilizable atómica. |
| Componente de dominio | `components/<area>/<Componente>.tsx` o `components/shared/` | Pieza reutilizable que conoce el dominio. |
| Hook | `hooks/use<Cosa>.ts` (cuando se cree la carpeta) | Lógica con estado/efectos reutilizable. |
| Helper / utilidad | `lib/<funcion>.ts` | Funciones puras, sin estado. |
| Tipo / interfaz | `types/<dominio>.ts` (cuando se cree la carpeta) o junto al módulo | Definiciones TypeScript. |
| Constante | `lib/constants.ts` (existente) o `config/<dominio>.ts` (cuando se cree) | Datos estáticos. |

### 4. Tamaño y complejidad

- **Máximo ~150 líneas por componente.** Si crece más, dividir.
- **Máximo ~200 líneas por archivo en general.** Excepciones justificadas (configs).
- Funciones con más de 3 niveles de anidamiento → refactorizar.
- Si un `useEffect` o handler tiene más de 15 líneas → extraer a un hook o helper.

### 5. Naming y organización

- Componentes: **PascalCase** (`HeroSlider.tsx`).
- Hooks: **camelCase con `use`** (`useCarousel.ts`).
- Helpers: **camelCase** (`buildWhatsAppLink.ts`).
- Constantes exportadas: **SCREAMING_SNAKE_CASE** (`SECTORS`, `BRANDS`).
- Tipos/interfaces: **PascalCase** sin prefijo `I` (`Product`, no `IProduct`).
- Un archivo `index.ts` por carpeta (cuando convenga) para re-exportar el API público del módulo.

### 6. Props y tipado

- **Siempre tipar props** con interfaces explícitas.
- Props opcionales con default explícito; preferir desestructuración con defaults.
- Evitar `any`; usar `unknown` o tipos específicos.
- Usar `Readonly<>` para props inmutables y `as const` en datos estáticos.

### 7. Server / Client Components

- **Default: Server Component.** Solo agregar `"use client"` cuando sea estrictamente necesario (interactividad, hooks de React, browser APIs).
- Aislar la parte interactiva en su propio componente cliente para mantener el resto en server.
- El fetch a Sanity se hace en server components; los datos se pasan al client component como props serializables.

### 8. Estado y efectos

- Levantar estado solo lo necesario; preferir estado local.
- No poner lógica en `useEffect` que pueda calcularse en render.
- Custom hooks para encapsular lógica con estado reutilizable (ej. `useCarousel`, `useProductFilters`).

### 9. Antes de escribir código

Cuando se vaya a implementar una feature nueva, seguir este flujo **obligatorio**:

1. **Revisar la estructura actual del proyecto** (sección "📁 Estructura actual del proyecto"). No alucinar archivos o carpetas que no existen.
2. **Pensar la arquitectura primero**: ¿qué archivos voy a tocar/crear?, ¿qué responsabilidad tendrá cada uno?, ¿hay algo reutilizable ya existente?
3. **Proponer la estructura** al usuario antes de escribir el código (lista de archivos + responsabilidad de cada uno + carpetas nuevas a crear).
4. **Identificar los componentes reutilizables** que conviene extraer desde el inicio.
5. **Implementar** archivo por archivo, validando que cada uno respete los límites de tamaño y responsabilidad.
6. **Refactorizar** si durante la implementación aparece duplicación o crecimiento excesivo.

---

##  Convenciones de código

- Componentes en PascalCase, archivos con extensión `.tsx`
- Server Components por defecto (App Router); marcar `"use client"` solo si hay interactividad
- Variables de marca centralizadas en `tailwind.config.ts`, **nunca hex inline**
- Mobile-first responsive (breakpoints de Tailwind: `sm` 640, `md` 768, `lg` 1024, `xl` 1280)
- Accesibilidad: contraste AA mínimo, `alt` en imágenes, `aria-label` en botones de iconos
- WhatsApp links con `https://wa.me/<numero>?text=<mensaje>` URL-encoded (usar `encodeURIComponent`)
- Imágenes optimizadas con `next/image` (sizes, priority en hero)
- Respetar tipografía global de `globals.css`: no re-aplicar tamaños en `h1`–`h4`, `p`, `span`, `small` salvo override explícito justificado

---
## Borrar import unnecessary
-Eliminar imports que no se usan cuando termines de programar , en todos los archivos que modifiques.

_Última actualización: cuando lo modifiques._