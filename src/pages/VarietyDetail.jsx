import { useParams, useSearchParams, Link } from 'react-router-dom'
import { useMemo } from 'react'
import { getVarietyById, getVarietyImage, ACTIVITY_TYPES } from '../data/varieties.js'
import styles from './VarietyDetail.module.css'

export default function VarietyDetail() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const variety = useMemo(() => getVarietyById(id), [id])

  // 截止日期：?until=YYYY-MM，买家扫码时带上的购买月份
  const until = searchParams.get('until') // 如 '2026-07'
  const isBatchMode = !!until // 是否为批次模式（扫码进入）

  // 根据截止日期过滤农事记录
  const cultivationLog = useMemo(() => {
    if (!variety) return []
    if (!until) return []
    const cutoff = until + '-31'
    return variety.cultivationLog.filter(log => log.date <= cutoff)
  }, [variety, until])

  if (!variety) {
    return (
      <div className={styles.notFound}>
        <h2>品种未找到</h2>
        <Link to="/" className={styles.notFoundLink}>返回首页</Link>
      </div>
    )
  }

  const varietyImage = getVarietyImage(variety.id)
  const totalLog = variety.cultivationLog.length

  // 统计农事数据（仅批次模式用）
  const logStats = cultivationLog.reduce((acc, log) => {
    const type = ACTIVITY_TYPES[log.type]
    if (type) acc[log.type] = (acc[log.type] || 0) + 1
    return acc
  }, {})
  const fertilizeCount = logStats.fertilize || 0
  const pesticideCount = logStats.pesticide || 0
  const totalActivities = cultivationLog.length

  return (
    <div className={styles.page}>
      <div className={styles.backBar}>
        <Link to="/" className={styles.backBtn}>← 返回品种列表</Link>
      </div>

      {/* 批次模式：冻结提示条 */}
      {isBatchMode && (
        <div className={styles.frozenBar}>
          <span className={styles.frozenIcon}>🔒</span>
          <span>本批次档案截止至 <strong>{until}</strong>，之后的农事记录不在本批次展示</span>
        </div>
      )}

      {/* 档案卡片 */}
      <div className={styles.card}>
        {/* 头部：批次模式 vs 公开模式 */}
        <div className={styles.cardHeader} style={{ background: `linear-gradient(135deg, ${variety.color}, ${variety.color}dd)` }}>
          <div className={styles.headerBg} style={{ backgroundImage: `url(${varietyImage})` }} />
          <div className={styles.headerOverlay} />
          <div className={styles.headerContent}>
            {isBatchMode ? (
              <>
                <div className={styles.headerTop}>
                  <div className={styles.batchBadge}>
                    <span className={styles.batchLabel}>批次编号</span>
                    <span className={styles.batchNo}>{variety.batchNo}</span>
                  </div>
                  <div className={styles.headerLogo}>欢喜农场</div>
                </div>
                <h1 className={styles.varietyName}>{variety.name}</h1>
                <p className={styles.varietyLatin}>{variety.latinName}</p>
              </>
            ) : (
              <>
                <h1 className={styles.varietyName}>{variety.name}</h1>
                <p className={styles.varietyLatin}>{variety.latinName}</p>
              </>
            )}
          </div>
        </div>

        {/* 批次模式：档案信息栏 */}
        {isBatchMode && (
          <div className={styles.infoBar}>
            <div className={styles.infoBarItem}>
              <span className={styles.infoBarLabel}>定植日期</span>
              <span className={styles.infoBarValue}>{variety.plantDate}</span>
            </div>
            <div className={styles.infoBarDivider} />
            <div className={styles.infoBarItem}>
              <span className={styles.infoBarLabel}>农事记录</span>
              <span className={styles.infoBarValue}>{totalActivities} 条 / {totalLog}</span>
            </div>
            <div className={styles.infoBarDivider} />
            <div className={styles.infoBarItem}>
              <span className={styles.infoBarLabel}>施肥次数</span>
              <span className={styles.infoBarValue}>{fertilizeCount} 次</span>
            </div>
            <div className={styles.infoBarDivider} />
            <div className={styles.infoBarItem}>
              <span className={styles.infoBarLabel}>植保次数</span>
              <span className={styles.infoBarValue}>{pesticideCount} 次</span>
            </div>
          </div>
        )}

        {/* 品种档案（两种模式都有） */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>📋</span>
            <h2 className={styles.sectionTitle}>{isBatchMode ? '品种档案' : '品种介绍'}</h2>
          </div>
          <p className={styles.sectionDesc}>{variety.description}</p>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>⚖️</span>
              <span className={styles.featureValue}>{variety.features.fruitWeight}</span>
              <span className={styles.featureLabel}>单果重量</span>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🍯</span>
              <span className={styles.featureValue}>{variety.features.sweetness}</span>
              <span className={styles.featureLabel}>甜度</span>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>📦</span>
              <span className={styles.featureValue}>{variety.features.yield}</span>
              <span className={styles.featureLabel}>产量</span>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🌡️</span>
              <span className={styles.featureValue}>{variety.features.coldHardiness}</span>
              <span className={styles.featureLabel}>耐寒性</span>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>📅</span>
              <span className={styles.featureValue}>{variety.features.harvestSeason}</span>
              <span className={styles.featureLabel}>采收期</span>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🛡️</span>
              <span className={styles.featureValue}>{variety.features.diseaseResistance}</span>
              <span className={styles.featureLabel}>抗病性</span>
            </div>
          </div>
        </section>

        {/* 植物特征 */}
        {variety.plantTraits && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>🌿</span>
            <h2 className={styles.sectionTitle}>植物特征</h2>
          </div>
          <div className={styles.traitGrid}>
            <div className={styles.traitItem}>
              <span className={styles.traitLabel}>结果类型</span>
              <span className={styles.traitValue}>{variety.plantTraits.type}</span>
            </div>
            <div className={styles.traitItem}>
              <span className={styles.traitLabel}>植株高度</span>
              <span className={styles.traitValue}>{variety.plantTraits.height}</span>
            </div>
            <div className={styles.traitItem}>
              <span className={styles.traitLabel}>枝刺</span>
              <span className={styles.traitValue}>{variety.plantTraits.thorn}</span>
            </div>
            <div className={styles.traitItem}>
              <span className={styles.traitLabel}>果形</span>
              <span className={styles.traitValue}>{variety.plantTraits.fruitShape}</span>
            </div>
            <div className={styles.traitItem}>
              <span className={styles.traitLabel}>果色</span>
              <span className={styles.traitValue}>{variety.plantTraits.fruitColor}</span>
            </div>
            <div className={styles.traitItem}>
              <span className={styles.traitLabel}>硬度</span>
              <span className={styles.traitValue}>{variety.plantTraits.firmness}</span>
            </div>
            <div className={styles.traitItem}>
              <span className={styles.traitLabel}>风味</span>
              <span className={styles.traitValue}>{variety.plantTraits.flavor}</span>
            </div>
            <div className={styles.traitItem}>
              <span className={styles.traitLabel}>适种区域</span>
              <span className={styles.traitValue}>{variety.plantTraits.region}</span>
            </div>
          </div>
        </section>
        )}

        {/* 营养价值 */}
        {variety.nutrition && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>🔬</span>
            <h2 className={styles.sectionTitle}>营养价值</h2>
          </div>
          <div className={styles.nutritionCard}>
            <div className={styles.nutritionHighlights}>
              {variety.nutrition.highlights}
            </div>
            <div className={styles.nutritionGrid}>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionIcon}>🍊</span>
                <span className={styles.nutritionName}>维生素C</span>
                <span className={styles.nutritionData}>{variety.nutrition.vitaminC}</span>
              </div>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionIcon}>🍇</span>
                <span className={styles.nutritionName}>花青素</span>
                <span className={styles.nutritionData}>{variety.nutrition.anthocyanin}</span>
              </div>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionIcon}>💎</span>
                <span className={styles.nutritionName}>鞣花酸</span>
                <span className={styles.nutritionData}>{variety.nutrition.ellagicAcid}</span>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* 储存与食用 */}
        {variety.storage && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>🍯</span>
            <h2 className={styles.sectionTitle}>储存与食用</h2>
          </div>
          <div className={styles.storageCard}>
            <div className={styles.storageItem}>
              <span className={styles.storageIcon}>❄️</span>
              <div>
                <span className={styles.storageLabel}>冷藏保鲜</span>
                <span className={styles.storageText}>{variety.storage.coldStorage}</span>
              </div>
            </div>
            <div className={styles.storageItem}>
              <span className={styles.storageIcon}>💡</span>
              <div>
                <span className={styles.storageLabel}>储存提示</span>
                <span className={styles.storageText}>{variety.storage.tips}</span>
              </div>
            </div>
            <div className={styles.storageItem}>
              <span className={styles.storageIcon}>🍽️</span>
              <div>
                <span className={styles.storageLabel}>食用方式</span>
                <span className={styles.storageText}>{variety.storage.eating}</span>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* 批次模式：农事记录时间线 */}
        {isBatchMode && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>📜</span>
            <h2 className={styles.sectionTitle}>农事记录</h2>
            <span className={styles.sectionTag}>截止 {until}</span>
          </div>

          <div className={styles.timeline}>
            {cultivationLog.map((log, i) => {
              const typeInfo = ACTIVITY_TYPES[log.type] || ACTIVITY_TYPES.inspect
              return (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineLeft}>
                    <div className={styles.timelineDot} style={{ background: typeInfo.bg, borderColor: typeInfo.color }}>
                      <span className={styles.timelineDotIcon}>{typeInfo.icon}</span>
                    </div>
                    {i < cultivationLog.length - 1 && (
                      <div className={styles.timelineLine} />
                    )}
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineDateBar}>
                      <span className={styles.timelineDate}>{log.date}</span>
                      <span className={styles.timelineType} style={{ background: typeInfo.bg, color: typeInfo.color }}>
                        {typeInfo.label}
                      </span>
                    </div>
                    <div className={styles.timelineCard} style={{ borderLeftColor: typeInfo.color }}>
                      <h3 className={styles.timelineTitle}>{log.title}</h3>
                      <p className={styles.timelineDesc}>{log.desc}</p>
                      <div className={styles.timelineFooter}>
                        <span className={styles.timelineOperator}>
                          <span className={styles.operatorIcon}>👤</span>
                          {log.operator}
                        </span>
                        {log.safePeriod && (
                          <span className={styles.timelineSafe}>
                            <span className={styles.safeIcon}>⏱️</span>
                            安全间隔期 {log.safePeriod}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
        )}

        {/* 养护要点 */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>🌱</span>
            <h2 className={styles.sectionTitle}>养护要点</h2>
            <span className={styles.sectionTag}>{isBatchMode ? '客户指南' : '种植指导'}</span>
          </div>
          <div className={styles.careList}>
            {variety.careGuide.map((tip, i) => (
              <div key={i} className={styles.careItem}>
                <span className={styles.careNum}>{i + 1}</span>
                <span className={styles.careText}>{tip}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 批次模式：档案底栏 */}
        {isBatchMode && (
          <div className={styles.cardFooter}>
            <span className={styles.footerText}>
              本档案由 欢喜农场 农事记录系统自动生成 · 全程可追溯 · 品质有保证
            </span>
          </div>
        )}
      </div>

      <div className={styles.homeBtnWrap}>
        <Link to="/" className={styles.homeBtn}>🏠 返回首页</Link>
      </div>
    </div>
  )
}
