<template>
    <el-container  class="layout-container-demo" :class="{'layout-container-demo-mobile': isMobile}">
      <menu-navbar v-if="!isMobile"/>
      <header v-else class="header flex gap-1">
        <el-button>Открыть</el-button>
        <div class="">Header</div>
      </header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
</template>
<script setup  lang="ts">
import MenuNavbar from "@/widgets/navbarMain/menuNavbar/menuNavbar.vue";
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
.layout-container-demo {
  width: 100%;
}

.layout-container-demo-mobile {
  margin-top: 40px;
}

.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.header {
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;

  height: 40px;
}

</style>
