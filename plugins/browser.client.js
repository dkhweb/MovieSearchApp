import { setupWorker } from 'msw'
import { handlers } from '~/mocks/handlers'

export default defineNuxtPlugin(() => {
  if (import.meta.env.MODE === 'development') {
    const worker = setupWorker(...handlers)
    worker.start()
  }
})
