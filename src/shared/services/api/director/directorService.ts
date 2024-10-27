import type {DirectorModel} from "./director.model";
import { HttpService } from "../../http";

export class DirectorService {
    updateDirector(director: DirectorModel) {
        return HttpService.patch<{}, DirectorModel>(`/director/${director.id}`, director)
    }

    getDirector(id: string) {
        return HttpService.get<{}, DirectorModel>(`/director/${id}`)
    }

    getDirectorList() {
        return HttpService.get<{}, DirectorModel[]>('director')
    }

    createDirectors(director: DirectorModel){
        return HttpService.post('/director', director)
    }
}
