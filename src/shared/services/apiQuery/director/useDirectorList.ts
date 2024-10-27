import {useQuery} from "@tanstack/vue-query";
import {apiService} from "@/shared/services";

export const useDirectorList = () => {
    const { directorService } = apiService

    return useQuery({
        queryKey: ['directorList'],
        queryFn: async () => await directorService.getDirectorList()
    })
}