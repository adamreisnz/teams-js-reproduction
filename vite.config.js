import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

//Aliases
const alias = {
  '@': fileURLToPath(new URL('./src', import.meta.url)),
}

//Vite config
//SEE: https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    open: true,
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias,
  },
  //SEE: https://github.com/OfficeDev/microsoft-teams-library-js/issues/2639#issuecomment-2532621768
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
})
