import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/shirin-portfolio/', // ✅ GitHub Pages base
  build: {
    outDir: 'docs', // ✅ Output to docs/ for GitHub Pages
  },
})
