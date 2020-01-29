import webpack from 'webpack';
import path from 'path';

export default {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index',
  ],
  target: 'web',
  output: {
    path: path.join(__dirname, '/static'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './src',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dev-tools)/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'sass-loader', options: { sourceMap: true }},
        ],
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
