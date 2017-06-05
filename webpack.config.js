const path = require('path');

module.exports = {
  entry: './src/protocol/index.js',
  output: {
    path: path.resolve(__dirname, 'browser'),
    filename: 'sensorium.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
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