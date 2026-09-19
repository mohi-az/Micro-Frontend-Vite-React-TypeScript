import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: 'remote_app',
    filename: 'remoteEntry.js', // default file name
    exposes: {
      './Products': './src/ProductsList',
      './ProductDetail': './src/ProductDetail'
    },
    shared: ['react', 'react-dom']
  })],
  build: {
    modulePreload: false,
    target: 'esnext',
    cssCodeSplit: false
  },

})
