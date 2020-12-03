module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'process-bg': "url('/img/bg2.png')",
        'rates-bg': "url('/img/bg3.png')",
        'cta': "url('/img/cta-bg.png')",
        'footer': "url('/img/footer-bg.png')",
   
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
