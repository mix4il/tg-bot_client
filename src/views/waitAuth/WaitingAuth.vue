<template>
  <div>
    <el-table :data="data?.data" style="width: 100%">
      <el-table-column prop="name" label="Имя" width="180" />
      <el-table-column prop="role.description" label="Роль" width="180" />
      <el-table-column prop="director.fio" label="Директор" width="180" />
      <el-table-column fixed="right" label="Operations" min-width="120">
        <template #default="scope">
          <el-button @click="handlerResolve(scope.row)" link type="primary" size="small" >
            Принять
          </el-button>
          <el-button @click="handlerReject(scope.row)" link type="primary" size="small">
            Отклонить
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>
<script setup lang="ts">
import {useAnswerWaitingUser, useWaitingUsers} from "@/shared/services/apiQuery/waitAuth";

const { data } = useWaitingUsers()

// const { mutate } = useMutation({
//   mutationFn: async ({isResolve, chatId, valueRole}:{isResolve: boolean, chatId: string, valueRole:'USER' | 'ADMIN'}) => {
//     await axios.delete(`
// http://localhost:3000/api/auth-waiting/${
//         isResolve ? 'resolve': 'reject'}-${
//         valueRole==='ADMIN'?'admin': 'user'}/${chatId}`)
//   },
//   // onSuccess: () => {
//   //   refetch()
//   // },
// })

const {mutate} = useAnswerWaitingUser()

const handlerReject = async ({chatId,valueRole}:{chatId: string, valueRole: 'USER' | 'ADMIN'}) => {
  mutate({isResolve: false, chatId, valueRole})
}
const handlerResolve = async ({chatId,valueRole}:{chatId: string, valueRole: 'USER' | 'ADMIN'}) => {
  mutate({isResolve: true, chatId, valueRole})
}
</script>