/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["LINE Seed Sans TH", "sans-serif"],
        "noto-sans-thai": ["Noto Sans Thai", "sans-serif"],
      }
    },
  },
  plugins: [],
}