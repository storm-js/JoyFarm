import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 部署到 GitHub Pages 项目页面时,base 必须是 '/仓库名/'
// 1. 项目页面(用户名.github.io/仓库名/):  改成 '/仓库名/'  例如 '/plantjoy/'
// 2. 用户主页(用户名.github.io):        用 '/'
// 3. 本地开发不受影响
const repoName = 'JoyFarm' // 仓库 https://github.com/storm-js/JoyFarm

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
