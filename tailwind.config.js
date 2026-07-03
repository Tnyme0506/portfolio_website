/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        base: {
          950: '#05070d',
          900: '#0a0e17',
          800: '#111726',
          700: '#1a2234',
        },
        accent: {
          DEFAULT: '#38bdf8',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        iris: {
          DEFAULT: '#818cf8',
          500: '#6366f1',
        },
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(56,189,248,0.12), transparent 40%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'aurora-one': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(8%, 6%) scale(1.15)' },
          '66%': { transform: 'translate(-6%, 10%) scale(0.9)' },
        },
        'aurora-two': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-10%, -8%) scale(0.95)' },
          '66%': { transform: 'translate(6%, -4%) scale(1.2)' },
        },
        'aurora-three': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1.05)' },
          '50%': { transform: 'translate(-8%, 6%) scale(0.85)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'aurora-one': 'aurora-one 22s ease-in-out infinite',
        'aurora-two': 'aurora-two 26s ease-in-out infinite',
        'aurora-three': 'aurora-three 30s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
