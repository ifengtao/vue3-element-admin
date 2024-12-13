import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 1. 安装路由插件
import router from '@/router/index'
// 2. 安装状态管理插件
import store from '@/store/index'
// 3. 安装 Element Plus 插件
// 3.1 导入 Element Plus 样式
// import 'element-plus/lib/theme-chalk/index.css'


createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
