const baseConfig = require("./webpack.config.base");
module.exports = Object.assign({}, baseConfig, {
  mode: "development",
  devServer: {
    historyApiFallback: true,
  },
});
