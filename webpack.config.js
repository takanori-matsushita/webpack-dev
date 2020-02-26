const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssMqpacker = require('css-mqpacker');
const cssSorter = require('css-declaration-sorter');

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, './assets')
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, //cssを別ファイルに出力
          {
            loader: 'css-loader',
            options: {
              url: false,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                cssMqpacker({
                  sort: true
                }),
                cssSorter({
                  order: 'smacss'
                })
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.js/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
};