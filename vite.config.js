import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

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
