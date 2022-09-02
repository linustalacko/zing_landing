/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js.jsx}"],
  theme: {
    extend: { 
      colors : {
        primary: "#EE9789"
      }, 
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      } 
      }
  },
  plugins: [],
}
