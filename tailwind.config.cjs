/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      colors: {
        dark: "#202022",
        black: "#151515",
        text_grey: "#737374",
        highlight: "#DEDEDE",
      },
    },
  },
  plugins: [],
};

