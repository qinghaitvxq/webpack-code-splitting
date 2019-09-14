const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const base = require("./webpack.config");

// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

// const cleanPlugin = new CleanWebpackPlugin(["dist"], {
//   root: __dirname,
//   verbose: true,
//   dry: false
// });
// const AnalyzerPlugin = new BundleAnalyzerPlugin({
//   analyzerMOde: "static"
// });
// const HTMLPlugin = new HtmlWebPackPlugin({
//   template: path.resolve(__dirname, "src", "template.html"),
//   chunksSortMode: "none"
// });

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
