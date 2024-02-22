/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#f4f4f4",
        color2: "#9e9e9e",
        color3: "#c3c3c3",
        color4: "#646464",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'regular'],
      }
    },
  },
  plugins: [],
}