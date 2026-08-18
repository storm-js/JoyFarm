import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// 路由切换时自动滚动到顶部
export default function ScrollToTop() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, search])
  return null
}
