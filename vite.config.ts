import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { loadEnv, mergeConfig, type UserConfig } from 'vite'
import {resolve} from "node:path";
export default defineConfig(({mode}) => {
  //const isDev = mode.NODE_ENV === 'development'
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  console.log(env)
  return  {
    define: {
      'process.env': env
    },
    plugins: [
      vue(),
    ],
    resolve : {
      alias: {
        '@' : resolve(__dirname, './src')
      }
    }
  }
})
