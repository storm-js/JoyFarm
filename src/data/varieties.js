// 树莓品种图片
// hero/farm 是 AI 生成并下载到本地 public/images/ 的大图（不参与防盗链）
// 4个品种果实图直接引用 AI 图片生成API的CDN链接，浏览器直接访问正常
// 如果以后想换成自己的照片，把对应URL改成 '/images/xxx.jpg' 然后把照片放进 public/images/ 即可
export const IMAGES = {
  hero: '/images/hero.jpg',
  blackJade: '/images/black-jade.png',
  ponca: '/images/ponca.png',
  graduate: '/images/graduate.png',
  goldenAutumn: '/images/golden-autumn.jpg',
  farm: '/images/farm.jpg'
}

export function getVarietyImage(id) {
  const map = {
    'black-jade': IMAGES.blackJade,
    'ponca': IMAGES.ponca,
    'graduate': IMAGES.graduate,
    'golden-autumn': IMAGES.goldenAutumn
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
  {
    id: 'black-jade',
    name: '黑莓墨玉',
    latinName: 'Rubus fruticosus "Jade"',
    description: '欢喜农场优选引进的大果黑莓品种，经本地风土驯化培育而成。果实紫黑油亮，平均单果重达8-10g，最大单果15g，为目前黑莓中果形最大的品种之一。风味浓甜微酸，香气馥郁，果肉紧实耐储运，被誉为"黑莓之王"。适合高端鲜食与加工制作果酱、果酒。',
    color: '#2c0a33',
    batchNo: 'HX-MY-2608-001',
    plantDate: '2026-03-05',
    features: {
      fruitWeight: '8-10g（最大15g）',
      sweetness: '10-12°Brix',
      harvestSeason: '6月下旬至7月下旬',
      yield: '每株约3-4kg',
      coldHardiness: '-17°C',
      diseaseResistance: '较强'
    },
    plantTraits: {
      type: '夏果型黑莓',
      height: '180-220cm',
      thorn: '少刺',
      fruitShape: '长圆锥形',
      fruitColor: '紫黑色 · 油亮有光泽',
      firmness: '紧实 · 耐储运',
      flavor: '浓甜微酸，果香浓郁醇厚，黑莓特有香气突出',
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
      '采收后剪除结果老枝，保留8-10根当年生健壮枝条',
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
      { date: '2026-06-28', type: 'harvest',   title: '开始采收',   desc: '果实90%转黑且有光泽时采收，选晴天早晨露水干后采摘', operator: '王师傅' }
    ]
  },
  {
    id: 'ponca',
    name: '黑莓庞卡',
    latinName: 'Rubus fruticosus "Ponca"',
    description: '美国阿肯色州立大学最新黑莓代表品种之一（Sweet-Ark®系列），被评价为阿肯色系最甜的黑莓品种。可溶性固形物含量常超过13%，酸度低于1%。果实中等大小，紧实耐储，采后品质极佳。枝条节间短，植株紧凑，管理方便，抗寒抗锈病能力优秀，是商品化规模种植的首选黑莓品种。',
    color: '#1a1a2e',
    batchNo: 'HX-PK-2608-002',
    plantDate: '2026-03-02',
    features: {
      fruitWeight: '6-8g（平均6.8g）',
      sweetness: '11-13°Brix',
      harvestSeason: '6月中旬至7月中旬',
      yield: '每株约3.5-5kg',
      coldHardiness: '-18°C',
      diseaseResistance: '强'
    },
    plantTraits: {
      type: '夏果型黑莓',
      height: '150-180cm',
      thorn: '无刺',
      fruitShape: '卵圆形',
      fruitColor: '深黑色 · 有光泽',
      firmness: '极紧实 · 耐储运性极佳',
      flavor: '超甜少酸，几乎无涩味，黑莓香气浓郁柔和，回味佳',
      region: '华北、华中、华东、西南（6-9区）'
    },
    nutrition: {
      vitaminC: '25mg/100g',
      anthocyanin: '90-150mg/100g',
      ellagicAcid: '富含',
      highlights: '阿肯色州立大学评价为"甜度最高的黑莓品种"，富含花青素、维生素E、水杨酸，抗氧化成分全面，鞣花酸含量高于普通水果数倍'
    },
    storage: {
      coldStorage: '0-2°C 冷藏可保鲜10-14天',
      tips: '庞卡为所有黑莓中耐储性最好的品种之一，商品性突出；储存期不易掉色、不易出水，7天以上仍保持紧实口感',
      eating: '高端鲜食首选、制作黑莓酱、鲜榨黑莓汁、酸奶配料、甜点装饰、速冻出口'
    },
    careGuide: [
      '庞卡喜光喜肥，选择向阳肥沃地块，宜采用高垄栽培',
      '每3-4天浇水一次，结果期保持土壤湿润但不积水',
      '基肥重施腐熟有机肥每亩2500kg，生长期每月一次复合肥',
      '植株紧凑，适合桩柱式或T型架，间距2m×0.7m即可',
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
      { date: '2026-06-22', type: 'harvest',   title: '开始采收',       desc: '果实完全转黑发亮时采收，每2-3天采一次，庞卡挂果期长', operator: '王师傅' }
    ]
  },
  {
    id: 'graduate',
    name: '红树莓毕业生',
    latinName: 'Rubus idaeus "Graduate"',
    description: '北美引进的纯甜大果型红树莓新品种，果实成熟后可溶性固形物可达12-14°Brix，完全无酸不涩，名副其实的"纯甜毕业生"。果实圆整饱满，单果重可达7-10g，是红树莓中果形最大的品种之一。果肉硬度高，货架期长，鲜食品质无可挑剔，深受高端市场和采摘园的欢迎。',
    color: '#C41E3A',
    batchNo: 'HX-BY-2608-003',
    plantDate: '2026-03-08',
    features: {
      fruitWeight: '7-10g（最大12g）',
      sweetness: '12-14°Brix',
      harvestSeason: '7月上旬至8月上旬',
      yield: '每株约2.5-3.5kg',
      coldHardiness: '-25°C',
      diseaseResistance: '中'
    },
    plantTraits: {
      type: '夏果型红树莓',
      height: '160-200cm',
      thorn: '少刺',
      fruitShape: '圆整饱满近球形',
      fruitColor: '正红色 · 色泽均匀',
      firmness: '较硬 · 货架期长',
      flavor: '纯甜无酸，无涩味，树莓清香浓郁，入口回甘',
      region: '东北、华北、西北、西南高海拔、华东冷凉地区'
    },
    nutrition: {
      vitaminC: '28mg/100g',
      anthocyanin: '40-80mg/100g',
      ellagicAcid: '富含',
      highlights: '红树莓中少有的纯甜型品种，维C与花青素含量突出，含天然水杨酸、SOD、黄酮类，被欧美营养学界称为"红宝石水果"'
    },
    storage: {
      coldStorage: '0-4°C 冷藏可保鲜5-7天',
      tips: '纯甜品种宜即采即食或及时冷藏，避免高温发酵；果粒完整紧实，冷冻后风味保存好，适合制作树莓速冻果',
      eating: '高端鲜食、搭配酸奶麦片、制作树莓慕斯、树莓果酱、调制鸡尾酒、烘焙蛋糕装饰'
    },
    careGuide: [
      '毕业生喜冷凉气候，宜选通风透光、排水良好的沙壤土',
      '每2-3天浇一次水，红树莓根系浅忌干旱忌积水',
      '基肥以腐熟牛粪为主每亩2500kg，花期、果实膨大期各追一次磷钾肥',
      '采用T型架，架高1.8m，新梢长至1m时及时引绑上架',
      '修剪：每株留8-10根健壮基生枝，采果后彻底剪除老枝',
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
      { date: '2026-07-10', type: 'harvest',   title: '开始采收',         desc: '果实95%转色且有光泽时采收，上午露水干后采摘，每1-2天采一次', operator: '王师傅' }
    ]
  },
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
  }
]

export default varieties

export function getVarietyById(id) {
  return varieties.find(v => v.id === id)
}
