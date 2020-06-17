module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: false,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb'],
  plugins: ['json', 'graphql'],
  rules: {
    'no-console': 'off',
    'no-underscore-dangle':  ['error', { 'allow': ['__resolveType'] }],
  },
  globals: {},
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
