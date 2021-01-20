/*
 * @Descripttion: 
 * @version: 0.1.0
 * @Author: wjh@3651it.com
 * @Date: 2020-06-03 11:10:09
 * @LastEditors: starm
 * @LastEditTime: 2021-01-20 15:30:21
 */ 
const path = require('path')
module.exports = {
  publicPath: './',
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://192.168.3.31:9999',
        // target: 'http://lapi.3651it.com',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': ''
        }
      } 
    }
  },
  productionSourceMap: false,
  // 全局引入less主题变量
  pluginOptions: {
      "style-resources-loader": {
          preProcessor: "less",
          patterns: [path.resolve(__dirname, "src/theme/main.less")]
      },
  },
   
 }