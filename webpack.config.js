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
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0']
      },
      exclude: /node_modules/
    }]
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false
  //     }
  //   })
  // ],
  target: "node",
  node: {
    "fs": "empty",
    "cluster": "empty",
    "dgram": "empty",
    "net": "empty",
    "child_process": "empty"
  },
  watch: true,
  devtool: "cheap-module-source-map"
};