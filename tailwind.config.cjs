/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/img/iPhone_.png')",
        rebirth: "url('../public/img/rebirth.png')",
        mandligger: "url('../public/img/mandligger.png')",
        rebirth: "url('../public/img/rebirth.png')",
        rebirth: "url('../public/img/rebirth.png')",
        rebirth: "url('../public/img/rebirth.png')",
        rebirth: "url('../public/img/rebirth.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
