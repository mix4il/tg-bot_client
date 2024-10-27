<template>
  <div>
    <el-button class="mt-4"><router-link :to="{ name: 'DirectorCreate' }">Создать</router-link></el-button>
    <el-table :data="data?.data" style="width: 100%">
      <el-table-column prop="fio" label="ФИО" width="180" />
<!--      <el-table-column prop="department" label="Департамент" width="180" />-->
      <el-table-column fixed="right" label="Действия" min-width="120">
        <template #default="scope">
          <el-button link type="primary" size="small">
            <router-link :to="{ name: 'DirectorEdit', params: { id: scope.row?.id} }">Редактировать</router-link>
          </el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>

</template>
<script setup lang="ts">
import {useDirectorList} from "@/shared/services/apiQuery/director";

const { data } = useDirectorList()
</script>