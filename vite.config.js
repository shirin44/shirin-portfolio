import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/shirin-portfolio/', // ✅ repo name here
  build: {
    outDir: 'docs', // ✅ output to /docs
  },
})
