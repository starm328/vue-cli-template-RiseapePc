/*
 * @Descripttion: 
 * @version: 0.1.0
 * @Author: wjh@3651it.com
 * @Date: 2020-06-03 11:01:52
 * @LastEditors: starm
 * @LastEditTime: 2021-01-14 17:00:45
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
 
// 解决多次点击重复路由报错
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: 'test',
    component: resolve => require(['../components/Baselayout.vue'], resolve),
    meta: {
      title: '首页'
    },
    children:[
      {
        path: '',
        name: 'test',
        component: resolve => require(['../views/test/Index.vue'], resolve),
        meta: {
          title: 'test',
        },
      }
    ]
  },
  
  // 错误页面
  {
    path: '/exception',
    name: 'exception',
    component: resolve => require(['../views/exception/Index.vue'], resolve),
  },
  
]

const router = new VueRouter({
  routes
})


// 路由拦截
router.beforeEach((to, form, next) => {
  /*路由发生改变修改页面的title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (!to.name) {
    next({
      path: '/exception',
      query: { type: '404' } // 传递参数，以供登录成功回到当前页面
    })
  }
  next()
})

export default router
