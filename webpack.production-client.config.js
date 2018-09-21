const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

var browserConfig = {
  entry: [
    'babel-polyfill',
    './src/client.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'production',
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
  ]
}

module.exports = [browserConfig]
