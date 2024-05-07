/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nothing: ["Nothing You Could Do", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        cinzel: ["Cinzel Decorative", "serif"],
        contrail: ["Contrail One", "sans-serif"],
        crimson: ["Crimson Pro", "serif"],
        notoKR: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
