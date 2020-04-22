const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./public"), // indicates the folder from which the content will be served
    historyApiFallback: true, // activation of a fallback to index.html for Single Page Applications
    inline: true,             // enables message broadcasting in the DevTools console
    open: true,               // opens your default browser when the server is launched
    hot: true                 // activates the Hot Module Reload, i.e. the automatic reloading of your modules at each modification/backup of source files.
  },
  devtool: "eval-source-map"  //
}

module.exports = config;
