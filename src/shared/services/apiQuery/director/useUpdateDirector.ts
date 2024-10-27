import {apiService, DirectorModel} from "@/shared/services";
import {useQueryClient, useMutation} from "@tanstack/vue-query";

export const useUpdateDirector = () => {
    const {directorService} = apiService;
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ['director/update'],
        mutationFn: async (director: DirectorModel) => await directorService.updateDirector(director),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['directorList']})
        },
    })
}