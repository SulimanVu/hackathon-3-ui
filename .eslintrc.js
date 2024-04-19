module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:json/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'unused-imports'],
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'webpack.config.js',
    'tsconfig*.json',
    '*.md',
    'package*.json',
    'nest-cli.json',
  ],

  rules: {
    'no-undef': 'warn',
    'react/prop-types': ['off'],
    // Из-за того, что используется React 18
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-absolute-path': 'error',
    'unused-imports/no-unused-imports': 1,

    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: '+(react|react-*)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '**.scss',
            patternOptions: {
              matchBase: true,
            },
            group: 'unknown',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
};
