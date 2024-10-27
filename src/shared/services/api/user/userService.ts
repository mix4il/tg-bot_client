import {HttpService} from "@/shared/services/http";
import type {UserModel} from "./user.model";

export class UserService {
    getUser(id: string) {
        return HttpService.get<{}, UserModel>(`/users/${id}`)
    }

    updateUser(user: UserModel) {
        return HttpService.patch<{}, UserModel>(`/users/${user.chatId}`, user)
    }

    getUsers() {
        return HttpService.get<{}, UserModel[]>('/users')
    }
}
