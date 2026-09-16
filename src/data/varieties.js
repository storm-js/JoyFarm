// 树莓品种图片
// 图片均放在 public/images/ 下，中文文件名使用 encodeURIComponent 处理
const base = import.meta.env.BASE_URL
const img = (file) => `${base}images/${encodeURIComponent(file)}`

export const IMAGES = {
  hero: img('hero.jpg'),
  farm: img('farm.jpg'),
  blackJade: img('墨玉.jpg'),
  ponca: img('庞卡.jpg'),
  graduate: img('毕业生.jpg'),
  goldenAutumn: img('golden-autumn.jpg'),
  furida: img('福瑞达.jpg'),
  traveler: img('旅行者.jpg'),
  th: img('TH.jpg'),
  beike: img('北科.jpg'),
  babyCakes: img('甜心宝贝.jpg'),
  fendai: img('白花粉黛.jpg'),
  tayberry: img('泰莓.jpg'),
  hongzuan: img('红钻.jpg'),
  fengqiu: img('丰秋.jpg'),
  hongmeng: img('红梦.jpg'),
  bubblegum: img('黄蓬蘲.jpg')
}

export function getVarietyImage(id) {
  const map = {
    'black-jade': IMAGES.blackJade,
    'ponca': IMAGES.ponca,
    'graduate': IMAGES.graduate,
    'golden-autumn': IMAGES.goldenAutumn,
    'furida': IMAGES.furida,
    'traveler': IMAGES.traveler,
    'th': IMAGES.th,
    'beike': IMAGES.beike,
    'baby-cakes': IMAGES.babyCakes,
    'fendai': IMAGES.fendai,
    'tayberry': IMAGES.tayberry,
    'hongzuan': IMAGES.hongzuan,
    'fengqiu': IMAGES.fengqiu,
    'hongmeng': IMAGES.hongmeng,
    'bubblegum': IMAGES.bubblegum
  }
  return map[id] || IMAGES.blackJade
}

/**
 * 农事类型配置
 */
export const ACTIVITY_TYPES = {
  fertilize: { label: '施肥', icon: '🌱', color: '#2e7d32', bg: '#e8f5e9' },
  pesticide: { label: '病虫害防治', icon: '🛡️', color: '#e65100', bg: '#fff3e0' },
  prune:     { label: '修剪', icon: '✂️', color: '#6a1b9a', bg: '#f3e5f5' },
  water:     { label: '灌溉', icon: '💧', color: '#0277bd', bg: '#e1f5fe' },
  harvest:   { label: '采收', icon: '🧺', color: '#bf360c', bg: '#fbe9e7' },
  inspect:   { label: '巡检', icon: '🔍', color: '#37474f', bg: '#eceff1' },
  soil:      { label: '土壤管理', icon: '🌍', color: '#5d4037', bg: '#efebe9' },
  support:   { label: '搭架引枝', icon: '📐', color: '#455a64', bg: '#eceff1' }
}

