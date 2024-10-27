import {useQuery} from "@tanstack/vue-query";
import {apiService} from "@/shared/services";

export const useWaitingUsers = () => {
    const {waitUserService} = apiService

    return useQuery({
        queryKey: ['waiting-users'],
        queryFn: async () =>  await waitUserService.getWaitingUsers()
    })
}
