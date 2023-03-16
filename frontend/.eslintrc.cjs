module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: 'frontend/tsconfig.eslint.json',
      },
    },
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.astro'],
      extends: [
        'plugin:astro/recommended',
        'plugin:astro/jsx-a11y-recommended',
      ],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        tsconfigRootDir: __dirname,
        project: './tsconfig.eslint.json',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'react/no-unknown-property': 'off',
        'react/style-prop-object': 'off',
        'react/jsx-key': 'off',
        'react/self-closing-comp': 'off',
      },
    },
    {
      files: ['tailwind.config.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
    extraFileExtensions: ['.astro'],
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'react',
    'jsx-a11y',
    'astro',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.astro', '.tsx'] }],
    'react/require-default-props': ['error', { functions: 'defaultArguments' }],
    'react/jsx-props-no-spreading': 'warn',
    'react/no-array-index-key': 'warn',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
    'prettier/prettier': 'error',
  },
};
