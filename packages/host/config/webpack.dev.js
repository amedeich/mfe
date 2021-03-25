const { merge } = require("webpack-merge");
const ModuleFederationPlgin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require("./webpack.common");
const { dependencies } = require('../package.json');

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlgin({
      name: 'host-mfe',
      remotes: {
        reactmfe: 'reactmfe@http://localhost:8081/remoteEntry.js',
        vuemfe: 'vuemfe@http://localhost:8082/remoteEntry.js'
      },
      shared: dependencies 
    })
  ],
};

module.exports = merge(commonConfig, devConfig);
