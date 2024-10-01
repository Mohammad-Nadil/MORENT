/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3563E9",
        secondary: "#F6F7F9",
        "primary-text": "#1A202C",
        "secondary-text": "#90A3BF",
      },
    },
    fontFamily: {
      jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
    },
  },
  plugins: [],
};
