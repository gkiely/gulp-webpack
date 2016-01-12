var path       = require('path');
var webpack    = require('webpack');
var livereload = require('webpack-livereload-plugin');
 
module.exports = {
  watch: true,
  devtool: 'cheap-module-source-map',
  plugins:[
    new livereload()
  ],
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};