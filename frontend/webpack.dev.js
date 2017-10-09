module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    inline: true,
    watchOptions: {
      poll: 3000
    }
  },
  devtool: 'source-map'
};