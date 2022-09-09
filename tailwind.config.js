/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "mainBg-800" : "#130425",
        "mainBg-500" : "#380a6d",
        "mainBg-300" : "#4f02cc",
        fadeText: "#d2e7f3",
        "violate-600" : "#c70add",
        "violate-300" : "#d65ef9"
      }
    },
  },
  plugins: [],
}
