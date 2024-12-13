import { createApp } from 'vue'
import App from './App.vue'

// 1. 安装路由插件
import router from '@/router/index'
// 2. 安装状态管理插件
import store from '@/store/index'


createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
