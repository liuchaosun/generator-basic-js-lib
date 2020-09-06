module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    eqeqeq: [2, 'always'],
    'no-eq-null': 2,
    'no-debugger': 1,
    'prefer-const': 0,
    'no-console': 0,
    'comma-dangle': [2, 'only-multiline'],
    'prettier/prettier': 2,
  },
};
