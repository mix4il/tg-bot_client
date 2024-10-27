import {RoomModel} from "@/shared/services/api/room/room.model";
import {HttpService} from "@/shared/services/http";

export class RoomService {
    getRooms(id: string) {
        return HttpService.get<{}, RoomModel>(`/rooms`)
    }

    getRoom(idRoom: string) {
        return HttpService.get<{}, RoomModel[]>(`rooms/${idRoom}`)
    }
    updateRoom(room: RoomModel) {
        return HttpService.patch<{}, RoomModel>(`/rooms/${room.id}`, room)
    }

    createRoom(room: RoomModel){
        return HttpService.post('/rooms', room)
    }
}