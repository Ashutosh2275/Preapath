/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F8FAFC',
          dark: '#0B0F17',
        },
        card: {
          light: '#FFFFFF',
          dark: '#111827',
        },
        primary: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          light: '#EEF2FF',
          dark: '#6366F1',
        },
        secondary: {
          DEFAULT: '#0F766E',
          hover: '#115E59',
          light: '#F0FDFA',
          dark: '#14B8A6',
        },
        slate: {
          750: '#243248',
          850: '#151F32',
          950: '#070C15',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
