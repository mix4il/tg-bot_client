import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
//TODO сделать динамический импорт
import 'element-plus/dist/index.css'
import App from './App.vue'
import { VueQueryPlugin, QueryClient  } from '@tanstack/vue-query'
import {router} from "./roter";
const queryClient = new QueryClient();
export const app = createApp(App)
app.use(ElementPlus)
app.use(VueQueryPlugin, {
    queryClient
})
app.use(router)

app.mount('#app')