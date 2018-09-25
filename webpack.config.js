const path = require('path');
const webpack = require('webpack');
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
  plugin: [
    new UglifyJsPlugin({
            uglifyOptions: {
                mangle: { toplevel: true },
                comments: false,
                beautify: false,
                warnings: true,
                drop_debugger: true,
                drop_console: true,
                output: {
                    ast: true,
                    code: true  // optional - faster if false
                }
            }
        })
  ],
  mode: "production",
  // mode: "development",
  plugins: [],
  devtool: "cheap-module-source-map"
};