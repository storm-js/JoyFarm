/**
 * 溯源码生成与管理工具
 * 
 * 溯源码格式：RSP-{品种缩写}-{年月}-{序号}
 * 例如：RSP-RH-2608-0001
 * 
 * 品种缩写：
 *  RH  = Red Hat (红帽)
 *  GD  = Golden Dome (金顶)
 *  BJ  = Black Jewel (黑宝石)
 *  AB  = Autumn Bliss (秋怡)
 */

const VARIETY_CODES = {
  'red-hat': 'RH',
  'golden-dome': 'GD',
  'black-jewel': 'BJ',
  'autumn-bliss': 'AB'
}

/**
 * 生成溯源码
 * @param {string} varietyId - 品种ID
 * @param {string} version - 版本号 (YYYY-MM)
 * @param {number} seq - 序号
 */
export function generateTraceCode(varietyId, version, seq = 1) {
  const abbr = VARIETY_CODES[varietyId] || 'XX'
  const ym = version ? version.replace('-', '').slice(2) : '0000'
  const seqStr = String(seq).padStart(4, '0')
  return `RSP-${abbr}-${ym}-${seqStr}`
}

/**
 * 解析溯源码
 */
export function parseTraceCode(code) {
  const parts = code.split('-')
  if (parts.length !== 4 || parts[0] !== 'RSP') return null
  const abbr = parts[1]
  const ym = parts[2]
  const seq = parts[3]
  const varietyId = Object.entries(VARIETY_CODES).find(([_, v]) => v === abbr)?.[0]
  if (!varietyId) return null
  const year = '20' + ym.slice(0, 2)
  const month = ym.slice(2, 4)
  return {
    varietyId,
    version: `${year}-${month}`,
    seq: parseInt(seq)
  }
}

/**
 * 生成完整的溯源信息
 */
export function getTraceInfo(varietyId, version, variety) {
  const code = generateTraceCode(varietyId, version)
  const abbr = VARIETY_CODES[varietyId] || 'XX'
  const date = new Date()
  const traceDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
  
  return {
    code,
    abbr,
    date: traceDate,
    varietyName: variety?.name || '',
    origin: '树莓庄园·生态种植基地',
    farm: ' 欢喜农场'
  }
}

export { VARIETY_CODES }
