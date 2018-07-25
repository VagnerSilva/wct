
// plugings

const CopyWebpackPlugin = require('copy-webpack-plugin');


// utils
const path = require('path');
const webpack = require('webpack');

module.exports = {

  plugins: [
    new webpack.IgnorePlugin(/vertx/),

  ],
  module: {
    rules: [
      // templateUrl
      {
        test: /\.js$/,
        use: [
          { loader: 'template-url-webpack' },
          { loader: 'style-url-webpack' },
        ],
        exclude: ['node_modules'],
      },
      // html
      {
        test: /\.html$/,
        use: [
          {
            loader: 'raw-loader',
            options: {
              collapseWhitespace: true,
              minimize: true,
              removeAttributeQuotes: false,
              caseSensitive: true,
              customAttrSurround: [[/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/]],
              customAttrAssign: [/\)?\]?=/],
            },

          }],
      },
      {
        test: /\.(eot|svg|cur)$/,
        loader: 'file-loader',
        options: {
          name: '[name][hash].[ext]',
          limit: 10000,
        },
      },
      {
        test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
        loader: 'url-loader',
        options: {
          name: '[name][hash].[ext]',
          limit: 10000,
        },
      },

    ],
  },
  resolve: {
    extensions: ['.js', '.html', '.css', '.scss', '.sass', '.json'],

    modules: [
      path.join(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src'),
    ],
  },
};
