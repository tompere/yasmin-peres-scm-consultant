/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Assistant", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          200: "#BCCCDC",
          300: "#9FB3C8",
          400: "#627D98",
          500: "#334E68",
          600: "#243B53",
          700: "#102A43",
        },
        blue: {
          50: "#F0F7FF",
          100: "#D8ECFF",
          200: "#A2D2FF",
          300: "#7BBFFF",
        },
        pink: {
          50: "#FFF5F9",
          100: "#FFE4ED",
          200: "#FFC8DD",
          300: "#FFB0CC",
          400: "#FF98BB",
          500: "#FF80AA",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
