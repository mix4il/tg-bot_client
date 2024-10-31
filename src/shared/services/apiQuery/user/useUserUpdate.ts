import {useMutation, useQueryClient} from "@tanstack/vue-query";
import {apiService} from "@/shared/services";

export const useUserUpdate = () => {
    const queryClient = useQueryClient()
    const { userService} = apiService

    return useMutation({
        mutationKey: ['user/update'],
        mutationFn: async (user) => {
            await userService.updateUser(user)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['users']})
        }
    })
}