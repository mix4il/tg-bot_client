import {useQuery} from "@tanstack/vue-query";
import {apiService} from "@/shared/services";

export const useDirector = (idDirector: string) => {
    const { directorService } = apiService

    return useQuery({
        queryKey: ['director', idDirector],
        queryFn: async () => await directorService.getDirector(idDirector),
    });
}