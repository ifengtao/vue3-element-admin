<template>
  <div class="hamburger-container" @click="toggleClick">
    <svg-icon class="hamburger" :class="{ 'is-active': isActive }" icon-class="collapse" />
  </div>
</template>
<script setup>
import { useAppStore } from "@/store";

const appStore = useAppStore();
defineProps({
  isActive: {
    required: true,
    type: Boolean,
    default: true,
  },
});

function toggleClick() {
  appStore.toggleSidebar();
}
</script>

<style scoped lang="scss">
.hamburger-container {
  padding-left: 15px;
  padding-right: 15px;
  color: var(--el-text-color-regular);
  display: flex;
  justify-content: center;
  align-items: center;

  .hamburger {
    vertical-align: middle;
    cursor: pointer;
    transform: scaleX(-1);
  }

  .hamburger.is-active {
    transform: scaleX(1);
  }
}
</style>
