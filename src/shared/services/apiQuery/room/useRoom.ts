import {useQuery} from "@tanstack/vue-query";
import {apiService} from "@/shared/services";

export const useRoom = (id: string) => {
    const {roomService} = apiService

    return useQuery({
        queryKey: ['room', id],
        queryFn: async () => await roomService.getRoom(id)
    })
}