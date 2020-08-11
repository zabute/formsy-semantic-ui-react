const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: path.join(__dirname, '/index.js'),

  devServer: {
    contentBase: 'example',
    hot: true,
    open: true,
    port: 8080,
    host: 'localhost',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
};
