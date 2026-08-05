import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change base to '/<your-repo-name>/' before deploying to GitHub Pages.
// If you deploy to a user/org site (username.github.io repo), leave base as '/'.
export default defineConfig({
  plugins: [react()],
  base: 'https://noobcoders96.github.io/portfolio/',
})
