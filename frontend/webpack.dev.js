module.exports = {
  devServer: {
    public: 'localhost:5001',
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    inline: true,
    watchOptions: {
      poll: true
    }
  },
  devtool: 'source-map'
};