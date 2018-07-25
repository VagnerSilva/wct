const path = require('path');
const merge = require('webpack-merge');

const glob = require('glob-all');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('../webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  context: path.resolve(__dirname),
  entry: {
    // polyfills: '../node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
    app: glob.sync(path.resolve('test/template/**/*.js')),

  },
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'WC',
      template: 'index.html',
    }),
  ],
  module: {
    rules: [

      // js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {

            loader: 'babel-loader',
            options: {

              presets: [['env', { modules: false }]],
              plugins: [
                'transform-decorators-legacy',
                'transform-custom-element-classes',
              ],
            },
          },

        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
