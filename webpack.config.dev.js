const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const base = require("./webpack.config");

module.exports = Object.assign({}, base, {
  mode: "development",
  entry: {
    index: "./src/app.js"
  },
  output: {
    //publicPath: "test",
    path: path.resolve(__dirname, "build"),
    libraryTarget: "umd"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    hot: true,
    port: 8080
    //openPage: "test" // And here
  },
  plugins: [
    new HtmlWebPackPlugin({
      //template: './src/index.html',
      template: path.resolve(__dirname, "src", "template.html"),
      filename: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
