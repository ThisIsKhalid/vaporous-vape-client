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
      slate: colors.slate,
      red: colors.red,
      blue: colors.blue,
      MidnightBlue: "#35284A",
      MediumPurple: "#816F90",
      LightCoral: "#FB7D79",
      LightSalmon: "#FB9D7E",
      NavajoWhite: "#F8CD9E",
    },
    extend: {
      backgroundImage: {
        topBanner: "url('/src/assets/images/vaping-device-e-cigarette.jpg')",
        populerCat1: "url('/src/assets/images/ageis-max-01.jpg')",
        populerCat2: "url('/src/assets/images/PnP-POD-TANK-1.png')",
        populerCat3:
          "url('/src/assets/images/stylish-young-girl-in-a-city-with-vape-YYNXH69.jpg')",
      },
    },
  },
  plugins: [],
};
