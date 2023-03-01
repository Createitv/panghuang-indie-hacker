process.env.ESLINT_TSCONFIG = 'tsconfig.json'
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@antfu',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {},
}
