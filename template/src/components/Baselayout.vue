<!--
 * @Descripttion: 
 * @version: 0.1.0
 * @Author: starmbest@qq.com
 * @Date: 2020-12-30 14:50:11
 * @LastEditors: starm
 * @LastEditTime: 2021-01-20 16:11:06
-->
<template>
<el-container>
  <el-header height="67px">
    <div class="logo">test</div>
  </el-header>
  <el-main>
    <keep-alive include="notice">
      <router-view></router-view>
    </keep-alive>
  </el-main>
</el-container>

</template>
<script>
  export default {
    data() {
      return {
        
      }
    },
    mounted(){
    },
    methods:{
     
    }
  }
</script>
<style lang="less" scoped>
  .el-header {
    background-color: #474c5c;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 3000;
    .logo{
      font-size:28px;
      font-weight: bold;
      color:#fff;
      text-indent: 18px;
    }
      
    
  }
  .el-main{
    background:#fff;
    padding:0;
    margin:20px;
    border:1px solid #ccc;
    overflow: auto;
  }
</style>