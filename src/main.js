import { createApp } from 'vue'
import App from './App.vue'

// 1. 安装路由插件
import router from '@/router/index'
// 2. 安装状态管理插件
import store from '@/store/index'

// 3. 样式
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/index.scss";

// 4. 注册所有图标
import "virtual:svg-icons-register";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App);
app.use(router).use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.mount('#app')