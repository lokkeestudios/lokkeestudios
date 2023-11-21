/** @type {import('prettier').Config & import('prettier-plugin-astro').options & import('prettier-plugin-tailwindcss').options} */
const config = {
  printWidth: 100,
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: ['**/*.astro'],
      options: {
        parser: 'apstro',
      },
    },
  ],
};

export default config;
