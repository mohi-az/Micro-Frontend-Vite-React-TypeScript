import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
// https://vitejs.dev/config/
export default defineConfig({

  plugins: [ {
    name: 'rewrite-middleware',
  
  },
  federation({
    name: 'auth_remote',
    filename: 'remoteEntry.js', // default file name
    exposes: {
      './Login': './src/Login',
    }
  })],
  build: {
    // modulePreload: true,
    // target: 'esnext',
    // minify: false,
    cssCodeSplit: false
    
  },

})
