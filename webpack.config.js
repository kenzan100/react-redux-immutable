var webpack = require('webpack');
var path    = require("path");

module.exports = {
  entry: "./entry.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.css$/,   loader: "style!css" },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
