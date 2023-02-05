/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/***/*.{js,jsx,ts,tsx}",
    "./src/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
      }
    },
    colors: {

    }
  },
  plugins: [],
}
