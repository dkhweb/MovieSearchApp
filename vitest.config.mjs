import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    setupFiles: ['./mocks/server.js'],
    globals: true,
    environment: 'happy-dom'
  }
})
