import {useMutation, useQueryClient} from "@tanstack/vue-query";
import {apiService} from "@/shared/services";

export const useAnswerWaitingUser = () => {
    const queryClient = useQueryClient()
    const {waitUserService} = apiService

    return useMutation({
        mutationKey: ['answerWaitingUser'],
        mutationFn: async (options) => await waitUserService.answerWaiting(options),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['waiting-users']})
        }
    })
}