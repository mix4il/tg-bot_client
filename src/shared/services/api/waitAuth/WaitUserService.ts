import {HttpService} from "@/shared/services/http";

export class WaitUserService {
    answerWaiting({isResolve, chatId, valueRole}:{isResolve: boolean, chatId: string, valueRole: 'USER' | 'ADMIN'}) {
        const typeAnswer = `${isResolve ? 'resolve': 'reject'}-${valueRole==='ADMIN'?'admin': 'user'}/${chatId}`
        return HttpService.delete('/auth-waiting/' + typeAnswer)
    }

    getWaitingUsers() {
        return HttpService.get('/auth-waiting')
    }
}

//
// await axios.delete(`
// http://localhost:3000/api/auth-waiting/${
//     isResolve ? 'resolve': 'reject'}-${
//     valueRole==='ADMIN'?'admin': 'user'}/${chatId}`)
// },

