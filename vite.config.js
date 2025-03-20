import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  // server: {
  //   host: '0.0.0.0', // 允许所有 IP 访问
  //   port: 5173, // 指定端口
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入定制化样式
        additionalData: `
        @use "@/styles/var.scss" as *;
        `
      }
    }
  }
})
