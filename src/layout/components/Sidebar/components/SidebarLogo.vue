<template>
  <div class="logo-container">
    <transition enter-active-class="animate__animated animate__fadeInLeft">
      <router-link class="wh-full flex-center" to="/">
        <img :src="logo" class="logo-image" />
        <span class="logo-title">
          {{ appStore.title }}
        </span>
      </router-link>
    </transition>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store";
import logo from "@/assets/logo.png";
const appStore = useAppStore();
</script>

<style lang="scss" scoped>
.logo-container {
  width: 100%;
  height: $navbar-height;
  line-height: $navbar-height;
  background-color: $sidebar-logo-background;
  text-align: center;

  .logo-image {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .logo-title {
    flex-shrink: 0;
    /* 防止容器在空间不足时缩小 */
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    color: white;
  }
}
</style>
