<template>
  <div class="navbar-container">
    <!-- 导航栏面包屑 -->
    <div class="flex">
      <hamburger :is-active="appStore.sidebar.opened" @toggle-click="toggleSideBar" />
      <breadcrumb />
    </div>
    <!-- 导航栏右侧 -->
    <NavbarAction />
  </div>
</template>

<script setup>
import { useAppStore } from "@/store";

const appStore = useAppStore();

function toggleSideBar() {
  appStore.toggleSidebar();
}
</script>

<style lang="scss" scoped>
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: var(--el-bg-color);

  height: $navbar-height;
  background: var(--el-bg-color);

  .flex {
    display: flex;
  }

  .is-active {
    transform: scaleX(1);
  }
}
</style>
