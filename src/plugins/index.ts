import type { App } from 'vue'
import { pinia } from './pinia'
import router from '@/router'

export function registerPlugins(app: App<Element>) {
  app.use(pinia)
  app.use(router)
}
