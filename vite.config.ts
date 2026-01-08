import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(root, 'src/components'),
      '@pages': path.resolve(root, 'src/pages'),
      '@layouts': path.resolve(root, 'src/layouts'),
      '@assets': path.resolve(root, 'src/assets'),
      '@hooks': path.resolve(root, 'src/hooks'),
      '@utils': path.resolve(root, 'src/utils'),
    },
  },
})
