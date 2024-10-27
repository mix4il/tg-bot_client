<template>
  <el-drawer>
    <slot></slot>
  </el-drawer>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>

</style>