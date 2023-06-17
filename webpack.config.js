const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js', // Точка входа для сборки проекта

  output: {
    filename: 'bundle.js', // Имя выходного файла сборки
    path: path.resolve(__dirname, './'), // Путь для выходного файла сборки
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './English-For-Kids.html',
      filename: 'English-For-Kids.html',
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),

    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, './assets') },
      ]
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, './'), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },

  mode: 'development', // Режим сборки
};