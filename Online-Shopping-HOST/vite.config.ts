import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  return {
  plugins: [
   
    react(),
    federation({
      name: 'app',
      filename: 'remoteEntry.js',
      remotes: {
        remoteApp: env.VITE_PRODUCTS_REMOTE_URL || 'http://localhost:5001/assets/remoteEntry.js',
        AuthRemote: env.VITE_AUTH_REMOTE_URL || 'http://localhost:5002/assets/remoteEntry.js',

      },
      
      shared: ['react','react-dom']
    })
  ],build: {
    // modulePreload: false,
    target: 'esnext',
    cssCodeSplit: false
  }
  }
})
