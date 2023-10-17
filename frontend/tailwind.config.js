/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#cad9ff",
        secondary: "#dee2ff",
        error: "#FAD2D2",
        success: "#E3F9DD",
        warning: "#FFFDD7",
        info: "#cad9ff",
      },
    },
  },
  plugins: [],
}

