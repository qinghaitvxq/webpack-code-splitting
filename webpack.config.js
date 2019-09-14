const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  entry: {
    index: "./src/app.js"
    //index: ['webpack/hot/dev-server']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].[chunkhash].bundle.js",
    filename: "[name].[chunkhash].bundle.js"
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
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor"
          //priority: -10
        }
      }
    },
    runtimeChunk: {
      name: "manifest"
    },
    minimizer: [new UglifyJsPlugin()]
  }
};
