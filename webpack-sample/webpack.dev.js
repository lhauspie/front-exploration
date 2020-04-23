const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

module.exports = merge(common, {
  mode: 'development',
  optimization: {
    minimize: false
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./public"), // indicates the folder from which the content will be served
    historyApiFallback: true, // activation of a fallback to index.html for Single Page Applications
    inline: true,             // enables message broadcasting in the DevTools console
    open: true,               // opens your default browser when the server is launched
    hot: true                 // activates the Hot Module Reload, i.e. the automatic reloading of your modules at each modification/backup of source files.
  },
  devtool: "eval-source-map"
});
