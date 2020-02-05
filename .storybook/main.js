// module.exports = override(
//   adjustStyleLoaders(rule => {
//     if (rule.test.toString().includes('scss')) {
//       rule.use.push({
//         loader: require.resolve('sass-resources-loader'),
//         options: {
//           resources: './src/styles/default.scss',
//         },
//       });
//     }
//   })
// );

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
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    // console.log(config.module.rules);
    // Make whatever fine-grained changes you need

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

    // Return the altered config
    return config;
  },
};
