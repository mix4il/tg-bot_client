<template>
  <div>
    <el-form v-if="room" :model="roomFormData" @submit.prevent="onSubmit" label-width="auto" style="max-width: 600px">
      <el-form-item label="Название" prop="name">
        <el-input v-model="roomFormData.name" />
      </el-form-item>
      <el-form-item label="Директор" prop="director">
        <el-select
            v-model="roomFormData.director"
            value-key="id"
            multiple
            placeholder="Select"
            style="width: 240px"
        >
          <template v-if="directors?.data?.length">
            <el-option
                v-for="item in directors.data"
                :key="item.id"
                :label="item.fio"
                :value="item"
            />
          </template>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="isPending" @click="onSubmit">Сохранить</el-button>
        <el-button @click="onCancel">Отмена</el-button>
      </el-form-item>

    </el-form>
  </div>

</template>
<script setup lang="ts">
import {onUpdated, ref, watch} from 'vue'
import { useRouter } from "vue-router";
import {useDirectorList} from "@/shared/services/apiQuery/director";
import {useRoom} from "@/shared/services/apiQuery/room/useRoom";
import {useUpdateRoom} from "@/shared/services/apiQuery/room";

const router = useRouter()
const props = defineProps<{
  id: string
}>()

const { data: room } = useRoom(props.id)
const { isPending, mutate } = useUpdateRoom()
const { data: directors } = useDirectorList()

const roomFormData = ref({
  id: '',
  name: '',
  director: [],
})

const onSubmit =  () => {
  //TODO валидации
  mutate(roomFormData.value, {
    onSuccess: () => {
      onCancel()
    }
  })
}

const onCancel =  () => {
  router.push({name: 'пs'})
}

watch(room, (newData) => {
  roomFormData.value = {
    id: room?.value?.data?.id,
    name: room?.value?.data?.name,
    director: room?.value?.data?.director,
  }
});
</script>