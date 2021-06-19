module.exports = {
  purge: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/hoc/**/*.{ts,tsx}",
  ],
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
