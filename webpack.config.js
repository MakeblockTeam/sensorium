const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: {
              warnings: false,
              output: {
                  comments: false
              },
              compress: {
                  drop_console: true
              }
          },
          sourceMap: false,
      })
    ]
  },
  // devtool: "cheap-module-source-map"
};