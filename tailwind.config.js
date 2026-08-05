/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0B',      // deepest background
        surface: '#141414',   // Netflix base black
        raised: '#1F1F1F',    // card / row background
        line: '#2B2B2B',      // hairline borders on dark
        signal: '#E50914',    // Netflix red — the one accent
        signalDeep: '#B0060F',
        bone: '#F5F5F1',      // off-white text
        dim: '#A6A6A6',       // muted text
        match: '#46D369',     // Netflix "match %" green
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.96)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        fadeIn: 'fadeIn 1s ease forwards',
        scaleIn: 'scaleIn 0.4s ease forwards',
      },
    },
  },
  plugins: [],
}
