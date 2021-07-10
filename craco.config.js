const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1A535C",
              "@error-color": "#ff6b6b",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
