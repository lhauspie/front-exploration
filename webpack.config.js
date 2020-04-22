const webpack = require("webpack");
const path = require("path");

let config = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "./bundle.js"
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    }]
  }
}

module.exports = config;
