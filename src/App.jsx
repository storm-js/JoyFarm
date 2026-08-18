import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import VarietyDetail from './pages/VarietyDetail.jsx'
import Admin from './pages/Admin.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/variety/:id" element={<VarietyDetail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
