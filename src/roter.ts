import { createWebHistory, createRouter } from 'vue-router'

import Directors from './views/director/Directors.vue'
import DirectorEdit from './views/director/DirectorEdit.vue'
import Home from './views/home/Home.vue'
import DirectorCreate from "./views/director/DirectorCreate.vue";
import Users from './views/users/Users.vue'
import WaitingAuth from "./views/waitAuth/WaitingAuth.vue";
import Tasks from "@/views/tasks/Tasks.vue";
import UserEdit from "@/views/users/UserEdit.vue";
import Rooms from "@/views/rooms/Rooms.vue";
import RoomsCreate from "@/views/rooms/RoomsCreate.vue";
import RoomEdit from "@/views/rooms/RoomEdit.vue";
const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/directors', component: Directors, name: 'Directors' },
    { path: '/director/create', component: DirectorCreate, name: 'DirectorCreate' },
    { path: '/director/:id', component: DirectorEdit, name: 'DirectorEdit', props: true },
    { path: '/users', component: Users, name: 'Users' },
    { path: '/users/:id', component: UserEdit, name: 'UserEdit', props: true  },
    { path: '/waiting-auth', component: WaitingAuth, name: 'WaitingAuth' },
    { path: '/tasks', component: Tasks, name: 'Tasks' },
    { path: '/rooms', component: Rooms, name: 'Rooms' },
    { path: '/rooms/create', component: RoomsCreate, name: 'RoomCreate' },
    { path: '/room/:id', component: RoomEdit, name: 'Room', props: true },

]

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})