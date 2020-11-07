module.exports={
    publicPath : './',
    outputDir: 'dist',
    devServer:{
      port : 8080,
      proxy:{
          '/api' : {
            target: 'http://t.weather.sojson.com',
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
      }
    },
    css : {
        loaderOptions : {
          sass : { // 全局sass
            prependData : `@import "@/style/index.scss";`
          }
        }
      }
}