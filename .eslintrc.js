module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    'semi': ["error", "always"],
    'quotes': ["error", "single"],
    'react/react-in-jsx-scope': "off",
    'react/prop-types': "off",
    'prettier/prettier': ["error", {
      'endOfLine': "auto"
    }]
  },
  parserOptions: {
    'ecmaVersion': 2021,
    'sourceType': "module",
    'ecmaFeatures': {
      'jsx': true,
    },
    'parser': "next/babel",
  },
}