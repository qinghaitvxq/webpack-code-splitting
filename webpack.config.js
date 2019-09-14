const path = require("path");
// const HtmlWebPackPlugin = require('html-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
  entry: {
    index: "./src/app.js"
    //index: ['webpack/hot/dev-server']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd"
    // libraryTarget: 'var',
    //library: 'ReactImagesetClip'
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  // devServer: {
  //   contentBase: path.resolve(__dirname, 'build'),
  //   hot: true,
  //   port: 8080
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.s([ac])ss$/,
        exclude: [/node_modules/],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        include: [/[\\/]node_modules[\\/]/],
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        include: [/[\\/]node_modules[\\/]/],
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  }
};
