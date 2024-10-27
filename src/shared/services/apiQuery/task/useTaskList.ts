import {useQuery} from "@tanstack/vue-query";
import {apiService} from "@/shared/services";

export const useTaskList = () => {
    const { taskService } = apiService

    return useQuery({
        queryKey: ['taskList'],
        queryFn: async () => await taskService.getTasks()
    })
}