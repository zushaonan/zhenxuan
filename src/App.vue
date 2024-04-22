<script setup lang="ts">
import {Plus} from '@element-plus/icons-vue'
</script>

<template>
  <div>
    <el-button type="primary" :icon="Plus"  >添加</el-button>
    <div class="example-pagination-block">
    <div class="example-demonstration">When you have more than 7 pages</div>
    <el-pagination layout="prev, pager, next" :total="1000" />
    <svg>>
      <!-- xlink:href执行用哪一个图标，属性值务必是#icon -->
      <use xlink:href="#icon-phone"></use>
    </svg>
  </div>
  </div>
</template>

<style scoped>

</style>
