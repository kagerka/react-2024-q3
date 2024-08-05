module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'next',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    // warnOnUnsupportedTypeScriptVersion: false,
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', '.husky', 'vitest-setup.ts', 'next.config.mts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react-compiler', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-explicit-any': 'error',
    'react-compiler/react-compiler': 'error',
    'react/static-property-placement': ['error', 'static public field'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/require-default-props': [
      'error',
      {
        classes: 'defaultProps',
        functions: 'defaultArguments',
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    'no-param-reassign': ['error', { props: false }],
    'react/jsx-props-no-spreading': [
      'error',
      {
        custom: 'ignore',
      },
    ],
  },
};
