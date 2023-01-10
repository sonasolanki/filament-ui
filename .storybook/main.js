module.exports = {
  addons: [
    "@storybook/addon-essentials",
    "@ljcl/storybook-addon-cssprops",
    "@storybook/addon-a11y",
    "@etchteam/storybook-addon-status"
  ],
  babelDefault: (config) => {
    return {
      ...config,
      plugins: [...config.plugins, [require.resolve('@babel/plugin-transform-react-jsx'), { pragma: 'h' }, 'preset']],
    };
  },
  framework: "@storybook/html",
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need
  //   // Return the altered config
  //   return config;
  // },
};