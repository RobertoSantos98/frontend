/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        amarelo: "#FFCE04",
        preto: "#000000",
        marrom: "#240E0B",
        cinza:"#615A5A",
        branco: "#FFFFFF"
      }
    },
  },
  plugins: [],
}

