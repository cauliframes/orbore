import devServer from '@hono/vite-dev-server'
import cloudflare from '@hono/vite-dev-server/cloudflare'
import pages from '@hono/vite-cloudflare-pages'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [
        react()
      ]
    }
  } else {

    return {
      optimizeDeps: {
        entries: ['./src/**/*.{js,ts,jsx,tsx}']
      },
      plugins: [
        devServer({
          entry: 'src/hono/index.tsx',
          adapter: cloudflare,
        }),
        pages(),
      ]
    }
  }
})
