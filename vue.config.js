module.exports = {
  outputDir: 'docs',
  baseUrl: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://xxxx/device/', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
