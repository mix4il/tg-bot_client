<template>
  <div>
    <el-form v-if="formData" :model="formData" @submit.prevent="onSubmit" label-width="auto" style="max-width: 600px">
      <el-form-item label="ФИО" prop="fio">
        <el-input v-model="formData.fio" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="isPending" @click="onSubmit">Сохранить</el-button>
        <el-button @click="onCancel">Отмена</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>
<script setup lang="ts">
import {useRouter} from "vue-router";
import {watch, ref} from "vue";
import {useDirector} from "@/shared/services/apiQuery/director";
import {useUpdateDirector} from "@/shared/services/apiQuery/director/useUpdateDirector";

const router= useRouter()
const props = defineProps<{
  id: string
}>()

const { data } = useDirector(props.id)

const formData = ref({
  id: '',
  fio: ''
})

const { isPending, mutateAsync: createUser } = useUpdateDirector()

const onSubmit =  async () => {
  //TODO валидации
  await createUser(formData.value, {
    onSuccess: () => {
      onCancel()
  }})
}
const onCancel =  () => {
  router.push({name: 'Directors'})
}

watch(data, (newData) => {
  formData.value = {
    id: data.value.data.id,
    fio: data.value.data.fio
  }
});
</script>