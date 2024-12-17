import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/search-country/",
  server: {
    port: 3000 // Correct way to set the server port
  }
})
