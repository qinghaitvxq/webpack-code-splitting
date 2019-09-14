const path = require("path");
const base = require("./webpack.config");

module.exports = Object.assign({}, base, {
  mode: "production",
  entry: {
    index: "./src/app.js"
  }
});
