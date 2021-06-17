module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
