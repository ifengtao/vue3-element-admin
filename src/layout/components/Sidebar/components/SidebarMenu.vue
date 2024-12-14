<!-- 左侧边菜单 -->
<template>
  <el-menu ref="menuRef" :default-active="currentRoute.path" :collapse="!appStore.sidebar.opened"
    :background-color="variables['menu-background']" :text-color="variables['menu-text']"
    :active-text-color="variables['menu-active-text']" :unique-opened="false" :collapse-transition="false" :mode="mode"
    @open="handleOpen" @close="handleClose">
    <SidebarMenuItem v-for="route in menuList" :key="route.path" :item="route" :base-path="resolvePath(route.path)" />
  </el-menu>
</template>

<script setup>
import { useAppStore } from "@/store";
import { isExternal } from "@/utils/index";
import variables from "@/styles/variables.module.scss";

const menuRef = ref();
const appStore = useAppStore();
const currentRoute = useRoute();
const props = defineProps({
  menuList: {
    type: Array,
    required: true,
    default: [],
  },
  basePath: {
    type: String,
    required: true,
    default: ""
  },
});
const mode = computed(() => {
  return appStore.layout === "top" ? "horizontal" : "vertical";
});

/**
 * 解析路径
 *
 * @param routePath 路由路径 /user
 */
function resolvePath(routePath) {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }

  // 完整绝对路径 = 父级路径(/system) + 路由路径(/user)
  // const fullPath = path.resolve(props.basePath + "", routePath + "");
  const fullPath = props.basePath + "/" + routePath;
  return fullPath;
}
/**
 * 修复切换到horizontal时，展开的菜单显示问题，切换时关闭全部菜单
 */
const menuIndexArray = ref([]);
const handleOpen = (index, keyPath) => {
  menuIndexArray.value.push(index);
};
const handleClose = (index) => {
  menuIndexArray.value = menuIndexArray.value.filter((item) => item !== index);
};
watch(
  () => mode.value,
  () => {
    if (mode.value === "horizontal") {
      menuIndexArray.value.map((item) => menuRef?.value.close(item));
    }
  }
);
</script>
