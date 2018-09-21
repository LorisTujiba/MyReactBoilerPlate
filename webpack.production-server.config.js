const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

var serverConfig = {
  entry: ['babel-polyfill','./src/server.js'],
  target: 'node',
  externals: nodeExternals(),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
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
      __isBrowser__: "false"
    })
  ]
};

module.exports = [serverConfig]
