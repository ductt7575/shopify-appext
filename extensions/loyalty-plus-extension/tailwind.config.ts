import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./frontend/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    screens: {
      mb: "640px",

      tl: "1024px",

      pc: "1280px",

      "h-sm": { raw: "(max-height: 690px)" },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
  prefix: "tw-",
};
