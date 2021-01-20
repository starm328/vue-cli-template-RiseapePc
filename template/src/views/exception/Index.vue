<!--
 * @Descripttion: 404页面
 * @version: 0.1.0
 * @Author: wjh@3651it.com
 * @Date: 2020-06-03 14:29:41
 * @LastEditors: starm
 * @LastEditTime: 2020-07-07 15:19:23
--> 
<template>
  <div  >
    <excepotion-404 v-if="$route.query.type == 404"></excepotion-404>
    <excepotion-401 v-if="$route.query.type == 401"></excepotion-401>
    <excepotion-500 v-if="$route.query.type == 500"></excepotion-500>
  </div>
   
</template>
<script>
import Excepotion404 from './404.vue'
import Excepotion401 from './401.vue'
import Excepotion500 from './500.vue'
export default {
  components:{
    'excepotion-404':Excepotion404,
    'excepotion-401':Excepotion401,
    'excepotion-500':Excepotion500
  },
  mounted(){
    document.title = '乐平台' + this.$route.query.type
  }
}
</script>
<style lang="less" scoped>
 
</style>
