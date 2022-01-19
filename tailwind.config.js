module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        prim: ["inter", "cursive"],
        round: ["Ubuntu", "cursive"],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
