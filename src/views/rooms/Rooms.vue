<template>
  <div>
    <el-button class="mt-4"><router-link :to="{ name: 'RoomCreate' }">Создать</router-link></el-button>
    <el-table :data="rooms" style="width: 100%">
      <el-table-column prop="name" label="Имя комнаты" width="180" />
      <el-table-column prop="directors" label="Участвующие директоры" width="180" />
      <el-table-column fixed="right" label="Действия" min-width="120">
        <template #default="scope">
          <el-button link type="primary" size="small">
            <router-link :to="{ name: 'Room', params: { id: scope.row?.id} }">Редактировать</router-link>
          </el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>

</template>
<script setup lang="ts">
import {computed} from "vue";
import {useRoomList} from "@/shared/services/apiQuery/room/useRoomList";
import type {DirectorModel, RoomModel} from "@/shared/services";

const { data: roomList } = useRoomList()

const rooms = computed(() => {
  return roomList.value?.data.map((room: RoomModel) => {
    return {
      ...room,
      directors: room.director.map((director: DirectorModel) => director.fio).join('\n'),
    }
  })
})
</script>