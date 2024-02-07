import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    resolve: {
      alias: {
        '@': resolve('src/main'),
        '@shared': resolve('src/shared'),
        '@preload': resolve('src/preload'),
      },
    },
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    resolve: {
      alias: {
        '@main': resolve('src/main'),
        '@shared': resolve('src/shared'),
      },
    },
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve('src/renderer'),
        '@shared': resolve('src/shared'),
      },
    },
    plugins: [react()],
  },
})
