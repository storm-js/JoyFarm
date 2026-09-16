import { Link } from 'react-router-dom'
import varieties, { IMAGES, getVarietyImage } from '../data/varieties.js'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero 区域 */}
      <section className={styles.hero}>
        <div className={styles.heroBg} style={{ backgroundImage: `url(${IMAGES.hero})` }} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            <span>第三代黄金水果 · 品种档案</span>
          </div>
          <h1 className={styles.heroTitle}>
            树莓品种档案
          </h1>
          <p className={styles.heroSubtitle}>
            食药同源 · 富含花青素 · 天然抗氧化
          </p>
          <p className={styles.heroDesc}>
            了解每个品种的特性、营养与养护要点
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>{varieties.length}</span>
              <span className={styles.statLabel}>精选品种</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>25g</span>
              <span className={styles.statLabel}>最大单果</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>-30°C</span>
              <span className={styles.statLabel}>耐寒极限</span>
            </div>
          </div>
        </div>
        <div className={styles.heroWave} />
      </section>

      {/* 品种列表 */}
      <section className={styles.varietySection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLine} />
          <h2 className={styles.sectionTitle}>品种图鉴</h2>
          <div className={styles.sectionLine} />
        </div>

        <div className={styles.cardGrid}>
          {varieties.map((v, index) => (
            <Link
              key={v.id}
              to={`/variety/${v.id}`}
              className={styles.varietyCard}
              style={{
                '--card-color': v.color,
                animationDelay: `${index * 0.12}s`
              }}
            >
              <div className={styles.cardImageWrap} style={{ background: `linear-gradient(135deg, ${v.color}, ${v.color}88)` }}>
                <img
                  src={getVarietyImage(v.id)}
                  alt={v.name}
                  className={styles.cardImage}
                  loading="lazy"
                />
                <div className={styles.cardImageOverlay} />
                <div className={styles.cardTraceCode}>
                  {v.plantTraits?.type || '优质品种'}
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardName}>{v.name}</h3>
                  <span className={styles.cardColor} style={{ background: v.color }} />
                </div>
                <p className={styles.cardLatin}>{v.latinName}</p>
                <p className={styles.cardDesc}>{v.description}</p>
                <div className={styles.cardSpecs}>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>果重</span>
                    <span className={styles.specValue}>{v.features.fruitWeight}</span>
                  </div>
                  <div className={styles.specDivider} />
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>甜度</span>
                    <span className={styles.specValue}>{v.features.sweetness}</span>
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.cardSeason}>
                    {v.features.harvestSeason}
                  </span>
                  <span className={styles.cardArrow}>
                    查看品种 <span className={styles.arrow}>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 底部 */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <img src={IMAGES.farm} alt="种植基地" className={styles.footerImg} />
          <div className={styles.footerInfo}>
            <h3 className={styles.footerTitle}>欢喜农场 · 生态果园</h3>
            <p className={styles.footerText}>
              生态种植 · 科学养护 · 品质保证
            </p>
            <div className={styles.footerLinks}>
              <Link to="/care-guide" className={styles.footerLink}>📖 养护说明</Link>
              <Link to="/admin" className={styles.footerLink}>🔐 管理入口</Link>
            </div>
          </div>
        </div>
        <p className={styles.copyright}>© 2026 欢喜农场 · 生态种植 科学养护</p>
      </footer>
    </div>
  )
}
