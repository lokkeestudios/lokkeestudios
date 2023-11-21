/** @type {import('postcss').Postcss} */
const config = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
};

module.exports = config;
