import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import varieties, { getVarietyById } from '../data/varieties.js'
import styles from './Admin.module.css'

// ============ 管理后台密码 ============
// 修改这里可以更换密码，生产环境建议使用更长更复杂的密码
// 注意：前端密码保护仅为简易安全措施，部署到公网时建议配合服务器层验证
const ADMIN_PASSWORD = 'huanxi888'
const STORAGE_KEY = 'huanxi_admin_auth'

export default function Admin() {
  const [isAuthed, setIsAuthed] = useState(false)
  const [pwInput, setPwInput] = useState('')
  const [pwError, setPwError] = useState('')
  const [selectedVariety, setSelectedVariety] = useState(varieties[0]?.id || '')
  const [until, setUntil] = useState('2026-08')
  const [copied, setCopied] = useState(false)

  // 检查本地存储的登录状态（7天有效）
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const { expires } = JSON.parse(saved)
        if (Date.now() < expires) {
          setIsAuthed(true)
        } else {
          localStorage.removeItem(STORAGE_KEY)
        }
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (pwInput === ADMIN_PASSWORD) {
      setIsAuthed(true)
      setPwError('')
      // 保存登录状态 7 天
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        expires: Date.now() + 7 * 24 * 3600 * 1000
      }))
    } else {
      setPwError('密码错误，请重试')
    }
  }

  const handleLogout = () => {
    setIsAuthed(false)
    setPwInput('')
    localStorage.removeItem(STORAGE_KEY)
  }

  const variety = getVarietyById(selectedVariety)

  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/variety/${selectedVariety}?until=${until}`
    : `/variety/${selectedVariety}?until=${until}`
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(shareUrl)}`

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // ============ 未登录：密码页 ============
  if (!isAuthed) {
    return (
      <div className={styles.authPage}>
        <div className={styles.authCard}>
          <div className={styles.authIcon}>🔐</div>
          <h1 className={styles.authTitle}>欢喜农场 · 管理后台</h1>
          <p className={styles.authSubtitle}>请输入管理密码以访问</p>
          <form onSubmit={handleLogin} className={styles.authForm}>
            <input
              type="password"
              value={pwInput}
              onChange={e => { setPwInput(e.target.value); setPwError('') }}
              placeholder="请输入密码"
              className={styles.authInput}
              autoFocus
            />
            {pwError && <p className={styles.authError}>{pwError}</p>}
            <button type="submit" className={styles.authBtn}>登录</button>
          </form>
          <Link to="/" className={styles.authBack}>← 返回首页</Link>
        </div>
      </div>
    )
  }

  // ============ 已登录：管理后台 ============
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 800, margin: '0 auto' }}>
          <Link to="/" className={styles.backBtn}>← 返回首页</Link>
          <button onClick={handleLogout} className={styles.logoutBtn}>退出登录</button>
        </div>
        <h1 className={styles.title}>批次二维码生成</h1>
        <p className={styles.subtitle}>为每批卖出的树莓生成专属二维码，扫码看到截止到该月的农事记录</p>
      </div>

      <div className={styles.content}>
        {/* 生成器 */}
        <div className={styles.generator}>
          <div className={styles.genSection}>
            <label className={styles.label}>选择品种</label>
            <div className={styles.varietyPicker}>
              {varieties.map(v => (
                <button
                  key={v.id}
                  className={`${styles.varietyBtn} ${selectedVariety === v.id ? styles.varietyActive : ''}`}
                  style={selectedVariety === v.id ? { borderColor: v.color, background: v.color + '15' } : {}}
                  onClick={() => setSelectedVariety(v.id)}
                >
                  <span className={styles.varietyColor} style={{ background: v.color }} />
                  <span>{v.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.genSection}>
            <label className={styles.label}>截止月份（买家购买的月份）</label>
            <input
              type="month"
              value={until}
              onChange={e => setUntil(e.target.value)}
              className={styles.monthInput}
            />
            <p className={styles.hint}>
              买家在 {until} 购买，二维码将只显示截止到该月的农事记录，之后新增的记录不会出现在买家的页面中。
            </p>
          </div>

          {/* 生成的二维码 */}
          <div className={styles.result}>
            <div className={styles.qrWrap}>
              <img src={qrUrl} alt="批次二维码" className={styles.qrImg} />
              <div className={styles.qrLabel}>
                <span className={styles.qrBatch}>{variety?.batchNo}</span>
                <span className={styles.qrUntil}>截止 {until}</span>
              </div>
            </div>
            <div className={styles.linkBox}>
              <span className={styles.linkLabel}>溯源链接</span>
              <div className={styles.linkRow}>
                <code className={styles.linkText}>{shareUrl}</code>
                <button className={styles.copyBtn} onClick={handleCopy}>
                  {copied ? '已复制' : '复制'}
                </button>
              </div>
              <Link to={`/variety/${selectedVariety}?until=${until}`} className={styles.previewBtn}>
                预览买家看到的页面 →
              </Link>
            </div>
          </div>
        </div>

        {/* 历史批次列表 */}
        <div className={styles.history}>
          <h2 className={styles.historyTitle}>品种列表</h2>
          {varieties.map(v => (
            <div key={v.id} className={styles.historyItem}>
              <div className={styles.historyLeft}>
                <span className={styles.historyColor} style={{ background: v.color }} />
                <div>
                  <span className={styles.historyName}>{v.name}</span>
                  <span className={styles.historyBatch}>{v.batchNo}</span>
                </div>
              </div>
              <div className={styles.historyRight}>
                <span className={styles.historyCount}>{v.cultivationLog.length} 条农事记录</span>
                <Link to={`/variety/${v.id}`} className={styles.historyLink}>查看公开页</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
