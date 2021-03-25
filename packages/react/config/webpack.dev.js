const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationModule = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require("./webpack.common");
const { dependencies } = require('../package.json');
const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationModule({
      name: 'reactmfe',
      filename: 'remoteEntry.js',
      exposes: {
        './ReactApp': './src/bootstrap'
      },
      shared: dependencies
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
