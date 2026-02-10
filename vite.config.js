import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // BASE_PATH set by GitHub Actions for Pages; fallback for local / other deploys
    base: process.env.BASE_PATH || "/florykhan-mini-project/",
})
