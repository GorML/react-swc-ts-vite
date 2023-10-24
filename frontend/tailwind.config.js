/** @type {import('tailwindcss').Config} */
export default {
  important: true,
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

