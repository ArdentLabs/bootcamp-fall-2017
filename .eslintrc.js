module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  rules: {
    'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
    'no-underscore-dangle': 'off',
    'no-unused-vars': 1,
    'new-cap': 0,
    'graphql/template-strings': ['error', {
      env: 'apollo',
      schemaJson: require('./schema.json'),
    }],
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    jest: true
  },
  plugins: [
    'graphql'
  ],
};
