module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 5002,
    hot: true,
    inline: true,
    watchOptions: {
      poll: true
    }
  },
  devtool: 'source-map'
};