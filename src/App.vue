<script setup lang="ts">
import {Plus} from '@element-plus/icons-vue'
import { onMounted } from 'vue';
import request from './utils/request';
onMounted(()=>{
    request({
      url:"/user/login",
      method:'post',
      data:{
        username: 'admin',
        password: '111111',
      }
    }).then(res=>{
      console.log(res);
      
    })
})
</script>

<template>
  <div>
    <!-- <el-button type="primary" :icon="Plus"  >添加</el-button>
    <div class="example-pagination-block">
    <div class="example-demonstration">When you have more than 7 pages</div>
    <el-pagination layout="prev, pager, next" :total="1000" />
      <SvgIcon name="home" color="red"></SvgIcon>
  </div> -->
  <h1>
    车市
  </h1>
  </div>
</template>

<style scoped lang="scss">
  div{
    h1{
      color: red;
    }
  }
</style>
