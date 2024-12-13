import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Element Plus 按需自动导入
// https://element-plus.org/zh-CN/guide/quickstart.html
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  // 关闭代码校验
  lintOnSave: false,
  // 解析行为
  resolve: {
    // 别名
    alias: {
      '@': '/src'
    },
    // 文件扩展名
    extensions: ['.js', '.json', '.vue']
  },

})
