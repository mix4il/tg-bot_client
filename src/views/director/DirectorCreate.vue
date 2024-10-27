<template>
  <div>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="ФИО">
        <el-input v-model="form.fio" />
      </el-form-item>
      <!--      <el-form-item label="Департамент">-->
      <!--        <el-select-->
      <!--            v-model="form.department"-->
      <!--            placeholder="Select"-->
      <!--            size="large"-->
      <!--            style="width: 240px"-->
      <!--        >-->
      <!--          <el-option-->
      <!--              v-for="item in optionsDepart"-->
      <!--              :key="item.key"-->
      <!--              :label="item.label"-->
      <!--              :value="item.key"-->
      <!--          />-->
      <!--        </el-select>-->
      <!--      </el-form-item>-->
      <el-form-item >
        <el-button type="primary" :disabled="isPending" @click="onSubmit">Создать</el-button>
        <el-button @click="onCancel">Отмена</el-button>
      </el-form-item>

    </el-form>
  </div>

</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { useMutation } from '@tanstack/vue-query'
import {useRouter} from "vue-router";
import {fetchCreateDirectors} from "@/shared/api/fetch";
const router=useRouter()
const form = reactive({
  fio: ''
})

const { isPending, mutate } = useMutation({
  mutationFn: fetchCreateDirectors,
  onSuccess: (data, variables, context) => {
    onCancel()
  },
})

const onSubmit =  () => {
  //TODO валидации
   mutate(form)
}
const onCancel =  () => {
  router.push({name: 'Directors'})
}
</script>