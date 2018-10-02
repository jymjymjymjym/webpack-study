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
      {test: /\.less$/, use: ['style-loader', 'css-loader', "less-loader"]}
    ]
  }

};