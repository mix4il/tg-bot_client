import {DirectorService} from "@/shared/services/api/director";
import {RoomService} from "@/shared/services/api/room";
import {TaskService} from "@/shared/services/api/task";
import {UserService} from "@/shared/services/api/user";
import {WaitUserService} from "@/shared/services/api/waitAuth";

class ApiService {
    directorService: DirectorService
    roomService: RoomService
    taskService: TaskService
    userService: UserService
    waitUserService: WaitUserService
    constructor() {
        this.directorService = new DirectorService()
        this.roomService = new RoomService()
        this.taskService = new TaskService()
        this.userService = new UserService()
        this.waitUserService = new WaitUserService()
    }
}

export const apiService = new ApiService()
