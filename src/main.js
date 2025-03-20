import { createApp } from 'vue'
import { createPinia } from 'pinia'
// pinia持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import './styles/element/index.scss'
// import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
// 初始化样式
import '@/styles/common.scss'

// 引入懒加载指令插件
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from '@/components'





const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')


