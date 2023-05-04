/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('images/main.jpg')",
      },
      colors: {
        basecolor: "#611818",
      },
      fontFamily: {
        didot: ["Didot", "serif"],
      },
    },
  },
  plugins: [],
};
