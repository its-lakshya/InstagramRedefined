/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // extend: {},
    screens: {
      'xs' : "525px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

