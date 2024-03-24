import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [
        react(),
      ],
    }
  } else {
    return {
      plugins: [
        react(),
      ],
    }
  }
})