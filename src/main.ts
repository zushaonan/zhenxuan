import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 导入svg
import 'virtual:svg-icons-register'
import App from '@/App.vue'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
app.mount('#app')
