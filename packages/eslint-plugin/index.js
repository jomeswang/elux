module.exports = {
  configs: {
    common: require('./config/common'),
    react: require('./config/react'),
    vue: require('./config/vue'),
  },
  rules: {
    'check-bean': require('./rules/check-bean'),
  }
};
