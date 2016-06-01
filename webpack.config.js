var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './example/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/example',
  },
  module: {
    preLoaders: [
      { 
        test: /\.js?$/, 
        loader: 'eslint', 
        exclude: /node_modules/ }
    ],
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