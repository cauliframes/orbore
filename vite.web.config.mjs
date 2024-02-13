import react from '@vitejs/plugin-react-swc'

export default {
  server: {
    port: 9998,
    proxy: {
      "/api": {
        target: "http://localhost:9999",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    react(),
  ],
}