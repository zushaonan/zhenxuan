<template>
    <svg :style="{width,height}">
        <use :xlink:href="prefix+name" :fill="color"></use>
    </svg>
</template>
<script setup lang="ts">
defineProps({
    // 图标的前缀
    prefix:{
        type:String,
        default:'#icon-'
    },
    // 图标名称
    name:String,
    // 接受父组件传过来的颜色值
    color:{
        type:String,
        default:''
    },
    // 接受父组件传过来的宽
    width:{
        type:String,
        default:'16px'
    },
    // 接受父组件传过来的高
    height:{
        type:String,
        default:'16px'
    }
})
</script>
<style scoped>
</style>