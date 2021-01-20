/*
 * @Descripttion:  基础接口和员工的接口
 * @version: 0.1.0
 * @Author: wjh@3651it.com
 * @Date: 2020-06-04 13:19:18
 * @LastEditors: starm
 * @LastEditTime: 2021-01-20 14:55:02
 */ 
import config from './config' // 基础路径
import service from './service' //封装的axios
 


// 上传图片
export const Upload = (data)=> service({
  url: `${config.proxyBaseUrl}/user/upload`,
  method: 'POST',
  data: data,
  headers:{
    authorization:localStorage.getItem('authorization')
  },
})
 