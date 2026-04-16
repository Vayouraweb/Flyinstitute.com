/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a", // slate-900
          foreground: "#f8fafc", // slate-50
        },
        secondary: {
          DEFAULT: "#3b82f6", // blue-500
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#1e293b", // slate-800
          foreground: "#f1f5f9", // slate-100
        }
      }
    },
  },
  plugins: [],
}
