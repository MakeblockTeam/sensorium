const path = require('path');

module.exports = {
  entry: './src/protocol/index.js',
  output: {
    path: path.resolve(__dirname, 'browser'),
    filename: 'sensorium.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },
  watch: true,
  devtool: "cheap-module-source-map"
};