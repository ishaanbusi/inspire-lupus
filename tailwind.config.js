/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6F42C1",
        lavender: "#E9DDF8",
        teal: "#2AA7A1",
        navy: "#1F2A44",
        bg: "#FAF9FE",
        grayText: "#6B7280"
      }
    },
  },
  plugins: [],
};