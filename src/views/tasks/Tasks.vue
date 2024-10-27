<template>
  <div>
    <el-table v-if="tasks" :data="tasks" style="width: 100%">
      <el-table-column prop="number" label="Номер задачи"/>
      <el-table-column prop="room.name" label="Комната"/>
      <el-table-column prop="middleVoice" label="Средний голос"  />
      <el-table-column prop="createdAt" label="Дата" />
      <el-table-column prop="participant" label="Участники"/>
    </el-table>
  </div>

</template>
<script setup lang="ts">
import {computed} from "vue";
import {useTaskList} from "@/shared/services/apiQuery/task";

const { data } = useTaskList()

const tasks = computed(() => {
  return data.value?.data?.map((task) => ({
    ...task,
    number: `https://ihelp.rt.ru/browse/${task.number}`,
    participant: task.participant.map(p => `${p.user.name} - ${p.voice}`).join('\n')}))
})
</script>