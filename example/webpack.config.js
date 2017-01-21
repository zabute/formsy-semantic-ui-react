const webpack = require('webpack');
const path = require('path');

const PATHS = {
  node_modules: path.resolve(__dirname, 'node_modules'),
  src: path.resolve(__dirname, 'src'),
  app: path.join(__dirname, 'src/app/index.js'),
  dist: path.resolve(__dirname, 'dist'),
};

const config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/index.js'),
  ],

  devServer: {
    contentBase: 'example',
    devtool: 'eval',
    hot: true,
    port: 8080,
    host: 'localhost',
  },

  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      },
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: [path.resolve(__dirname, 'node_modules')],
      },
    ],
  },
};

module.exports = config;
