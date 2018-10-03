const path = require('path');
const html = require("html-webpack-plugin");

module.exports = {
  entry: './main.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  mode: "development",
  
  plugins: [
    new html({
      template: "./index.html",
      filename: "index.html"
    })
  ],

  module:  {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(jpg|png|gif|jpeg)$/, use: 'url-loader?limit=46546&name=[name].[ext]'},
      {test: /\.(ttf|eot|svg|woff2)$/, use: "url-loader"},
      // {test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/' }

    ]
  }

};