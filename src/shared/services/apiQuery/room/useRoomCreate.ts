import {useMutation, useQueryClient} from "@tanstack/vue-query";
import {apiService, RoomModel} from "@/shared/services";

export const useCreateRoom = () => {
    const queryClient = useQueryClient()
    const {roomService} = apiService

    return useMutation({
        mutationKey: ['room/create'],
        mutationFn: async (room: RoomModel) => await roomService.createRoom(room),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['rooms']})
        }
    })
}