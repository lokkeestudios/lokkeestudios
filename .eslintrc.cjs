/** @type {import('eslint').Linter.config} */
const config = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
    {
      files: ['*.ts'],
      plugins: ['react', '@typescript-eslint', 'react-hooks', 'react-compiler'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
    {
      files: ['*.tsx'],
      plugins: ['react', '@typescript-eslint', 'react-hooks', 'react-compiler'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.astro', '.tsx'] }],
        'react/require-default-props': ['error', { functions: 'defaultArguments' }],
        'react/jsx-props-no-spreading': 'warn',
        'react/no-array-index-key': 'warn',
        '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        'react-compiler/react-compiler': 'warn',
      },
    },
    {
      // Defines the configuration for `<script>` tags
      // Inlined scripts in astro files' `<script>` tags are assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
  rules: {
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-void': ['error', { allowAsStatement: true }],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
    'no-underscore-dangle': 'off',
    'prettier/prettier': 'error',
  },
};

module.exports = config;
