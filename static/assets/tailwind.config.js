/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./../../**/*.html",
    "./js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
      height: {
        calc1: 'calc(100% - 140px)',
      }
    }
  },
  plugins: [],
}

