const webpack = require('webpack');

module.exports = {
  webpack: (config, { dev, isServer, buildId }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
};
