<!--
 * @Descripttion: 
 * @version: 0.1.0
 * @Author: wjh@3651it.com
 * @Date: 2020-06-03 11:01:52
 * @LastEditors: starm
 * @LastEditTime: 2021-01-20 14:53:27
      佛祖镇楼    BUG辟易

 *           佛曰：
 * 写字楼里写字间，写字间里程序员：
 * 程序人员写程序，又拿程序换酒钱。
 * 酒醒只在网上坐，酒醉还来网下眠；
 * 酒醉酒醒日复日，网上网下年复年。
 * 但愿老死电脑间，不愿鞠躬老板前：
 * 奔驰宝马贵者趣，公交自行程序员。
 * 别人笑我武疯癫，我笑自己命太贱；
 * 不见满街漂亮妹，哪个归得程序员？
--> 
<template>
  <div id="ra-app">
    <router-view   v-if="!loading"/>
  </div>
</template>
<script>
export default {
  data(){
    return {
      loading:false,
    }
  },
  mounted(){
    this.loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    setTimeout(()=>{
      this.loading.close();
      this.loading = false
    },200)
  }
}
</script>
<style lang="less">
@import "./assets/fonts/iconfont.css";
* {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif,;
  padding: 0;
}
a {
  text-decoration: none;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
body,
html {
  background: #eeeeee;
}

#ra-app,
body,
html {
  height: 100%;
  line-height: 1;
}
#ra-app {
  font-size: 14px;
  display: flex;
} 
</style>
