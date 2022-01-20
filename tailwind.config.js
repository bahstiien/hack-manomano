module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ["Permanent Marker", "monospace"],
      second: ["Dongle", "sans-serif"],
    },

    extend: {
      colors: {
        one: "#182a4b",
        two: "#1B263B",
        three: "#3393ac",
        four: "#11c2b8",
        five: "#E0E1DD",
        six: "#00398a",
      },
    },
  },
  plugins: [],
};
