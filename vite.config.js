import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 部署到 Cloudflare Workers / Vercel 等根路径托管平台
// base 设为 './' 可部署到任意子路径,HashRouter 保证刷新不 404
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})