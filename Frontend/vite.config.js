import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/auth': 'https://wizarding-library-1.onrender.com',
    },
  },
  plugins: [react()],
});
