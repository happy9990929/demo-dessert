/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          matcha: '#6b7a3f', // 抹茶主色
          'matcha-dark': '#4a572a', // 抹茶深色
          'matcha-light': '#8ea35d', // 抹茶淺色
          cream: '#f8f7f0', // 淺米奶油色 (微調以契合抹茶)
          'cream-dark': '#edece3',
          gold: '#c8963e',
          'gold-light': '#d4a853',
          brown: '#5a3e2b',
          darkgrey: '#1a1e16', // 墨綠黑 (用於頁尾)
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', '"Noto Sans TC"', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        jelly: {
          '0%': { transform: 'scale(1, 1) skewX(0)' },
          '25%': { transform: 'scale(1.25, 0.75) skewX(-6deg)' },
          '40%': { transform: 'scale(0.75, 1.25) skewX(6deg)' },
          '55%': { transform: 'scale(1.15, 0.85) skewX(-3deg)' },
          '70%': { transform: 'scale(0.95, 1.05) skewX(2deg)' },
          '85%': { transform: 'scale(1.02, 0.98) skewX(-1deg)' },
          '100%': { transform: 'scale(1, 1) skewX(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'scroll': 'scroll 30s linear infinite',
        'jelly': 'jelly 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both',
      },
    },
  },
  plugins: [],
}
