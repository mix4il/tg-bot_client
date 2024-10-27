import {HttpService} from "@/shared/services/http";

export class TaskService {
    getTasks() {
        return HttpService.get('/tasks')
    }
}