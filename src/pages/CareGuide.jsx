import { Link } from 'react-router-dom'
import styles from './CareGuide.module.css'

const sections = [
  {
    num: '01',
    title: '土壤',
    paragraphs: [
      '土壤类型:偏好疏松肥沃、排水良好的微酸性至中性土壤(pH 值 5.5-7.0),沙壤土或泥炭土最佳。黏土需改良(添加河沙、腐叶土、泥炭土等有机质),避免积水烂根。'
    ]
  },
  {
    num: '02',
    title: '光照',
    paragraphs: [
      '树莓是喜强光植物,每天需保证 6-8 小时以上的直射光照。充足的光照能促进花芽分化、提高果实品质和产量。若种植在光照不足的环境,易导致枝叶徒长、结果少且果实甜度低。'
    ]
  },
  {
    num: '03',
    title: '浇水',
    paragraphs: [
      '树莓根系较浅,耐旱性较弱,需保持土壤湿润但不积水。',
      '生长期(尤其是萌芽期、开花期和果实膨大期)需水量大,每周浇水 1-2 次,干旱时增加频率;雨季及时排水,避免烂根。',
      '冬季植株进入休眠期,应减少浇水,保持土壤微干即可。'
    ]
  },
  {
    num: '04',
    title: '施肥',
    paragraphs: [
      '萌芽期:施氮肥为主的复合肥,促进枝叶生长。',
      '开花结果期:施磷钾肥为主(如磷酸二氢钾),提高坐果率和果实品质。',
      '采果后:补施一次复合肥,恢复树势,促进花芽分化。',
      '秋季落叶可以补充基肥,以腐熟有机肥为主,配合少量磷钾肥,增强抗寒能力。'
    ]
  },
  {
    num: '05',
    title: '修枝',
    paragraphs: [
      '树莓为丛生灌木,分基生枝(当年生强笋新枝)和结果枝（结果后枯死),需定期修剪:',
      '春季修剪:萌芽后疏除细弱枝、病枝,保留健壮基生枝,每丛留 4-6 根,剪去顶部细弱部分。',
      '夏季修剪:结果枝在采果后及时从基部剪除,避免消耗养分;对当年生基生枝（强笋）进行摘心,促进分枝和木质化。',
      '秋季修剪:落叶后疏除过密枝、病枯枝,调整株丛通风透光性。',
      'PS:树莓枝条柔软,结果后易倒伏,需搭建支架进行绑枝支撑。'
    ]
  }
]

export default function CareGuide() {
  return (
    <div className={styles.page}>
      {/* 顶部导航 */}
      {/* <div className={styles.navBar}>
        <Link to="/" className={styles.backBtn}>← 返回品种列表</Link>
      </div> */}

      {/* 标题 */}
      <header className={styles.header}>
        <h1 className={styles.title}>养护说明</h1>
      </header>

      {/* 内容区 */}
      <main className={styles.content}>
        {sections.map((s) => (
          <section key={s.num} className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNum}>{s.num}</span>
              <span className={styles.sectionSep}>|</span>
              <span className={styles.sectionName}>{s.title}</span>
            </h2>
            {s.paragraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>{p}</p>
            ))}
          </section>
        ))}
      </main>

      {/* 底部 */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          为每个园艺爱好者提供最优质的种苗是我们不断追求的目标,但工作中难免会有一些疏漏,
          我们也在不断地努力的改进,请您多多监督我们的工作,提出宝贵的建议,欢喜农场与您一起成长。
        </p>
        <div className={styles.footerBrand}>
          <div className={styles.qrBox}>
            <img
              src={`${import.meta.env.BASE_URL}images/WeChat.jpg`}
              alt="微信二维码"
              className={styles.qr}
            />
            {/* <span className={styles.qrLabel}>联系我们</span> */}
            <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="欢喜农场 logo"
            className={styles.logo}
          />
          </div>
          
          
        </div>
      </footer>
    </div>
  )
}
