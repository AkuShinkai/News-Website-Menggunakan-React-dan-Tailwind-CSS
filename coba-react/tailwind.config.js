/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        biruTerangLight: '#2C74B3',
        biruAgakTerangLight: '#205295',
        biruAgakGelapLight: '#144272',
        biruGelapLight: '#0A2647'
      },
      fontFamily:{
        "primary" : ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

