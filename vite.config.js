import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
// Element Plus 按需自动导入
// https://element-plus.org/zh-CN/guide/quickstart.html
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

import { resolve } from 'path'
const pathSrc = resolve(__dirname, "src");
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关的函数
      imports: ["vue", "@vueuse/core", "pinia", "vue-router"],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver({
          importStyle: "sass",
        }),
        IconsResolver({
          // element-plus图标库，其他图标库 https://icon-sets.iconify.design/
          enabledCollections: ["ep"],
        })
      ],
      // 指定自定义组件位置(默认:src/components)
      dirs: ["src/components", "src/**/components"],

    }),
    Icons({
      // 自动安装图标库
      autoInstall: true,
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(pathSrc, "assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
    // Vue 开发工具
    VueDevTools({
      openInEditorHost: `http://localhost:5173`,
    }),
  ],

  // 关闭代码校验
  lintOnSave: false,
  // 解析行为
  resolve: {
    // 别名
    alias: {
      '@': pathSrc
    },
    // 文件扩展名
    extensions: ['.js', '.json', '.vue']
  },
  css: {
    // CSS 预处理器
    preprocessorOptions: {
      // 定义全局 SCSS 变量
      scss: {
        javascriptEnabled: true,
        additionalData: `
            @use "@/styles/variables.scss" as *;
          `,
      },
    },
  },
  // 预加载项目必需的组件
  optimizeDeps: {
    include: [
      "vue",
      "vue-router",
      "pinia",
      "axios",
      "@vueuse/core",
      "path-to-regexp",
      "path-browserify",
      "element-plus/es/components/form/style/index",
      "element-plus/es/components/form-item/style/index",
      "element-plus/es/components/button/style/index",
      "element-plus/es/components/input/style/index",
      "element-plus/es/components/input-number/style/index",
      "element-plus/es/components/switch/style/index",
      "element-plus/es/components/upload/style/index",
      "element-plus/es/components/menu/style/index",
      "element-plus/es/components/col/style/index",
      "element-plus/es/components/icon/style/index",
      "element-plus/es/components/row/style/index",
      "element-plus/es/components/tag/style/index",
      "element-plus/es/components/dialog/style/index",
      "element-plus/es/components/loading/style/index",
      "element-plus/es/components/radio/style/index",
      "element-plus/es/components/radio-group/style/index",
      "element-plus/es/components/popover/style/index",
      "element-plus/es/components/scrollbar/style/index",
      "element-plus/es/components/tooltip/style/index",
      "element-plus/es/components/dropdown/style/index",
      "element-plus/es/components/dropdown-menu/style/index",
      "element-plus/es/components/dropdown-item/style/index",
      "element-plus/es/components/sub-menu/style/index",
      "element-plus/es/components/menu-item/style/index",
      "element-plus/es/components/divider/style/index",
      "element-plus/es/components/card/style/index",
      "element-plus/es/components/link/style/index",
      "element-plus/es/components/breadcrumb/style/index",
      "element-plus/es/components/breadcrumb-item/style/index",
      "element-plus/es/components/table/style/index",
      "element-plus/es/components/tree-select/style/index",
      "element-plus/es/components/table-column/style/index",
      "element-plus/es/components/select/style/index",
      "element-plus/es/components/option/style/index",
      "element-plus/es/components/pagination/style/index",
      "element-plus/es/components/tree/style/index",
      "element-plus/es/components/alert/style/index",
      "element-plus/es/components/radio-button/style/index",
      "element-plus/es/components/checkbox-group/style/index",
      "element-plus/es/components/checkbox/style/index",
      "element-plus/es/components/tabs/style/index",
      "element-plus/es/components/tab-pane/style/index",
      "element-plus/es/components/rate/style/index",
      "element-plus/es/components/date-picker/style/index",
      "element-plus/es/components/notification/style/index",
      "element-plus/es/components/image/style/index",
      "element-plus/es/components/statistic/style/index",
      "element-plus/es/components/watermark/style/index",
      "element-plus/es/components/config-provider/style/index",
      "element-plus/es/components/text/style/index",
      "element-plus/es/components/drawer/style/index",
      "element-plus/es/components/color-picker/style/index",
      "element-plus/es/components/backtop/style/index",
      "element-plus/es/components/message-box/style/index",
      "element-plus/es/components/badge/style/index",
    ],
  }
})
