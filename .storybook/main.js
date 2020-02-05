const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  addons: [
    {
      name: '@storybook/addon-docs/react/preset',
      options: {
        configureJSX: true,
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.filter(rule => {
      if (rule.test.toString().includes('scss')) {
        console.log(rule);
        rule.use.push({
          loader: require.resolve('sass-resources-loader'),
          options: {
            resources: path.resolve(__dirname, '../src/styles/default.scss'),
          },
        });
      }
    });
    return config;
  },
};
