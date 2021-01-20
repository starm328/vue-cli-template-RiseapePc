/*
 * @Descripttion: 
 * @version: 0.1.0
 * @Author: wjh@3651it.com
 * @Date: 2020-06-09 09:54:05
 * @LastEditors: starm
 * @LastEditTime: 2021-01-20 14:54:45
 */ 
const Qs = require('qs')
import {Groupget,Upload} from '@/axios/ajax'

import {Loading,Message} from 'element-ui' 
//  计算年月日
export const getDate = (date) =>{
  var yy = new Date(date).getFullYear()
  var mm = String(new Date(date).getMonth() +1).length > 1 ? (new Date(date).getMonth() +1): ('0' + (new Date(date).getMonth() +1))
  var dd = String(new Date(date).getDate()).length > 1 ? (new Date(date).getDate()): ('0' + (new Date(date).getDate()))
  return date && yy +'-' + mm + '-' + dd
}
//  计算时分秒
export const getTime = (date) =>{
  var HH = new Date(date).getHours()
  var MM = String(new Date(date).getMinutes() +1).length > 1 ? (new Date(date).getMinutes() +1): ('0' + (new Date(date).getMinutes() +1))
  var SS = String(new Date(date).getSeconds()).length > 1 ? (new Date(date).getSeconds()): ('0' + (new Date(date).getSeconds()))
  return date && HH +':' + MM + ':' + SS
}

// 上传图片
export const setUpload = (params) => {
  return new Promise((resolve) => {
    const file = params.file,
      fileType = file.type,
      isImage = fileType.indexOf("image") != -1,
      isLt2M = file.size / 1024 / 1024 < 2;
    // 这里常规检验，看项目需求而定
    if (!isImage) {
      Message.error("只能上传图片格式png、jpg、gif!");
      return;
    } 
    if (!isLt2M) {
      Message.error("只能上传图片大小小于2M");
      return;
    }
    // 根据后台需求数据格式
    const form = new FormData();
    // 文件对象
    form.append("file", file);
    // 请求时添加特定属性，所以要用自己方法覆盖默认的action
    // form.append("clientType", 'xxx');
    // 项目封装的请求方法，下面做简单介绍
    const loading =  Loading.service({
      lock: true,
      text: '上传中',
      spinner: 'el-icon-loading',
      target: document.getElementsByClassName('el-upload')[0],
      background: 'rgba(255, 255, 255, 0.7)'
    })
    Upload(form).then(e => {
      loading.close()
      if (e.data.code == 1) {
        resolve(e.data.data)
      } else {
        Message({
          message: e.data.msg,
          type: 'error'
        })
      }
    }).catch(err => {
      loading.close()
      Message({
        message: err,
        type: 'error'
      })
    })
  })
}