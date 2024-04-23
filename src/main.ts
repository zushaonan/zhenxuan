import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 导入svg
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import glio_Component from '@/components'
import App from '@/App.vue'
// 引入全局样式
import '@/style/index.scss'
const app = createApp(App)
// 使用注册全局组件插件
app.use(glio_Component)
app.use(ElementPlus, {
    locale: zhCn,
})
app.mount('#app')
