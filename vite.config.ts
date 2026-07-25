import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // On GitHub Pages the site is served from
  // https://<user>.github.io/logos-john/, so production builds need that base
  // path. Dev keeps the root base.
  base: command === 'build' ? '/logos-john/' : '/',
  server: {
    // Honor a PORT assigned by the environment (e.g. the preview harness),
    // falling back to Vite's default.
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
}))
