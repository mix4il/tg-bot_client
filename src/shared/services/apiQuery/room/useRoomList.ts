import {useQuery} from "@tanstack/vue-query";
import {apiService} from "@/shared/services";

export const useRoomList = () => {
    const {roomService} = apiService

    return useQuery({
        queryKey: ['rooms'],
        queryFn: async () => await roomService.getRooms()
    })
}