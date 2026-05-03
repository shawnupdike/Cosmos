module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#05070D",
          secondary: "#0B1220"
        },
        accent: {
          primary: "#7C8CFF",
          positive: "#22E6A8",
          negative: "#FF5C7A"
        }
      }
    }
  },
  plugins: []
};