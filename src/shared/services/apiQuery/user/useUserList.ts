import {useQuery} from "@tanstack/vue-query";
import {apiService} from "@/shared/services";

export const useUserList = () => {
    const {userService} = apiService

    return useQuery({
        queryKey: ['users'],
        queryFn: async () => await userService.getUsers()
    })
}