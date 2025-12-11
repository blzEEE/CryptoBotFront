import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isDev = mode === 'development' || command === 'serve'
  return {
    plugins: [
      vue(),
    ],
    build: {
      assets: 'assets',
      outDir: 'assets',       
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }}
})
