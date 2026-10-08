/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: {
          950: '#0a0a0a',
          900: '#141414',
          800: '#1c1c1c',
          700: '#262626',
        },
        gold: {
          50: '#fdf9ec',
          100: '#faf0d0',
          200: '#f5e09e',
          300: '#efc95c',
          400: '#e6b433',
          500: '#c9a227',
          600: '#a8831e',
          700: '#7d6118',
          800: '#5a4513',
          900: '#3d2f0e',
        },
        cream: {
          50: '#fdfcf7',
          100: '#f8f4e8',
          200: '#f1e9d0',
          300: '#e8dab0',
          400: '#dcc88a',
        },
      },
      fontFamily: {
        serif: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
