/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#e8edf5',
          100: '#c5d1e8',
          200: '#9fb3d9',
          300: '#7894ca',
          400: '#5c7dbf',
          500: '#3f66b3',
          600: '#2d548f',
          700: '#1e3f6e',
          800: '#122a4d',
          900: '#0a1829',
          950: '#060f1a',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#c9a227',
          600: '#b8860b',
          700: '#9a6f0a',
          800: '#7d5a08',
          900: '#614606',
        },
      },
    },
  },
  plugins: [],
};
