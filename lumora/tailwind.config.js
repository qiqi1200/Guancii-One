/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Instrument Serif', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        lumora: {
          50: '#f0f0ff',
          100: '#dcdcff',
          200: '#bdbdff',
          300: '#9393ff',
          400: '#6b6bfa',
          500: '#5a4af4',
          600: '#4b33e6',
          700: '#3f26cc',
          800: '#3421a6',
          900: '#2d1d85',
          950: '#1b1057',
        },
        dusk: {
          50: '#f7f3fe',
          100: '#ede5fc',
          200: '#ddcff9',
          300: '#c3adf4',
          400: '#a381ec',
          500: '#8759e0',
          600: '#753ed2',
          700: '#662fb9',
          800: '#56289a',
          900: '#48227f',
          950: '#2c1255',
        },
      },
      animation: {
        'morph-bg': 'morphBg 12s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-slower': 'floatSlower 11s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'aurora': 'aurora 20s linear infinite',
      },
      keyframes: {
        morphBg: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        floatSlower: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(-1deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        aurora: {
          '0%': { transform: 'translateX(-50%) rotate(0deg)' },
          '100%': { transform: 'translateX(50%) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
