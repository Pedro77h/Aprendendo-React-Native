module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 0,
  },
  parser: babel-eslint ,
  parserOptions: {
    "ecmaVersion": 6,
    ecmaFeatures: {
      "jsx": true,
      "experimentalObjectRestSpread": true
    },

  }
};
