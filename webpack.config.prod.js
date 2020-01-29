import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  mode: 'production',
  entry: './src/index',
  target: 'web',
  output: {
    path: path.join(__dirname, '/static'),
    publicPath: '/rez/',
    filename: 'bundle.js',
  },
  devServer: { contentBase: '/static' },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
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
    ],
  },
};
