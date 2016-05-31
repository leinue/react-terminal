var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './examples/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/examples',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
  },
  resolve: {
    alias: {
      'react-terminal': path.resolve(__dirname, 'src')
    },
    extensions: ['', '.js']
  }
}