import axios from "axios";
const ADDRESS=`http://${process.env.VITE_APP_API}:${process.env.VITE_APP_API_PORT}/api`
export const fetchUpdateDirector = (director: Director) => {
    console.log(director)
    axios.patch<{}, Director>(`${ADDRESS}/director/${director.id}`, director)
}
export const fetchGetDirector = async (id: string) =>  await axios.get<{}, {data: Director}>(`${ADDRESS}/director/${id}`)
export const fetchGetDirectors =  () =>  axios.get<{}, Director[]>(`${ADDRESS}/director`)

export const fetchCreateDirectors =  (director: Omit<Director, 'id'>) =>  axios.post(`${ADDRESS}/director`, director)
export const  fetchGetUser =  (id: string) =>  axios.get<{  }, {data}>(`${ADDRESS}/users/${id}`);

export const  fetchUpdateUser = (user) => axios.patch(`${ADDRESS}/users/${user.chatId}`, user)

export const fetchGetUsers = () =>   axios.get(`${ADDRESS}/users`);

export const  fetchAnswerWaiting =  ({isResolve, chatId}:{isResolve: boolean, chatId: string, valueRole: 'USER' | 'ADMIN'}) => axios.delete(`
${ADDRESS}/auth-waiting/${
    isResolve ? 'resolve': 'reject'}-${
    valueRole==='ADMIN'?'admin': 'user'}/${chatId}`)

export const fetchGetWaiting = () =>   axios.get(`${ADDRESS}/auth-waiting`);

export const fetchGetTasks = () =>   axios.get(`${ADDRESS}/tasks`)

export const fetchGetRooms =  () =>  axios.get(`${ADDRESS}/rooms`)
export const fetchCreateRooms  =  (room: Omit<Room, 'id'>) =>  axios.post(`${ADDRESS}/rooms`, room)
export const fetchUpdateRooms  =  (room: Room) =>  axios.patch(`${ADDRESS}/rooms/${room.id}`, room)
export const fetchGetRoom = async (id: string) =>  await axios.get<{  }, {data:Room}>(`${ADDRESS}/rooms/${id}`)
