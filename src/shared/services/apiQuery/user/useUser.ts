import {useQuery} from "@tanstack/vue-query";
import {apiService} from "@/shared/services";

export const useUser = (id: string) => {
    const {userService} = apiService

    return useQuery({
        queryKey: ['user', id],
        queryFn: () => userService.getUser(id)
    })
}