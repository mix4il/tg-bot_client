<template>
  <div>
    <el-form v-if="userFormData" :model="userFormData" label-width="auto" style="max-width: 600px">
      <el-form-item label="ФИО" prop="name">
        <el-input v-model="userFormData.name" />
      </el-form-item>
      <el-form-item label="Директор" prop="fio">
        <el-select
            :model-value="userFormData.director?.fio ?? ''"
            placeholder="Select"
            size="large"
            style="width: 240px"
            @change="handlerDirector"
        >
          <el-option
              v-for="item in getDirectors"
              :key="item.label"
              :label="item.label"
              :value="item"
          />
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
import {useRoute, useRouter} from "vue-router";
import {watch, computed, reactive} from "vue";
import Director from "@/views/director/DirectorEdit.vue";
import {useDirectorList} from "@/shared/services/apiQuery/director";
import type {DirectorModel} from "@/shared/services";
import {useUser} from "@/shared/services/apiQuery/user";
import {useUserUpdate} from "@/shared/services/apiQuery/user/useUserUpdate";

type userFormModel = {id: string, name: string, idDirector: string, director: DirectorModel | null}

const router = useRouter()
const route = useRoute()

const { data: user } = useUser(String(route.params.id))

let userFormData: userFormModel = reactive({
  id: '',
  name: '',
  idDirector: '',
  director: null,
})

const { isPending, mutate } = useUserUpdate()

const handlerDirector = (director: Director) => {
  userFormData.idDirector = director.id
  userFormData.director = director
}

const { data: directors, } = useDirectorList()

const getDirectors = computed(() => {
  return directors.value?.data?.map((director: DirectorModel) => ({
    ...director,
    key: director.id,
    label: director.fio
  }))
})
const onSubmit =  () => {
  //TODO валидации
  if (userFormData) {
    mutate(userFormData,{
      onSuccess: () => {
        onCancel()
      }
    })
  }
}
const onCancel =  () => {
  router.push({name: 'Users'})
}
watch(user, (newData) => {
  Object.keys(newData.data).forEach((key) => {
    userFormData[key] = newData.data[key]
  })
});
</script>