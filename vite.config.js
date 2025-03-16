import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  base: '/sirjan-bhandari', // Replace 'sirjan-bhandari' with your repository name
  build: {
    outDir: 'dist',
  },
};
