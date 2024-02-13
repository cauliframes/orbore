import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  server: {
    port: 9999,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'koa',
      appPath: './index.js',
      tsCompiler: 'swc',
    })
  ]
})
