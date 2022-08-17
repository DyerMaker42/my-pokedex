/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "pages/index.js",
    "./pages/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./hooks/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
