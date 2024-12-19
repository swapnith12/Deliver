/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include Plasmo's `src` folder
    "./.plasmo/**/*.{js,ts,jsx,tsx}", // Include Plasmo's generated files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};