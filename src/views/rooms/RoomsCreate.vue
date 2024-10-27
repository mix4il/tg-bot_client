<template>
  <div>
    <el-form :model="formData" label-width="auto" style="max-width: 600px">
      <el-form-item label="Название">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="Директор">
        <el-select
            v-model="formData.director"
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
      <el-form-item >
        <el-button type="primary" :disabled="isPending" @click="onSubmit">Создать</el-button>
        <el-button @click="onCancel">Отмена</el-button>
      </el-form-item>

    </el-form>
  </div>

</template>
<script setup lang="ts">
import { reactive } from 'vue'
import {useRouter} from "vue-router";
import {useDirectorList} from "@/shared/services/apiQuery/director";
import {useCreateRoom} from "@/shared/services/apiQuery/room";

const router = useRouter()

const formData = reactive({
  name: '',
  director: []
})

const { isPending, mutate } = useCreateRoom()
const { data: directors, } = useDirectorList()

const onSubmit = () => {
  //TODO валидации
   mutate(formData, {
     onSuccess: () => {
       onCancel()
     }
   })
}
const onCancel =  () => {
  router.push({name: 'Rooms'})
}
</script>