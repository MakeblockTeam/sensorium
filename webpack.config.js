const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'browser'),
    filename: 'sensorium.js',
    library: "Sensorium",
    libraryTarget: "umd"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0']
      },
      exclude: /node_modules/
    }]
  },
  mode: "production",
  // mode: "development",
  plugins: [],
  devtool: "cheap-module-source-map"
};