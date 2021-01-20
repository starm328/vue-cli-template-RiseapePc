/*
 * @Descripttion: 
 * @version: 0.1.0
 * @Author: wjh@3651it.com
 * @Date: 2020-06-03 13:28:36
 * @LastEditors: starm
 * @LastEditTime: 2021-01-20 14:55:28
 */ 

export const baseUrl = location.protocol + '//test.com'  //项目域名

const environment = process.env.NODE_ENV === 'production' ? 'pro' : 'dev' //dev开发环境  pro 生产环境
let exports = {}
if(environment === 'dev'){
  exports = {
    proxyBaseUrl:'/api',
  }
}else if(environment === 'pro'){
  exports = {
    proxyBaseUrl:location.protocol + '//pai.test.com',
  }
}
export default exports