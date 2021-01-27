const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pathToMainJs = require.resolve("./src/app.js");
const pathToIndexCss = require.resolve("./src/css/style.css");
const pathToIndexHtml = require.resolve("./src/index.html");
const pathToIndexFavicon16 = require.resolve("./src/img/favicon-16x16.png");
const pathToIndexFavicon32 = require.resolve("./src/img/favicon-32x32.png");

module.exports =  {
  entry: [
    '@babel/polyfill',
    pathToMainJs,
    pathToIndexHtml,
    pathToIndexCss,
    pathToIndexFavicon16,
    pathToIndexFavicon32,
  ],
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        type: 'asset/resource',
        generator: {
          filename: 'css/[name][ext][query]'
        }
      },
      {
        test: /\.html$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext][query]'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]'
        }
      },
    ]
  }
};
