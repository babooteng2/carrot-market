module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx"
  ],
  theme: {
    extend: {},
  },
  //darkMode:"media",
  darkMode:"class",
  plugins: [
    require("@tailwindcss/forms")
  ],
}
