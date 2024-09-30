/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'Verde': '#A1C130',
      'Cinza':'#D9D9D9',
      'Laranja':'#DC9100'
      
    },
    backgroundImage: {
      'login-img':"url('/image 24.png')"
    },
    fontFamily: {
      customFont: ['"Quicksand"', "sans-serif"],
    },

  },
  },
  plugins: [],
}