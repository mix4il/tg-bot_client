<template>
  <div>
    <el-form v-if="user" :model="user" label-width="auto" style="max-width: 600px">
      <el-form-item label="ФИО">
        <el-input v-model="user.name" />
      </el-form-item>
      <el-form-item label="Директор">
        <el-select
            :model-value="user.director.fio"
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
import {useMutation, useQuery} from '@tanstack/vue-query';
import {useRoute, useRouter} from "vue-router";
import {watch, ref, computed} from "vue";
import {cloneDeep} from "lodash";
import {fetchUpdateUser} from "@/shared/api/fetch";
import Director from "@/views/director/DirectorEdit.vue";
import {useDirectorList} from "@/shared/services/apiQuery/director";
import type {DirectorModel} from "@/shared/services";
import {useUser} from "@/shared/services/apiQuery/user";

const router = useRouter()
const route = useRoute()

const { data: user } = useUser(route.params.id)
const userFormData = ref({
  id: '',
  name: '',
  director: null,
})

const { isPending, error: errorUpdate, mutate } = useMutation({
  mutationFn: fetchUpdateUser,
  onSuccess: (data, variables, context) => {
    onCancel()
  },
})

const handlerDirector = (director: Director) => {
  user.value.idDirector = director.id
  user.value.director = director
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
  if (user.value) {
    mutate(user.value)
  }
}
const onCancel =  () => {
  router.push({name: 'Users'})
}
watch(user, (newData) => {
  userFormData.value = cloneDeep(newData.data);
});
</script>