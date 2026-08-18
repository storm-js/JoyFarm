import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// 使用 HashRouter:URL 形如 example.com/#/variety/ponca?until=2026-07
// 优势:
//   1. 静态托管(GitHub Pages / Cloudflare Workers)刷新不会 404
//   2. 不需要配置服务器 rewrite 规则
//   3. 不依赖 basename,部署到任意路径都正常
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
