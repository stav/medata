import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/api/data': {
        target: 'https://shop.anthem.com/medicare/accessgateway/getPlanSummary', // Replace with your API's base URL
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
      '/api': {
        target: 'https://api.example.com/', // Replace with your API's base URL
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
    }
  }
})

    // "",
