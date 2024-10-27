import {useMutation, useQueryClient} from "@tanstack/vue-query";
import {apiService, RoomModel} from "@/shared/services";

export const useUpdateRoom = () => {
    const queryClient = useQueryClient()
    const {roomService} = apiService

    return useMutation({
        mutationKey: ['room/update'],
        mutationFn: async (room: RoomModel) => await roomService.updateRoom(room),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['rooms']})
        }
    })
}