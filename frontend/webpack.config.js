const merge = require('webpack-merge'),
  path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
  entry: ['./src/App'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: ['ts-loader']
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [require('nib')()]
            }
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html'
  })]
};

module.exports = function (env) {
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig);
};