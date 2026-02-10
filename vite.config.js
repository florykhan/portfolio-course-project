import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // Must match GitHub Pages URL: https://<user>.github.io/portfolio-course-project/
    base: "/portfolio-course-project/",
})
