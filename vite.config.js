import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://kapoorashish474.github.io/portfolio-ashish/
  base: '/portfolio-ashish/',
  plugins: [react(), tailwindcss()],
})
