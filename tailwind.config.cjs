/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "987px",
      // => @media (min-width: 640px) { ... }

      // laptop: "1024px",
      // // => @media (min-width: 1024px) { ... }

      laptop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
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

