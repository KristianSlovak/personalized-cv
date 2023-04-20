/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        1500: "1500ms",
      },
      fontSize: {
        "10xl": "8rem",
        "11xl": "40rem",
      },
    },
  },
  plugins: [],
};
