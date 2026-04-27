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
