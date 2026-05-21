/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg:      'var(--page-bg)',
          surface: 'var(--page-surface)',
          hover:   'var(--page-hover)',
          text:    'var(--page-text)',
          muted:   'var(--page-muted)',
          border:  'var(--page-border)',
        },
        accent: {
          cyan:        '#06E6FF',
          'cyan-dark': '#00D4F0',
          'cyan-light':'#1FFFFF',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        glow:     '0 0 20px rgba(6, 230, 255, 0.3)',
        'glow-lg':'0 0 40px rgba(6, 230, 255, 0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}