const varieties = [
  // ==================== 黑莓 ====================
  {
    id: 'black-jade',
    name: '墨玉',
    latinName: '国内选育 · 双季黑莓',
    description: '双季黑莓，极其优秀的黑莓品种。果实硬度高，非常耐储运。成熟后脆甜，花香浓郁，糖度18-20度左右。软籽，黑莓里为数不多弱籽粒感品种。苗株长势旺，抗性好，挂果量很大。',
    color: '#2c0a33',
    batchNo: 'HX-MY-2608-001',
    plantDate: '2026-03-05',
    features: {
      fruitWeight: '8-10g（最大15g）',
      sweetness: '18-20°Brix',
      harvestSeason: '双季 · 夏秋两茬',
      yield: '挂果量大',
      coldHardiness: '-17°C',
      diseaseResistance: '抗性好 · 长势旺'
    },
    plantTraits: {
      type: '双季黑莓',
      height: '180-220cm',
      thorn: '少刺',
      fruitShape: '长圆锥形',
      fruitColor: '紫黑色 · 油亮有光泽',
      firmness: '硬度高 · 非常耐储运',
      flavor: '脆甜花香浓郁 · 软籽弱籽粒感',
      region: '华北、华中、华东、西南、西北南部'
    },
    nutrition: {
      vitaminC: '22mg/100g',
      anthocyanin: '120-220mg/100g',
      ellagicAcid: '富含',
      highlights: '花青素含量在浆果中名列前茅，富含硒、钾、镁等矿物质及SOD超氧化物歧化酶，被誉为"生命之果"与"花青素之王"'
    },
    storage: {
      coldStorage: '0-2°C 冷藏可保鲜7-10天',
      tips: '果肉紧实耐储运，是黑莓中最耐储的品种之一；冷冻保存口感更佳，解冻后仍保持完整果形',
      eating: '鲜食最佳，制作黑莓果酱、黑莓果酒、拌沙拉、烘焙黑莓派、搭配奶酪'
    },
    careGuide: [
      '黑莓喜光耐旱，选择排水良好的坡地或高畦栽培',
      '每3-4天浇一次水，果实膨大期适当增加浇水频率',
      '以基肥为主，秋季重施腐熟有机肥，生长期追施磷钾肥',
      '黑莓枝条长，需搭建双臂篱架，高度1.8-2m，及时引枝上架',
      '双季品种当年生枝秋季也会结果，冬季修剪注意保留健壮基生枝',
      '注意防治茎腐病，雨季及时排水，保持枝干通风透光'
    ],
    cultivationLog: [
      { date: '2026-03-05', type: 'soil',      title: '整地定植',   desc: '深翻40cm，沟施腐熟牛粪每亩3000kg+过磷酸钙80kg，行距2.5m株距0.8m', operator: '王师傅' },
      { date: '2026-03-10', type: 'water',     title: '定植浇水',   desc: '定植后浇透定根水，每株约5L，覆盖地膜保墒抑草', operator: '李师傅' },
      { date: '2026-03-28', type: 'inspect',   title: '成活检查',   desc: '成活率97%，补植2株，地膜完整', operator: '王师傅' },
      { date: '2026-04-12', type: 'fertilize', title: '追施提苗肥', desc: '每株施尿素20g+水溶肥(N:P:K=20:10:10)，离根部20cm沟施', operator: '李师傅' },
      { date: '2026-04-25', type: 'support',   title: '搭建篱架',   desc: '搭建双臂篱架，立柱高2.2m，两道铁丝高度1.2m和1.8m', operator: '张师傅' },
      { date: '2026-05-02', type: 'support',   title: '引枝上架',   desc: '新梢长度达80cm时引绑上架，每株留4-5个主枝', operator: '王师傅' },
      { date: '2026-05-10', type: 'fertilize', title: '花前追肥',   desc: '每株施复合肥(N:P:K=15:15:15)25g+硼砂5g，沟施覆土', operator: '李师傅' },
      { date: '2026-05-18', type: 'pesticide', title: '预防茎腐病', desc: '喷施甲基托布津1000倍液，重点喷施茎基部和地面', operator: '张师傅', safePeriod: '21天' },
      { date: '2026-06-01', type: 'water',     title: '果实膨大期灌溉', desc: '铺设滴灌系统，每3天滴灌1次，每次1.5小时', operator: '李师傅' },
      { date: '2026-06-10', type: 'fertilize', title: '果实膨大期追肥', desc: '叶面喷施0.3%磷酸二氢钾+0.1%硫酸镁，每7天一次，共3次', operator: '李师傅' },
      { date: '2026-06-18', type: 'pesticide', title: '防治斑翅果蝇', desc: '挂果蝇诱虫灯每亩4盏，配合糖醋液诱捕，物理防治为主', operator: '张师傅', safePeriod: '0天(物理防治)' },
      { date: '2026-06-28', type: 'harvest',   title: '夏果开始采收', desc: '果实90%转黑且有光泽时采收，选晴天早晨露水干后采摘', operator: '王师傅' }
    ]
  },
  {
    id: 'ponca',
    name: '庞卡',
    latinName: 'ponca · 直立无刺单季黑莓',
    description: '直立无刺单季黑莓，该品种是国内引进的北美最新品种。其果实高甜低酸，糖度16度以上。果实硬度高，耐存放。它虽是单季黑莓，但老枝条可多次萌发，采收期很长，果量大。',
    color: '#1a1a2e',
    batchNo: 'HX-PK-2608-002',
    plantDate: '2026-03-02',
    features: {
      fruitWeight: '6-8g（平均6.8g）',
      sweetness: '16°Brix以上',
      harvestSeason: '单季 · 采收期很长',
      yield: '果量大',
      coldHardiness: '-18°C',
      diseaseResistance: '无刺直立 · 耐存放'
    },
    plantTraits: {
      type: '直立无刺单季黑莓',
      height: '150-180cm',
      thorn: '无刺',
      fruitShape: '卵圆形',
      fruitColor: '深黑色 · 有光泽',
      firmness: '硬度高 · 耐存放',
      flavor: '高甜低酸，黑莓香气浓郁柔和，老枝可多次萌发采收期长',
      region: '华北、华中、华东、西南（6-9区）'
    },
    nutrition: {
      vitaminC: '25mg/100g',
      anthocyanin: '90-150mg/100g',
      ellagicAcid: '富含',
      highlights: '北美引进最新品种，高甜低酸，富含花青素、维生素E、水杨酸，抗氧化成分全面，鞣花酸含量高于普通水果数倍'
    },
    storage: {
      coldStorage: '0-2°C 冷藏可保鲜10-14天',
      tips: '果实硬度高耐储性好，商品性突出；储存期不易掉色、不易出水',
      eating: '高端鲜食首选、制作黑莓酱、鲜榨黑莓汁、酸奶配料、甜点装饰、速冻出口'
    },
    careGuide: [
      '庞卡喜光喜肥，选择向阳肥沃地块，宜采用高垄栽培',
      '每3-4天浇水一次，结果期保持土壤湿润但不积水',
      '基肥重施腐熟有机肥每亩2500kg，生长期每月一次复合肥',
      '植株直立紧凑，适合桩柱式或T型架，间距2m×0.7m即可',
      '无刺管理方便，采果后及时剪除老枝，每株留6-8新枝',
      '庞卡整体抗病性好，重点注意雨季预防灰霉病即可'
    ],
    cultivationLog: [
      { date: '2026-03-02', type: 'soil',      title: '整地定植',       desc: '高垄30cm，行距2m株距0.7m，每亩施羊粪2500kg+饼肥100kg作基肥', operator: '王师傅' },
      { date: '2026-03-08', type: 'water',     title: '定植浇水',       desc: '定植后一次性浇透定根水，覆盖黑色地膜', operator: '李师傅' },
      { date: '2026-03-25', type: 'inspect',   title: '成活检查',       desc: '成活率98%，庞卡长势强壮萌芽整齐', operator: '王师傅' },
      { date: '2026-04-10', type: 'fertilize', title: '追施提苗肥',     desc: '每株施尿素15g+复合肥15g，庞卡需肥量较大', operator: '李师傅' },
      { date: '2026-04-22', type: 'support',   title: '搭架拉线',       desc: '庞卡节间短，采用T型架，架高1.6m两道铁丝', operator: '张师傅' },
      { date: '2026-05-01', type: 'prune',     title: '摘心打顶',       desc: '新梢高1m时摘心，促使侧枝萌发增加结果枝数量', operator: '王师傅' },
      { date: '2026-05-08', type: 'fertilize', title: '花前追肥',       desc: '每株施复合肥30g+硫酸钾10g，沟施后浇水', operator: '李师傅' },
      { date: '2026-05-20', type: 'pesticide', title: '预防叶锈病',     desc: '喷施代森锰锌600倍液全面喷施叶面，庞卡抗锈性好预防为主', operator: '张师傅', safePeriod: '15天' },
      { date: '2026-06-05', type: 'water',     title: '果实膨大期灌溉', desc: '每3天滴灌1次，每次1小时，保持土壤湿度稳定', operator: '李师傅' },
      { date: '2026-06-15', type: 'fertilize', title: '叶面追肥',       desc: '喷施0.3%磷酸二氢钾，促进转色增甜', operator: '李师傅' },
      { date: '2026-06-22', type: 'harvest',   title: '开始采收',       desc: '果实完全转黑发亮时采收，老枝可多次萌发，采收期长', operator: '王师傅' }
    ]
  },
  {
    id: 'furida',
    name: '福瑞达',
    latinName: 'PK153 · 双季无刺黑莓',
    description: '双季无刺黑莓，长势迅猛，易成活，挂果多，单果最大可达二十几克，糖度15左右。刚转黑之后酸涩度比较高，需要转黑后在树上挂果5-7日之后再采摘。完全成熟后硬度低，不易储放。',
    color: '#241f3b',
    batchNo: 'HX-FR-2609-005',
    plantDate: '2026-03-06',
    features: {
      fruitWeight: '大果 · 最大二十几克',
      sweetness: '15°Brix左右',
      harvestSeason: '双季 · 挂果多',
      yield: '长势迅猛 · 丰产',
      coldHardiness: '—',
      diseaseResistance: '无刺 · 易成活（完熟不耐储）'
    },
    plantTraits: {
      type: '双季无刺黑莓',
      height: '长势迅猛 · 需搭架',
      thorn: '无刺',
      fruitShape: '大果长形',
      fruitColor: '紫黑色',
      firmness: '完熟后硬度低 · 不易储放',
      flavor: '转黑后挂树5-7天完全成熟，糖度约15度风味佳',
      region: '全国大部分地区'
    },
    careGuide: [
      '双季无刺黑莓，长势迅猛易成活，新手友好品种',
      '单果最大可达二十几克、挂果多，需肥量大，注意补充磷钾肥',
      '刚转黑酸涩度高，务必等转黑后挂树5-7天再采摘',
      '完全成熟后硬度低不易储放，宜即采即食或当天加工',
      '枝条生长快，及时搭架牵引，保持通风透光'
    ],
    cultivationLog: [
      { date: '2026-03-06', type: 'soil',      title: '整地定植',       desc: '高垄30cm栽培，行距2m株距0.8m，每亩施腐熟羊粪3000kg+复合肥50kg作基肥，福瑞达长势迅猛需肥量大', operator: '王师傅' },
      { date: '2026-03-11', type: 'water',     title: '定植浇水',       desc: '定植后浇透定根水，每株约4L，覆盖黑色地膜保墒抑草', operator: '李师傅' },
      { date: '2026-03-28', type: 'inspect',   title: '成活检查',       desc: '成活率99%，福瑞达萌芽早、长势迅猛，新梢抽生整齐', operator: '王师傅' },
      { date: '2026-04-10', type: 'fertilize', title: '追施提苗肥',     desc: '每株施尿素20g+高氮水溶肥，福瑞达生长快需勤追肥', operator: '李师傅' },
      { date: '2026-04-25', type: 'support',   title: '搭架引枝',       desc: '枝条生长迅猛，及时搭建T型架，架高2m，新梢60cm开始引绑', operator: '张师傅' },
      { date: '2026-05-06', type: 'prune',     title: '疏枝定梢',       desc: '每株选留6-8根健壮主枝，去除过密弱枝，改善通风透光', operator: '王师傅' },
      { date: '2026-05-12', type: 'fertilize', title: '花前追肥',       desc: '每株施复合肥25g+硫酸钾10g，沟施覆土后浇水', operator: '李师傅' },
      { date: '2026-05-20', type: 'pesticide', title: '预防灰霉病',     desc: '喷施异菌脲1000倍液，花期重点保护花器和幼果', operator: '张师傅', safePeriod: '14天' },
      { date: '2026-06-05', type: 'water',     title: '果实膨大期灌溉', desc: '滴灌每2-3天一次，每次1.5小时，大果期需水量大', operator: '李师傅' },
      { date: '2026-06-12', type: 'fertilize', title: '膨果追肥',       desc: '叶面喷施0.3%磷酸二氢钾，配合高钾水溶肥冲施，促进果实膨大', operator: '李师傅' },
      { date: '2026-06-25', type: 'harvest',   title: '夏果开始采收',   desc: '福瑞达刚转黑酸涩度高，需在树上挂果5-7天完全成熟后再采；单果最大二十几克，完熟后果实偏软，当天采收当天销售', operator: '王师傅' },
      { date: '2026-09-02', type: 'harvest',   title: '秋果开始采收',   desc: '当年生枝顶端秋果陆续转色成熟，分批采收，秋果持续至10月', operator: '王师傅' }
    ]
  },
  {
    id: 'traveler',
    name: '旅行者',
    latinName: 'PK190 · 半直立双季无刺黑莓',
    description: '半直立双季无刺黑莓，果型中等大小10g左右，糖度14度左右。果实硬度中上等，相对耐存放，口味比福瑞达要偏甜一些。此品种介于福瑞达和墨玉之间，属于比较均衡的品种。',
    color: '#2d2a4a',
    batchNo: 'HX-LX-2609-006',
    plantDate: '2026-03-07',
    features: {
      fruitWeight: '10g左右',
      sweetness: '14°Brix',
      harvestSeason: '双季',
      yield: '丰产稳产',
      coldHardiness: '—',
      diseaseResistance: '无刺 · 硬度中上耐存放'
    },
    plantTraits: {
      type: '半直立双季无刺黑莓',
      height: '中等 · 半直立',
      thorn: '无刺',
      fruitShape: '中等果形',
      fruitColor: '紫黑色',
      firmness: '硬度中上等 · 相对耐存放',
      flavor: '比福瑞达偏甜，介于福瑞达与墨玉之间，风味均衡',
      region: '全国大部分地区'
    },
    careGuide: [
      '半直立双季无刺黑莓，果重约10g，糖度约14度',
      '果实硬度中上等，相对耐存放，商品性较好',
      '口味比福瑞达偏甜，属于表现均衡的品种',
      '建议搭架牵引枝条，保持通风透光',
      '常规水肥管理，果实膨大期保持土壤湿润'
    ],
    cultivationLog: [
      { date: '2026-03-07', type: 'soil',      title: '整地定植',       desc: '高垄30cm，行距2m株距0.7m，每亩施腐熟羊粪2500kg+饼肥80kg作基肥', operator: '王师傅' },
      { date: '2026-03-12', type: 'water',     title: '定植浇水',       desc: '定植后浇透定根水，覆盖黑色地膜保墒', operator: '李师傅' },
      { date: '2026-03-30', type: 'inspect',   title: '成活检查',       desc: '成活率98%，半直立株型，萌芽整齐，长势稳健', operator: '王师傅' },
      { date: '2026-04-12', type: 'fertilize', title: '追施提苗肥',     desc: '每株施尿素15g+复合肥15g，沟施后浇水', operator: '李师傅' },
      { date: '2026-04-26', type: 'support',   title: '搭架引枝',       desc: '半直立品种，搭建T型架，架高1.8m，新梢引绑上架', operator: '张师傅' },
      { date: '2026-05-04', type: 'prune',     title: '摘心疏枝',       desc: '新梢1m时摘心促分枝，每株留5-7根主枝', operator: '王师傅' },
      { date: '2026-05-12', type: 'fertilize', title: '花前追肥',       desc: '每株施复合肥25g，配合硫酸钾10g', operator: '李师傅' },
      { date: '2026-05-22', type: 'pesticide', title: '预防叶部病害',   desc: '喷施代森锰锌600倍液全面防护，无刺品种操作方便', operator: '张师傅', safePeriod: '15天' },
      { date: '2026-06-06', type: 'water',     title: '果实膨大期灌溉', desc: '滴灌每3天一次，每次1小时，保持土壤湿度稳定', operator: '李师傅' },
      { date: '2026-06-16', type: 'fertilize', title: '叶面追肥',       desc: '喷施0.3%磷酸二氢钾，促进转色增甜', operator: '李师傅' },
      { date: '2026-06-28', type: 'harvest',   title: '夏果开始采收',   desc: '果重约10g，糖度14度左右，比福瑞达偏甜，硬度中上较耐存放', operator: '王师傅' },
      { date: '2026-09-05', type: 'harvest',   title: '秋果开始采收',   desc: '当年生枝秋果成熟，表现均衡稳定，分批采收', operator: '王师傅' }
    ]
  },
  {
    id: 'th',
    name: 'TH黑莓',
    latinName: '北美引进 · 半直立双季无刺黑莓',
    description: '半直立型双季无刺黑莓，果实中大，小于福瑞达，硬度高，耐储放。酸度低，风味浓郁。挂果对冷量需求低，适合南方种植。本品种小苗期长势慢，需耐心等待苗期成长。',
    color: '#1f2937',
    batchNo: 'HX-TH-2609-007',
    plantDate: '2026-03-09',
    features: {
      fruitWeight: '中大（小于福瑞达）',
      sweetness: '酸度低 · 风味浓郁',
      harvestSeason: '双季',
      yield: '—',
      coldHardiness: '低冷量需求',
      diseaseResistance: '无刺 · 硬度高耐储 · 适合南方'
    },
    plantTraits: {
      type: '半直立双季无刺黑莓',
      height: '中等（小苗期长势慢）',
      thorn: '无刺',
      fruitShape: '中大有光泽',
      fruitColor: '紫黑色',
      firmness: '硬度高 · 耐储放',
      flavor: '酸度低，风味浓郁',
      region: '南方地区（冷量需求低）'
    },
    careGuide: [
      '半直立双季无刺黑莓，对冷量需求低，特别适合南方种植',
      '小苗期长势慢，属正常现象，需耐心等待苗期成长',
      '果实酸度低、风味浓郁，硬度高耐储放',
      '盆土保持湿润不积水，生长期定期补充磷钾肥',
      '半直立株型，建议简单搭架牵引'
    ],
    cultivationLog: [
      { date: '2026-03-09', type: 'soil',      title: '整地定植',       desc: '南方多雨区起高垄40cm防积水，行距2m株距0.7m，每亩施腐熟羊粪2500kg+过磷酸钙60kg', operator: '王师傅' },
      { date: '2026-03-14', type: 'water',     title: '定植浇水',       desc: '定植后浇透定根水，覆盖黑色地膜，南方注意垄沟排水畅通', operator: '李师傅' },
      { date: '2026-04-02', type: 'inspect',   title: '成活检查',       desc: '成活率97%，小苗期长势偏慢属本品种特性，无需额外处理，耐心等待苗期成长', operator: '王师傅' },
      { date: '2026-04-20', type: 'fertilize', title: '薄肥勤施',       desc: '小苗期以低浓度水溶肥薄施勤施，每10天一次，避免浓肥烧苗', operator: '李师傅' },
      { date: '2026-05-08', type: 'support',   title: '立杆牵引',       desc: '半直立株型，立杆简易牵引，保持枝条直立通风', operator: '张师傅' },
      { date: '2026-05-15', type: 'prune',     title: '疏除细弱枝',     desc: '疏除细弱枝和过密枝，集中养分促主枝生长', operator: '王师傅' },
      { date: '2026-05-25', type: 'fertilize', title: '花前追肥',       desc: '每株施磷钾肥为主复合肥20g，促进坐果', operator: '李师傅' },
      { date: '2026-06-05', type: 'pesticide', title: '预防灰霉病',     desc: '南方梅雨前喷施腐霉利800倍液，重点喷花器果穗', operator: '张师傅', safePeriod: '14天' },
      { date: '2026-06-15', type: 'water',     title: '果实膨大期灌溉', desc: '滴灌每3天一次，雨季及时排除垄沟积水', operator: '李师傅' },
      { date: '2026-06-25', type: 'fertilize', title: '叶面追肥',       desc: '喷施0.3%磷酸二氢钾，提高果实硬度和糖度', operator: '李师傅' },
      { date: '2026-07-05', type: 'harvest',   title: '夏果开始采收',   desc: '果实酸度低、风味浓郁，硬度高耐储放，冷量需求低适合南方种植表现良好', operator: '王师傅' },
      { date: '2026-08-30', type: 'harvest',   title: '秋果开始采收',   desc: '秋果陆续成熟，低冷量品种南方秋季挂果稳定', operator: '王师傅' }
    ]
  },
  {
    id: 'beike',
    name: '北科',
    latinName: '花香黑莓 · 双季匍匐茎',
    description: '双季黑莓，匍匐茎。枝条柔软，需要做支撑。果实中等，果量大。自带花香，甜度比较高，成熟后甜度能在16-18度。因为老枝挂果的特性，所以第二年才会大量结果。',
    color: '#3d2438',
    batchNo: 'HX-BK-2609-008',
    plantDate: '2026-03-11',
    features: {
      fruitWeight: '中等',
      sweetness: '16-18°Brix',
      harvestSeason: '双季（第二年丰产）',
      yield: '果量大',
      coldHardiness: '—',
      diseaseResistance: '自带花香 · 需搭支撑'
    },
    plantTraits: {
      type: '双季黑莓 · 匍匐茎',
      height: '枝条柔软 · 需支撑',
      thorn: '—',
      fruitShape: '中等果形',
      fruitColor: '紫黑色',
      firmness: '—',
      flavor: '自带花香，甜度高，成熟后16-18度',
      region: '老枝挂果特性，第二年大量结果'
    },
    careGuide: [
      '双季黑莓，匍匐茎生长，枝条柔软，必须搭建支架支撑',
      '果实自带花香，成熟后糖度16-18度，果量大',
      '老枝挂果特性，第二年才会大量结果，首年勿急于产量',
      '冬季注意保留健壮老枝，不可贴地平剪',
      '匍匐枝条及时引绑上架，避免果实接触地面'
    ],
    cultivationLog: [
      { date: '2026-03-11', type: 'soil',      title: '整地定植',       desc: '高垄栽培，行距2.2m株距0.8m（匍匐品种预留足够空间），每亩施腐熟羊粪2500kg+饼肥80kg', operator: '王师傅' },
      { date: '2026-03-16', type: 'water',     title: '定植浇水',       desc: '定植后浇透定根水，覆盖黑色地膜', operator: '李师傅' },
      { date: '2026-04-05', type: 'inspect',   title: '成活检查',       desc: '成活率98%，枝条柔软呈匍匐生长，需尽快搭架', operator: '王师傅' },
      { date: '2026-04-18', type: 'fertilize', title: '追施提苗肥',     desc: '每株施尿素15g+复合肥15g，促匍匐茎伸长', operator: '李师傅' },
      { date: '2026-04-28', type: 'support',   title: '搭建篱架',       desc: '重点工作：匍匐茎必须搭架支撑，建多道铁丝篱架高1.8m，逐枝引绑上架', operator: '张师傅' },
      { date: '2026-05-10', type: 'prune',     title: '疏除过密枝',     desc: '疏除过密匍匐枝和弱枝，每株留6-8根主枝扇形绑缚', operator: '王师傅' },
      { date: '2026-05-18', type: 'fertilize', title: '花前追肥',       desc: '每株施复合肥20g+硫酸钾8g', operator: '李师傅' },
      { date: '2026-06-01', type: 'pesticide', title: '预防茎腐病',     desc: '喷施甲基托布津1000倍液，重点喷匍匐茎接触部位', operator: '张师傅', safePeriod: '21天' },
      { date: '2026-06-10', type: 'water',     title: '果实膨大期灌溉', desc: '滴灌每3天一次，避免果实贴地受潮', operator: '李师傅' },
      { date: '2026-06-20', type: 'fertilize', title: '叶面追肥',       desc: '喷施0.3%磷酸二氢钾，提升花香风味和糖度', operator: '李师傅' },
      { date: '2026-07-02', type: 'harvest',   title: '首年试果采收',   desc: '首年少量挂果尝鲜，果实自带花香、糖度16-18度；老枝挂果特性，第二年将大量结果', operator: '王师傅' },
      { date: '2026-08-20', type: 'prune',     title: '夏季修剪',       desc: '采果后疏除已结果老弱枝，保留健壮老枝和当年生新枝引绑上架，为第二年丰产做准备', operator: '王师傅' }
    ]
  },
  {
    id: 'baby-cakes',
    name: '甜心宝贝',
    latinName: 'Baby Cakes · 矮化无刺双季黑莓',
    description: '矮化无刺双季黑莓，株型低矮紧凑，成株0.9米-1.2米，非常适合在阳台种植。果实中等，甜度高，挂果率高。',
    color: '#3a2a3f',
    batchNo: 'HX-TX-2609-009',
    plantDate: '2026-03-12',
    features: {
      fruitWeight: '中等',
      sweetness: '甜度高',
      harvestSeason: '双季',
      yield: '挂果率高',
      coldHardiness: '—',
      diseaseResistance: '无刺 · 矮化适合阳台'
    },
    plantTraits: {
      type: '矮化双季无刺黑莓',
      height: '0.9-1.2m（低矮紧凑）',
      thorn: '无刺',
      fruitShape: '中等果形',
      fruitColor: '紫黑色',
      firmness: '—',
      flavor: '甜度高',
      region: '阳台盆栽 · 家庭种植首选'
    },
    careGuide: [
      '矮化无刺双季黑莓，成株仅0.9-1.2米，非常适合阳台盆栽',
      '株型低矮紧凑，建议选用2加仑以上大盆种植',
      '果实中等、甜度高、挂果率高',
      '保证每天6小时以上光照，盆土保持湿润',
      '无刺管理方便，是家庭种植的理想品种'
    ],
    cultivationLog: [
      { date: '2026-03-12', type: 'soil',      title: '上盆栽植',       desc: '选用2加仑盆，基质按泥炭土:珍珠岩:腐熟羊粪=6:2:2配制，矮化品种专为阳台盆栽设计', operator: '王师傅' },
      { date: '2026-03-15', type: 'water',     title: '定植浇水',       desc: '浇透定根水，放置阳台通风向阳处，缓苗一周', operator: '李师傅' },
      { date: '2026-04-01', type: 'inspect',   title: '成活检查',       desc: '植株成活，株型低矮紧凑，新梢抽生正常', operator: '王师傅' },
      { date: '2026-04-15', type: 'fertilize', title: '追施薄肥',       desc: '盆施缓释肥5g，配合低浓度水溶肥每10天一次，薄肥勤施', operator: '李师傅' },
      { date: '2026-05-01', type: 'prune',     title: '疏枝整形',       desc: '株型紧凑无需搭架，仅疏除细弱枝，保持盆栽通风', operator: '王师傅' },
      { date: '2026-05-10', type: 'fertilize', title: '花前追肥',       desc: '盆施磷钾肥为主复合肥5g，提高坐果率', operator: '李师傅' },
      { date: '2026-05-25', type: 'pesticide', title: '物理防虫',       desc: '阳台种植以物理防治为主，盆边挂黄色粘虫板，无刺品种日常检查方便', operator: '张师傅', safePeriod: '0天(物理防治)' },
      { date: '2026-06-08', type: 'water',     title: '果期浇水',       desc: '盆栽保水性差，每2天浇透一次，避免正午浇水伤根', operator: '李师傅' },
      { date: '2026-06-18', type: 'fertilize', title: '叶面追肥',       desc: '喷施0.2%磷酸二氢钾，促果实膨大增甜', operator: '李师傅' },
      { date: '2026-06-30', type: 'harvest',   title: '夏果开始采收',   desc: '无刺采摘方便，果实甜度高、挂果率高，阳台即采即食', operator: '王师傅' },
      { date: '2026-09-03', type: 'harvest',   title: '秋果开始采收',   desc: '当年生枝秋果成熟，矮化盆栽双季挂果，家庭观赏食用两相宜', operator: '王师傅' }
    ]
  },
  {
    id: 'fendai',
    name: '白花粉黛',
    latinName: '粉黛实生定繁 · 半直立双季无刺黑莓',
    description: '半直立型双季无刺黑莓，果实中大，花色为白色，根据环境影像有时呈现粉色。果实表现均衡，糖度15-17度。果子硬度高，耐储放。对冷量需求低，可以南方种植。',
    color: '#5b4b70',
    batchNo: 'HX-FD-2609-010',
    plantDate: '2026-03-13',
    features: {
      fruitWeight: '中大',
      sweetness: '15-17°Brix',
      harvestSeason: '双季',
      yield: '表现均衡',
      coldHardiness: '低冷量需求',
      diseaseResistance: '无刺 · 硬度高耐储 · 可南方种植'
    },
    plantTraits: {
      type: '半直立双季无刺黑莓',
      height: '中等 · 半直立',
      thorn: '无刺',
      fruitShape: '中大果形',
      fruitColor: '紫黑色 · 花白色（偶现粉色）',
      firmness: '硬度高 · 耐储放',
      flavor: '果实表现均衡，糖度15-17度',
      region: '南方地区（冷量需求低）'
    },
    careGuide: [
      '半直立双季无刺黑莓，花色白色，环境影响下有时呈现粉色',
      '果实表现均衡，糖度15-17度，硬度高耐储放',
      '对冷量需求低，南方地区也可种植',
      '无刺管理方便，常规搭架牵引即可',
      '花果观赏价值高，适合庭院栽培'
    ],
    cultivationLog: [
      { date: '2026-03-13', type: 'soil',      title: '整地定植',       desc: '高垄30cm，行距2m株距0.7m，每亩施腐熟羊粪2500kg+饼肥80kg', operator: '王师傅' },
      { date: '2026-03-18', type: 'water',     title: '定植浇水',       desc: '定植后浇透定根水，覆盖黑色地膜', operator: '李师傅' },
      { date: '2026-04-03', type: 'inspect',   title: '成活检查',       desc: '成活率98%，半直立株型，生长均衡', operator: '王师傅' },
      { date: '2026-04-15', type: 'fertilize', title: '追施提苗肥',     desc: '每株施尿素15g+复合肥15g', operator: '李师傅' },
      { date: '2026-04-30', type: 'support',   title: '搭架引枝',       desc: '搭建T型架，架高1.8m，新梢引绑上架', operator: '张师傅' },
      { date: '2026-05-08', type: 'prune',     title: '疏枝定梢',       desc: '每株留6-8根主枝，疏除弱枝', operator: '王师傅' },
      { date: '2026-05-16', type: 'fertilize', title: '花前追肥',       desc: '每株施复合肥20g+硫酸钾8g，白花品种花期观赏效果佳', operator: '李师傅' },
      { date: '2026-05-28', type: 'pesticide', title: '预防病害',       desc: '喷施代森锰锌600倍液，保护白花幼果', operator: '张师傅', safePeriod: '15天' },
      { date: '2026-06-08', type: 'water',     title: '果实膨大期灌溉', desc: '滴灌每3天一次，每次1小时', operator: '李师傅' },
      { date: '2026-06-18', type: 'fertilize', title: '叶面追肥',       desc: '喷施0.3%磷酸二氢钾，促果实均衡发育', operator: '李师傅' },
      { date: '2026-07-02', type: 'harvest',   title: '夏果开始采收',   desc: '花色纯白（偶现粉色），果实糖度15-17度，硬度高耐储放', operator: '王师傅' },
      { date: '2026-09-04', type: 'harvest',   title: '秋果开始采收',   desc: '秋果成熟，低冷量需求品种挂果稳定，南方庭院种植表现良好', operator: '王师傅' }
    ]
  },
  {
    id: 'tayberry',
    name: '泰莓',
    latinName: 'Tayberry · 黑莓×红树莓杂交',
    description: '英国培育的黑莓与红树莓的杂交品种。枝条带有软刺，植株健壮，它结合了黑莓的丰产与果型和树莓的香气与较低的子粒感。作为罗甘莓的改良型品种，味道独特，值得一试。',
    color: '#8B2942',
    batchNo: 'HX-TM-2609-011',
    plantDate: '2026-03-14',
    features: {
      fruitWeight: '大果（杂交优势）',
      sweetness: '香气浓郁 · 子粒感低',
      harvestSeason: '—',
      yield: '丰产',
      coldHardiness: '—',
      diseaseResistance: '带软刺 · 植株健壮'
    },
    plantTraits: {
      type: '黑莓×红树莓杂交品种',
      height: '植株健壮',
      thorn: '带软刺',
      fruitShape: '长形大果',
      fruitColor: '深红偏紫',
      firmness: '—',
      flavor: '结合黑莓果型与树莓香气，子粒感低，味道独特',
      region: '罗甘莓改良型 · 全国大部分地区'
    },
    careGuide: [
      '英国培育的黑莓×红树莓杂交品种（Tayberry）',
      '枝条带有软刺，修剪采摘时建议戴手套',
      '植株健壮、丰产，结合了黑莓的大果与树莓的香气',
      '子粒感低，是罗甘莓的改良型品种，味道独特',
      '需搭架引枝，果实成熟后及时采收'
    ],
    cultivationLog: [
      { date: '2026-03-14', type: 'soil',      title: '整地定植',       desc: '高垄栽培，行距2.2m株距1m（杂交品种植株健壮需空间大），每亩施腐熟羊粪3000kg+过磷酸钙80kg', operator: '王师傅' },
      { date: '2026-03-19', type: 'water',     title: '定植浇水',       desc: '浇透定根水，覆盖黑色地膜；枝条带软刺，作业时戴手套', operator: '李师傅' },
      { date: '2026-04-06', type: 'inspect',   title: '成活检查',       desc: '成活率99%，植株健壮，新梢抽生有力', operator: '王师傅' },
      { date: '2026-04-18', type: 'fertilize', title: '追施提苗肥',     desc: '每株施尿素18g+复合肥15g，植株健壮需肥量较大', operator: '李师傅' },
      { date: '2026-05-02', type: 'support',   title: '搭扇形篱架',     desc: '泰莓枝条长而软，搭建扇形篱架高2m，逐枝引绑（戴手套防软刺）', operator: '张师傅' },
      { date: '2026-05-10', type: 'prune',     title: '疏枝整形',       desc: '每株留6-8根主枝扇形绑缚，疏除过密枝', operator: '王师傅' },
      { date: '2026-05-20', type: 'fertilize', title: '花前追肥',       desc: '每株施复合肥25g+硫酸钾10g', operator: '李师傅' },
      { date: '2026-06-02', type: 'pesticide', title: '预防茎腐病',     desc: '喷施甲基托布津1000倍液，重点喷茎基部', operator: '张师傅', safePeriod: '21天' },
      { date: '2026-06-12', type: 'water',     title: '果实膨大期灌溉', desc: '滴灌每3天一次，每次1.5小时，大果期保证水分', operator: '李师傅' },
      { date: '2026-06-22', type: 'fertilize', title: '叶面追肥',       desc: '喷施0.3%磷酸二氢钾，促果实膨大着色', operator: '李师傅' },
      { date: '2026-07-08', type: 'harvest',   title: '开始采收',       desc: '果实深红偏紫、长形大果，兼具树莓浓郁香气与低子粒感，成熟后及时采收', operator: '王师傅' },
      { date: '2026-08-15', type: 'prune',     title: '采后修剪',       desc: '采果后剪除结果老枝，当年生新枝引绑上架，为来年结果做准备', operator: '王师傅' }
    ]
  },
  // ==================== 红树莓 ====================
  {
    id: 'graduate',
    name: '毕业生',
    latinName: '国内优选 · 双季红树莓',
    description: '双季红树莓，其果实硬度高，相比其他红树莓品种大很多，单果可达10克以上，风味和甜酸比非常好。植株粗壮，直立性好，抗逆性优秀，产量很高，是非常优秀的红树莓品种。',
    color: '#C41E3A',
    batchNo: 'HX-BY-2608-003',
    plantDate: '2026-03-08',
    features: {
      fruitWeight: '10g以上（大果）',
      sweetness: '甜酸比极佳',
      harvestSeason: '双季',
      yield: '产量很高',
      coldHardiness: '-25°C',
      diseaseResistance: '抗逆性优秀 · 直立性好'
    },
    plantTraits: {
      type: '双季红树莓',
      height: '植株粗壮 · 直立性好',
      thorn: '少刺',
      fruitShape: '圆整饱满近球形 · 果型大',
      fruitColor: '正红色 · 色泽均匀',
      firmness: '硬度高 · 货架期长',
      flavor: '甜酸比非常好，树莓清香浓郁，入口回甘',
      region: '东北、华北、西北、西南高海拔、华东冷凉地区'
    },
    nutrition: {
      vitaminC: '28mg/100g',
      anthocyanin: '40-80mg/100g',
      ellagicAcid: '富含',
      highlights: '红树莓中少有的大果高产品种，维C与花青素含量突出，含天然水杨酸、SOD、黄酮类，被欧美营养学界称为"红宝石水果"'
    },
    storage: {
      coldStorage: '0-4°C 冷藏可保鲜5-7天',
      tips: '果实硬度高货架期长，宜即采即食或及时冷藏；冷冻后风味保存好，适合制作树莓速冻果',
      eating: '高端鲜食、搭配酸奶麦片、制作树莓慕斯、树莓果酱、调制鸡尾酒、烘焙蛋糕装饰'
    },
    careGuide: [
      '毕业生喜冷凉气候，宜选通风透光、排水良好的沙壤土',
      '每2-3天浇一次水，红树莓根系浅忌干旱忌积水',
      '基肥以腐熟牛粪为主每亩2500kg，花期、果实膨大期各追一次磷钾肥',
      '采用T型架，架高1.8m，新梢长至1m时及时引绑上架',
      '双季品种当年生枝秋末也能结果，修剪时注意保留健壮基生枝',
      '重点预防白粉病和灰霉病，花期遇雨需喷一次保护性杀菌剂'
    ],
    cultivationLog: [
      { date: '2026-03-08', type: 'soil',      title: '整地定植',         desc: '深翻35cm，按行距2m株距0.5m定植，每亩施腐熟牛粪2500kg+过磷酸钙60kg', operator: '王师傅' },
      { date: '2026-03-13', type: 'water',     title: '定植浇水',         desc: '定植后浇透定根水，每株约3L，行间覆盖黑色抑草布', operator: '李师傅' },
      { date: '2026-03-30', type: 'inspect',   title: '成活检查',         desc: '成活率96%，补植3株，萌芽正常', operator: '王师傅' },
      { date: '2026-04-15', type: 'fertilize', title: '追施提苗肥',       desc: '每株施尿素15g，结合浇水冲施水溶肥', operator: '李师傅' },
      { date: '2026-04-28', type: 'support',   title: '搭架引枝',         desc: '搭建T型架，架高1.8m，三道铁丝，新梢长80cm开始引绑', operator: '张师傅' },
      { date: '2026-05-05', type: 'prune',     title: '疏枝定芽',         desc: '每株选留8-10根健壮基生枝，去除弱枝密枝', operator: '王师傅' },
      { date: '2026-05-15', type: 'fertilize', title: '花前追肥',         desc: '每株施复合肥20g+硫酸钾8g，提高坐果率', operator: '李师傅' },
      { date: '2026-05-25', type: 'pesticide', title: '预防白粉病',       desc: '喷施三唑酮1500倍液，均匀喷施叶面叶背', operator: '张师傅', safePeriod: '21天' },
      { date: '2026-06-10', type: 'water',     title: '果实膨大期灌溉',   desc: '每2-3天滴灌一次，毕业生需水量较大', operator: '李师傅' },
      { date: '2026-06-20', type: 'fertilize', title: '果实膨大期追肥',   desc: '叶面喷施0.3%磷酸二氢钾+0.2%硼砂，每7天一次共3次', operator: '李师傅' },
      { date: '2026-07-02', type: 'pesticide', title: '防治灰霉病',       desc: '喷施腐霉利800倍液，重点喷施果穗和花器', operator: '张师傅', safePeriod: '14天' },
      { date: '2026-07-10', type: 'harvest',   title: '夏果开始采收',     desc: '果实95%转色且有光泽时采收，单果大、产量高', operator: '王师傅' }
    ]
  },
  {
    id: 'hongzuan',
    name: '红钻',
    latinName: '国内杂交 · 双季红树莓',
    description: '双季红树莓，老牌优秀红树莓品种。其枝条直立性好，根蘖旺，成活率高。果实鲜红周正，大小中等，其口味甜度高，酸度低，香味浓郁。是一款很适合新手种植的一个红树莓品种。',
    color: '#DC143C',
    batchNo: 'HX-HZ-2609-012',
    plantDate: '2026-03-15',
    features: {
      fruitWeight: '中等 · 鲜红周正',
      sweetness: '甜度高 · 酸度低',
      harvestSeason: '双季',
      yield: '根蘖旺 · 成活率高',
      coldHardiness: '—',
      diseaseResistance: '香味浓郁 · 适合新手'
    },
    plantTraits: {
      type: '双季红树莓',
      height: '枝条直立性好',
      thorn: '—',
      fruitShape: '周正中等果',
      fruitColor: '鲜红色',
      firmness: '—',
      flavor: '甜度高、酸度低，香味浓郁',
      region: '全国大部分地区 · 新手推荐'
    },
    careGuide: [
      '双季红树莓老牌品种，非常适合新手种植',
      '枝条直立性好，根蘖旺，成活率高，管理粗放',
      '果实鲜红周正，甜度高、酸度低、香味浓郁',
      '选择光照充足处种植，定期引枝绑缚',
      '常规水肥管理即可丰产，注意疏除过密根蘖苗'
    ],
    cultivationLog: [
      { date: '2026-03-15', type: 'soil',      title: '整地定植',       desc: '行距2m株距0.5m，每亩施腐熟牛粪2500kg+过磷酸钙60kg', operator: '王师傅' },
      { date: '2026-03-20', type: 'water',     title: '定植浇水',       desc: '浇透定根水，行间覆盖黑色抑草布', operator: '李师傅' },
      { date: '2026-04-05', type: 'inspect',   title: '成活检查',       desc: '成活率98%，枝条直立性好，根蘖开始萌发，长势旺', operator: '王师傅' },
      { date: '2026-04-18', type: 'fertilize', title: '追施提苗肥',     desc: '每株施尿素15g，结合浇水冲施', operator: '李师傅' },
      { date: '2026-05-02', type: 'support',   title: '搭架引枝',       desc: '红钻直立性好，搭简易T型架（架高1.6m）辅助支撑即可', operator: '张师傅' },
      { date: '2026-05-10', type: 'prune',     title: '疏除根蘖苗',     desc: '根蘖旺，疏除过密根蘖苗，每株选留8-10根健壮枝', operator: '王师傅' },
      { date: '2026-05-18', type: 'fertilize', title: '花前追肥',       desc: '每株施复合肥20g+硫酸钾8g', operator: '李师傅' },
      { date: '2026-05-28', type: 'pesticide', title: '预防白粉病',     desc: '喷施三唑酮1500倍液，叶面叶背均匀喷施', operator: '张师傅', safePeriod: '21天' },
      { date: '2026-06-08', type: 'water',     title: '果实膨大期灌溉', desc: '滴灌每2-3天一次，保持土壤湿润', operator: '李师傅' },
      { date: '2026-06-18', type: 'fertilize', title: '叶面追肥',       desc: '喷施0.3%磷酸二氢钾+0.2%硼砂，增甜提质', operator: '李师傅' },
      { date: '2026-06-28', type: 'harvest',   title: '夏果开始采收',   desc: '果实鲜红周正，甜度高、酸度低、香味浓郁，新手友好品种表现稳定', operator: '王师傅' },
      { date: '2026-09-01', type: 'harvest',   title: '秋果开始采收',   desc: '当年生枝秋果成熟，双季挂果丰产', operator: '王师傅' }
    ]
  },
  {
    id: 'fengqiu',
    name: '丰秋',
    latinName: '秋福 · 双季早熟红树莓',
    description: '双季红树莓，早熟品种。成株高1.2米-1.5米左右，果实中等大小，硬度适中偏软，口感甜酸比7:3。耐寒，耐土壤贫瘠，皮实好养。',
    color: '#E8453C',
    batchNo: 'HX-FQ-2609-013',
    plantDate: '2026-03-16',
    features: {
      fruitWeight: '中等大小',
      sweetness: '甜酸比 7:3',
      harvestSeason: '双季 · 早熟',
      yield: '—',
      coldHardiness: '耐寒',
      diseaseResistance: '耐土壤贫瘠 · 皮实好养'
    },
    plantTraits: {
      type: '双季红树莓 · 早熟',
      height: '1.2-1.5m',
      thorn: '—',
      fruitShape: '中等果形',
      fruitColor: '鲜红色',
      firmness: '适中偏软',
      flavor: '口感甜酸比7:3，清甜适口',
      region: '耐寒地区 · 贫瘠土壤可种'
    },
    careGuide: [
      '早熟双季红树莓，皮实好养，新手友好',
      '成株高1.2-1.5m，选择排水良好的土壤即可种植',
      '耐寒、耐土壤贫瘠，适应性强',
      '果实硬度适中偏软，成熟后及时采收',
      '甜酸比约7:3，鲜食风味佳'
    ],
    cultivationLog: [
      { date: '2026-03-16', type: 'soil',      title: '整地定植',       desc: '行距2m株距0.5m，丰秋耐寒耐贫瘠，每亩施腐熟牛粪2500kg即可', operator: '王师傅' },
      { date: '2026-03-21', type: 'water',     title: '定植浇水',       desc: '浇透定根水，覆盖黑色地膜提高地温', operator: '李师傅' },
      { date: '2026-04-04', type: 'inspect',   title: '成活检查',       desc: '成活率97%，早熟品种萌芽早，皮实好养', operator: '王师傅' },
      { date: '2026-04-16', type: 'fertilize', title: '追施提苗肥',     desc: '每株施尿素15g+复合肥15g', operator: '李师傅' },
      { date: '2026-04-28', type: 'support',   title: '搭架引枝',       desc: '搭T型架高1.5m，成株1.2-1.5m，引枝绑缚', operator: '张师傅' },
      { date: '2026-05-06', type: 'prune',     title: '疏枝定梢',       desc: '每株留8根左右健壮枝，疏除弱枝', operator: '王师傅' },
      { date: '2026-05-14', type: 'fertilize', title: '花前追肥',       desc: '每株施复合肥18g+硫酸钾6g', operator: '李师傅' },
      { date: '2026-05-24', type: 'pesticide', title: '物理防虫',       desc: '挂黄色粘虫板每亩30块，早熟品种坐果早提前防虫', operator: '张师傅', safePeriod: '0天(物理防治)' },
      { date: '2026-06-02', type: 'water',     title: '果实发育期灌溉', desc: '早熟品种果实发育快，每2-3天滴灌一次', operator: '李师傅' },
      { date: '2026-06-10', type: 'fertilize', title: '叶面追肥',       desc: '喷施0.3%磷酸二氢钾，促早熟转色', operator: '李师傅' },
      { date: '2026-06-20', type: 'harvest',   title: '夏果开始采收',   desc: '早熟品种率先上市，果实中等、甜酸比约7:3；硬度偏软，成熟后及时采收', operator: '王师傅' },
      { date: '2026-08-28', type: 'harvest',   title: '秋果开始采收',   desc: '当年生枝秋果成熟，秋福品种秋果丰产，分批采收至10月', operator: '王师傅' }
    ]
  },
  {
    id: 'hongmeng',
    name: '红梦',
    latinName: '山楂叶悬钩子实生优选 · 单季老枝挂果',
    description: '单季带刺老枝挂果优选山楂叶悬钩子。其果实透亮，甜度高，风味足。植株抗逆性强，果期果量很大。但红梦属于老枝挂果冬季保留老枝，不能贴地平剪，切记！！！',
    color: '#D9322F',
    batchNo: 'HX-HM-2609-014',
    plantDate: '2026-03-17',
    features: {
      fruitWeight: '—',
      sweetness: '甜度高 · 风味足',
      harvestSeason: '单季 · 老枝挂果',
      yield: '果期果量大',
      coldHardiness: '—',
      diseaseResistance: '带刺 · 抗逆性强'
    },
    plantTraits: {
      type: '单季山楂叶悬钩子 · 老枝挂果',
      height: '—',
      thorn: '带刺',
      fruitShape: '—',
      fruitColor: '果实透亮鲜红',
      firmness: '—',
      flavor: '甜度高，风味足',
      region: '冬季必须保留老枝，不可贴地平剪'
    },
    careGuide: [
      '单季带刺山楂叶悬钩子优选，老枝挂果品种',
      '冬季必须保留老枝，切记不可贴地平剪，否则来年无果',
      '果实透亮、甜度高、风味足，果期果量大',
      '植株有刺，修剪采摘时注意防护',
      '抗逆性强，常规管理即可丰产'
    ],
    cultivationLog: [
      { date: '2026-03-17', type: 'soil',      title: '整地定植',       desc: '行距2m株距0.6m，每亩施腐熟羊粪2500kg作基肥；山楂叶悬钩子实生优选，植株有倒刺，作业戴厚手套', operator: '王师傅' },
      { date: '2026-03-22', type: 'water',     title: '定植浇水',       desc: '浇透定根水，覆盖黑色地膜，抗逆性强缓苗快', operator: '李师傅' },
      { date: '2026-04-08', type: 'inspect',   title: '成活检查',       desc: '成活率98%，萌芽早，老枝上花芽已显现', operator: '王师傅' },
      { date: '2026-04-20', type: 'fertilize', title: '追施提苗肥',     desc: '每株施尿素12g+复合肥15g，薄肥勤施', operator: '李师傅' },
      { date: '2026-05-05', type: 'support',   title: '搭架引枝',       desc: '搭T型架引绑老枝，老枝为结果枝需重点保护，作业注意防刺', operator: '张师傅' },
      { date: '2026-05-12', type: 'prune',     title: '疏除病弱枝',     desc: '仅疏除病枝弱枝，保留健壮老枝——红梦为老枝挂果品种，切记不可贴地平剪', operator: '王师傅' },
      { date: '2026-05-20', type: 'fertilize', title: '花前追肥',       desc: '每株施复合肥20g+硫酸钾8g，促老枝花果发育', operator: '李师傅' },
      { date: '2026-06-01', type: 'pesticide', title: '预防病害',       desc: '喷施代森锰锌600倍液，枝叶浓密重点喷内膛', operator: '张师傅', safePeriod: '15天' },
      { date: '2026-06-10', type: 'water',     title: '果期灌溉',       desc: '滴灌每2-3天一次，果量大需保证水分', operator: '李师傅' },
      { date: '2026-06-18', type: 'fertilize', title: '叶面追肥',       desc: '喷施0.3%磷酸二氢钾，提升果实糖度风味', operator: '李师傅' },
      { date: '2026-06-25', type: 'harvest',   title: '开始采收',       desc: '果实透亮鲜红，甜度高、风味足，果期果量大；倒刺锋利，采摘时格外小心', operator: '王师傅' },
      { date: '2026-08-25', type: 'prune',     title: '采后修剪',       desc: '采果后疏除已结果老弱枝，新枝留作来年结果母枝；冬季修剪必须保留健壮老枝，严禁贴地平剪', operator: '王师傅' }
    ]
  },
  // ==================== 黄/特色 ====================
  {
    id: 'golden-autumn',
    name: '黄树莓金秋',
    latinName: 'Rubus idaeus "Golden Autumn"',
    description: '沈阳农业大学选育的优质黄树莓品种，经黑龙江省农科院哈尔滨地区引种试验，表现出极强的抗寒能力和优异品质。果实金莹透亮呈琥珀色，可溶性固形物11.8%，总糖6.4%，酸味极少，香甜馥郁。枝条粗壮长势强，平均株高150cm，出汁率59%，维C含量42.35mg/100g，综合品质优于一般红树莓品种。是高端采摘园和精品水果市场的热门黄树莓品种。',
    color: '#FFC300',
    batchNo: 'HX-JQ-2608-004',
    plantDate: '2026-03-10',
    features: {
      fruitWeight: '4-6g',
      sweetness: '11-12°Brix',
      harvestSeason: '7月上旬至7月下旬',
      yield: '每株约1.8-2.5kg',
      coldHardiness: '-30°C（极耐寒）',
      diseaseResistance: '较强'
    },
    plantTraits: {
      type: '夏果型黄树莓',
      height: '140-160cm',
      thorn: '少刺',
      fruitShape: '近圆锥形',
      fruitColor: '琥珀金色 · 晶莹透亮',
      firmness: '较软 · 不耐储运',
      flavor: '香甜少酸，风味独特馥郁，黄树莓特有清香，回味悠长',
      region: '东北、西北、华北北部等寒冷地区（哈尔滨地区可露地越冬）'
    },
    nutrition: {
      vitaminC: '42.35mg/100g',
      anthocyanin: '微量（黄酮类含量高）',
      ellagicAcid: '富含',
      highlights: '维C含量高于苹果5倍，含鞣花酸、水杨酸、维生素E、SOD等抗衰老物质，黄酮类化合物含量突出，传统中医认为黄树莓有补肾固精、祛风明目之功效'
    },
    storage: {
      coldStorage: '0-4°C 冷藏可保鲜2-3天',
      tips: '金秋果肉较软不耐储运，建议当天采收当天食用或加工；采摘时轻拿轻放，小盒分装避免挤压，不建议清洗后存放',
      eating: '鲜食最佳，鲜榨黄树莓汁、制作高端果酱、搭配奶酪板、烘焙糕点、制作黄树莓酒'
    },
    careGuide: [
      '金秋极耐寒，东北可露地越冬，适合冷凉气候地区种植',
      '每2-3天浇一次水，保持土壤湿润，高温期需勤浇水',
      '秋季重施有机基肥每亩2500kg，生长期追施氮磷钾复合肥',
      '采用T型架，架高1.5m，枝条粗壮需及时引绑上架',
      '疏花疏果可提高单果重，每枝保留8-12个花序',
      '重点防止果蝇危害果实，可挂粘虫板或防虫网，黄树莓抗病性整体良好'
    ],
    cultivationLog: [
      { date: '2026-03-10', type: 'soil',      title: '整地定植',         desc: '深翻30cm，采用高垄栽培（金秋怕积水），行距2m株距0.5m，每亩施腐熟羊粪2500kg', operator: '王师傅' },
      { date: '2026-03-15', type: 'water',     title: '定植浇水',         desc: '定植后浇透定根水，覆盖地膜保墒提高地温', operator: '李师傅' },
      { date: '2026-04-02', type: 'inspect',   title: '成活检查',         desc: '成活率96%，金秋萌芽整齐枝条粗壮', operator: '王师傅' },
      { date: '2026-04-14', type: 'fertilize', title: '追施提苗肥',       desc: '每株施尿素15g+复合肥15g，促进春梢生长', operator: '李师傅' },
      { date: '2026-04-28', type: 'support',   title: '搭架引枝',         desc: '搭建T型架，架高1.5m，枝条粗壮每株留6-8根主枝', operator: '张师傅' },
      { date: '2026-05-05', type: 'prune',     title: '疏花疏果',         desc: '疏除弱枝和过密花序，每结果枝留8-12个花序提高单果重', operator: '王师傅' },
      { date: '2026-05-15', type: 'fertilize', title: '花前追肥',         desc: '每株施复合肥18g+硫酸钾5g，黄树莓增甜需足量钾肥', operator: '李师傅' },
      { date: '2026-05-22', type: 'pesticide', title: '挂粘虫板防果蝇',   desc: '每亩挂黄色粘虫板30块，果实转色期重点防虫', operator: '张师傅', safePeriod: '0天(物理防治)' },
      { date: '2026-06-08', type: 'water',     title: '果实膨大期灌溉',   desc: '每2天滴灌一次，金秋果肉饱满需水量大', operator: '李师傅' },
      { date: '2026-06-20', type: 'fertilize', title: '叶面追肥',         desc: '喷施0.3%磷酸二氢钾+0.1%钙肥，增加果皮硬度减少落果', operator: '李师傅' },
      { date: '2026-07-05', type: 'harvest',   title: '开始采收',         desc: '果实由绿黄转至琥珀金黄时采收，每天上午采摘，当天销售为佳', operator: '王师傅' }
    ]
  },
  {
    id: 'bubblegum',
    name: '泡泡糖',
    latinName: '黄色蓬蘽优选 · 单季带刺悬钩子',
    description: '单季带刺悬钩子，泡泡糖为黄蓬蘽人工优选品系。果实呈金黄色，自带浓郁泡泡糖香甜味道，高甜低酸，糖度大概17-19度。香味独特。果期集中在4-6月份，植株有倒刺，需要格外小心。',
    color: '#F4A623',
    batchNo: 'HX-PP-2609-015',
    plantDate: '2026-03-18',
    features: {
      fruitWeight: '—',
      sweetness: '17-19°Brix',
      harvestSeason: '单季 · 4-6月',
      yield: '—',
      coldHardiness: '—',
      diseaseResistance: '带倒刺 · 高甜低酸'
    },
    plantTraits: {
      type: '单季黄蓬蘽优选',
      height: '—',
      thorn: '有倒刺（需格外小心）',
      fruitShape: '—',
      fruitColor: '金黄色',
      firmness: '—',
      flavor: '浓郁泡泡糖香甜味道，高甜低酸，香味独特',
      region: '果期集中在4-6月份'
    },
    careGuide: [
      '单季带刺黄蓬蘽人工优选品系，果期集中在4-6月',
      '果实金黄色，自带浓郁泡泡糖香甜味，糖度17-19度',
      '高甜低酸、香味独特，成熟后及时采收品尝',
      '植株有倒刺，采摘修剪务必格外小心，建议戴厚手套',
      '野生悬钩子驯化品种，适应性强，常规管理即可'
    ],
    cultivationLog: [
      { date: '2026-03-18', type: 'soil',      title: '整地定植',       desc: '起垄栽培，行距1.8m株距0.6m，每亩施腐熟羊粪2500kg；黄蓬蘽优选品系，植株有倒刺，作业戴厚手套', operator: '王师傅' },
      { date: '2026-03-23', type: 'water',     title: '定植浇水',       desc: '浇透定根水，覆盖黑色地膜保墒', operator: '李师傅' },
      { date: '2026-04-02', type: 'inspect',   title: '现蕾检查',       desc: '成活率99%，果期早（4-6月），部分植株已现蕾', operator: '王师傅' },
      { date: '2026-04-10', type: 'fertilize', title: '花前追肥',       desc: '果期早，花前及时补施磷钾肥，每株复合肥20g+硫酸钾8g', operator: '李师傅' },
      { date: '2026-04-20', type: 'support',   title: '立杆支撑',       desc: '立杆简易牵引结果枝，避免果枝倒伏贴地', operator: '张师傅' },
      { date: '2026-04-28', type: 'pesticide', title: '花期物理防虫',   desc: '花期以物理防治为主，挂黄色粘虫板，保护授粉', operator: '张师傅', safePeriod: '0天(物理防治)' },
      { date: '2026-05-05', type: 'water',     title: '果期灌溉',       desc: '果实发育期保持土壤湿润，每2-3天滴灌一次', operator: '李师傅' },
      { date: '2026-05-12', type: 'harvest',   title: '首批果采收',     desc: '果实转金黄色即可采收，自带浓郁泡泡糖香甜味，糖度17-19度、高甜低酸，成熟后及时品尝', operator: '王师傅' },
      { date: '2026-05-25', type: 'inspect',   title: '盛果期巡检',     desc: '盛果期果量大，每日巡查熟果；倒刺锋利，采摘务必小心', operator: '王师傅' },
      { date: '2026-06-15', type: 'harvest',   title: '末批果采收',     desc: '果期（4-6月）结束，采收末批果实', operator: '王师傅' },
      { date: '2026-07-05', type: 'prune',     title: '果后修剪',       desc: '果期结束后清理结果老枝，疏除过密枝，保持通风', operator: '王师傅' },
      { date: '2026-08-10', type: 'soil',      title: '秋季施基肥',     desc: '行间沟施腐熟有机肥，恢复树势，为明年果期储备养分', operator: '李师傅' }
    ]
  }
]

export default varieties

export function getVarietyById(id) {
  return varieties.find(v => v.id === id)
}
