<template>
  <el-aside>
    <el-menu :default-active="activeIndex" @select="handlerClick">
      <el-menu-item index="Rooms">Комнаты</el-menu-item>
      <el-menu-item index="Directors">Директоры</el-menu-item>
      <el-menu-item index="Users">Пользователи</el-menu-item>
      <el-menu-item index="WaitingAuth">Ожидают подтверждения</el-menu-item>
      <el-menu-item index="Tasks">Отчеты</el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router';
const activeIndex = ref('Directors')
const router = useRouter()
const handlerClick = (nameRouter: string) => {
  router.push({name: nameRouter})
}

</script>

<style scoped>

</style>