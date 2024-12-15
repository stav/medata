import { defineConfig } from 'vite'

const baseUrl = 'http://rs.medstar.agency'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: baseUrl,
        changeOrigin: true,
        secure: false,
        logger: console,
        rewrite: path => path.replace(/^\/api/, ''),
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err)
          })
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            const path = req.url
            const url = `"${baseUrl}${path}"`
            console.log('Sending Request:', req.method, url)
          })
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            const path = req.url
            console.log('Received Response:', proxyRes.statusCode, path)
          })
        }
      }
    }
  }
})
