/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#FEBF00",
        "custom-yellow-dark": "#D9A300",
        "custom-offwhite": "#fbf7f2",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #BD1F17, #A51D13, #8E1B0F)",
        "custom-box-gradient":
          "linear-gradient(90deg, rgba(189, 31, 23, 0.00) 32.88%, rgba(189, 31, 23, 0.70) 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
