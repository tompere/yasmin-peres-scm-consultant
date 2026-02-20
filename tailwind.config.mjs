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
          50: "#E6EAF0",
          100: "#C0CAD9",
          200: "#8A9BB5",
          300: "#546C91",
          400: "#2E4A74",
          500: "#0A192F",
          600: "#091529",
          700: "#071122",
          800: "#050D1A",
          900: "#030812",
        },
        teal: {
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
        },
        gold: {
          400: "#D4A843",
          500: "#C49A2E",
          600: "#A67F1A",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.6s ease-out both",
        "slide-right": "slideRight 0.7s ease-out both",
        "scale-in": "scaleIn 0.5s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
