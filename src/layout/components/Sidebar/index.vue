<template>
  <div class="has-logo">
    <SidebarLogo />
    <el-scrollbar>
      <SidebarMenu :menu-list="MenuData" base-path="/" />
    </el-scrollbar>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store";
const appStore = useAppStore();
import MenuData from './menuData.js'
</script>

<style lang="scss" scoped>
.has-logo {
  .el-scrollbar {
    height: calc(100vh - $navbar-height);
  }
}
</style>
