const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
    'postcss-import',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
