const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

var browserConfig = {
  entry: [
    'webpack/hot/dev-server?reload=true',
    'webpack-hot-middleware/client?reload=true',
    'babel-polyfill',
    './src/client.js'
  ],
  mode: 'development',
  output: {
    // path: path.resolve(__dirname, 'public'),
    // filename: 'bundle.js',
    // publicPath: '/'
    path: '/',
    publicPath: 'http://localhost:3000/scripts/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
        options: {
          name: './images/[hash].[ext]'
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = [browserConfig]
