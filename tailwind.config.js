/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*"],
  theme: {
    extend: {
      colors: {
        primary: "#1F1F1F",
        neutral: "#8E8E8E",
      },
    },
    screens: {
      sm: "430px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
