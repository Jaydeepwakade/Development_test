/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        'neue-meta': ['"Neue Meta"', 'sans-serif'],
      },
      colors: {
        customOrange: 'rgba(242, 113, 33, 1)',
        customRed: "rgba(254, 0, 0, 1)",
        customGreen: "#25A769"
      }
    },
  },
  plugins: [],
}