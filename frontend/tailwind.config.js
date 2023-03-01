const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "ui-sans-serif"],
    },
    extend: {
      colors: {
        "teal-custom": "#29AB91",
      },
      animation: {
        "popping-up": "popup .3s linear",
      },
      keyframes: {
        popup: {
          "0%": { transform: "scale(0%)" },
          "50%": { transform: "scale(100%)" },
        },
      },
    },
  },
  plugins: [],
});
