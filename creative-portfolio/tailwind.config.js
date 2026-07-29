/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        mobile: { max: '809.98px' },
        'md-tablet': { min: '810px', max: '1199.98px' },
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      colors: {
        pink: { primary: '#F598F2' },
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
