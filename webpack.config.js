const path = require('path');

module.exports = {
  entry: './src/protocol/index.js',
  output: {
    path: path.resolve(__dirname, 'browser'),
    filename: 'sensorium.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0']
        },
        exclude: /node_modules/
      }
    ]
  },
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