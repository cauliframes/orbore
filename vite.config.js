// vite.config.ts
import { defineConfig } from 'vite'
import { VitePluginNode } from 'vite-plugin-node'
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 19000,
  },
  plugins: [
    react(),
    ...VitePluginNode({
      adapter: 'koa',
      appPath: './index.js',
      tsCompiler: 'swc',
    })
  ],
});