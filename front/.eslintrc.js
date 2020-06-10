module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 7,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
  ],
  plugins: ['vue', 'json', 'prettier'],
  rules: {
    'import/no-unresolved': 0,
    'import/prefer-default-export': 1,
    'max-len': 0,
    'no-console': 'off',
    'vue/no-v-html': 0,
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    // official ignore no reassign https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js#L177
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        'state', // for Vuex store mutation
      ],
    }],
  },
  settings: {
    'import/core-modules': ['vue', 'vuex'],
  },
};
