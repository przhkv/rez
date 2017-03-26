import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  entry: './src/index',
  target: 'web',
  output: {
    path: __dirname + '/static',
    publicPath: '/rez/',
    filename: 'bundle.js',
  },
  devServer: { contentBase: '/static' },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /(node_modules|dev-tools)/, use: ['babel-loader'] },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }),
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          { loader: 'url-loader', options: { limit: 10000, mimetype: 'image/svg+xml' } },
        ],
      },
      {
        test: /\.png$/,
        use: [
          { loader: 'url-loader', options: { mimetype: 'image/png' } },
        ],
      },
      {
        test: /\.wav$/,
        use: [
          { loader: 'url-loader', options: {mimetype: 'audio/wav'} },
        ],
      },
    ],
  },
};
