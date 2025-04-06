import type { App } from 'vue'
import { pinia } from './pinia'
import router from '@/router'
import ElementPlus from './element-plus'

export function registerPlugins(app: App<Element>) {
  app.use(pinia)
  app.use(router)
  app.use(ElementPlus)
}
