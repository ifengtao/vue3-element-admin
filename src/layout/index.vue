<template>
  <div class="width:100%;height:100%" :class="classObj">
    <!-- 公用侧边栏 -->
    <Sidebar class="sidebar-container " />
    <!-- 左侧布局 -->
    <div class="main-container">
      <div>
        <!-- 顶部导航条 -->
        <NavBar />
        <!-- 页签 -->
        <TagsView />
      </div>
      <!-- 主体 -->
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store";
const appStore = useAppStore();
const classObj = computed(() => ({
  hideSidebar: !appStore.sidebar.opened,
  openSidebar: appStore.sidebar.opened,
  "layout-left": true,
}));
</script>

<style lang="scss" scoped>
.sidebar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: $sidebar-width;
  background-color: $menu-background;
  transition: width 0.28s;

  :deep(.el-menu) {
    border: none;
  }
}

.main-container {
  position: relative;
  height: 100%;
  margin-left: $sidebar-width;
  overflow-y: auto;
  transition: margin-left 0.28s;
}

.hideSidebar {
  .main-container {
    margin-left: $sidebar-width-collapsed;
  }
}

.layout-left.hideSidebar {
  .sidebar-container {
    width: $sidebar-width-collapsed !important;
  }

  .main-container {
    margin-left: $sidebar-width-collapsed;
  }
}
</style>
