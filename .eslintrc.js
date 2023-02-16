module.exports = {
  root: true,
  extends: ['standard-with-typescript', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    commonjs: true,
  },
  parserOptions: {
    project: null,
    ecmaFeatures: {
      jsx: true,
    },
  },
}
