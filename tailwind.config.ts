import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b1f3a',
          50: '#e6ecf4',
          100: '#cdd9ea',
          200: '#9ab3d5',
          300: '#688dbf',
          400: '#3567aa',
          500: '#0b1f3a',
          600: '#091a31',
          700: '#071627',
          800: '#05111e',
          900: '#030c14'
        },
        accent: {
          DEFAULT: '#d4af37',
          600: '#b7932c',
          700: '#9a7823'
        }
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(11,31,58,0.08)'
      }
    },
  },
  plugins: [],
} satisfies Config
