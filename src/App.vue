<template>
  <el-config-provider :locale="locale" :size="size">
    <!-- 开启水印 -->
    <el-watermark v-if="enable" :waterMark>
      <router-view />
    </el-watermark>
    <!-- 关闭水印 -->
    <router-view v-else />
  </el-config-provider>
</template>

<script setup>
import { useAppStore } from '@/store'
const { locale, size, waterMark: { enable, ...waterMark } } = useAppStore();
</script>
