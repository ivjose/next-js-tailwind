module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './modules/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        780: '982px',
        90: '90%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
