const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { dirname } = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
  },

  mode: 'development',
    devServer: {
        historyApiFallback: true,
        static: [
          {
            directory: path.join(__dirname, 'src'),
          },
        ],
        open: false,
        compress: true,
        hot: true,
        port: 8080,
    },

  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/template.html'),
        filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: './app.css',
    }),
  ],

  module: {
    rules: [
        {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
        },

        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
    ],
  },
}