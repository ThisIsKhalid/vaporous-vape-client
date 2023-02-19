/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      MidnightBlue: "#35284A",
      MediumPurple: "#816F90",
      LightCoral: "#FB7D79",
      LightSalmon: "#FB9D7E",
      NavajoWhite: "#F8CD9E",
    },
    extend: {},
  },
  plugins: [],
};
