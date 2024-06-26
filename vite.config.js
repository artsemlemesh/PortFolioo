import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  server: {
    port:3007,
    strictPort: true,
    host: '0.0.0.0',
  }
  // server: {
  //   port: 3000,
  //   strictPort: true,
  //   host: true,
  //   origin: 'http://0.0.0.0:3000'
  // },
})
