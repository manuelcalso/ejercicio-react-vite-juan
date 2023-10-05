/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  purge: ["./../src/App.jsx", "./../src/Registrate.jsx", "./../src/Reserva.jsx", './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
