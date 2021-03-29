const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/host/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host-mfe',
      remotes: {
        reactmfe: `reactmfe@${domain}/reactmfe/latest/remoteEntry.js`,
        vuemfe: `vuemfe@${domain}/vuemfe/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);