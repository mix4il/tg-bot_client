<template>
  <div>
    <el-table :data="data?.data" style="width: 100%">
      <el-table-column prop="name" label="Имя" width="180" />
      <el-table-column prop="role.description" label="Роль" width="180" />
      <el-table-column prop="director.fio" label="Директор" width="180" />
      <el-table-column fixed="right" label="Действия" min-width="120">
        <template #default="scope">
          <el-button link type="primary" size="small">
            <router-link :to="{ name: 'User', params: { id: scope.row.chatId} }">Редактировать</router-link>
          </el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>

</template>
<script setup lang="ts">
import {useUserList} from "@/shared/services/apiQuery/user";

const { data } = useUserList()
</script>