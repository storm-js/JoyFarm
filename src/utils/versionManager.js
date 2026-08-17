/**
 * 版本管理工具
 * 用于添加和管理养护信息版本
 * 
 * 使用说明：
 * 1. 每月需要更新养护信息时，添加新版本
 * 2. 版本号格式：YYYY-MM（如 2026-08）
 * 3. 每个品种可以有多个版本，按时间顺序排列
 * 
 * 示例代码（在控制台或脚本中使用）：
 * import { addCareVersion } from './utils/versionManager.js'
 * 
 * // 为红帽树莓添加2026年11月的养护信息
 * addCareVersion('red-hat', '2026-11', {
 *   title: '11月养护要点',
 *   tasks: [
 *     { type: 'water', text: '减少浇水频率', icon: '💧' },
 *     ...
 *   ],
 *   tips: '冬季来临前的准备工作'
 * })
 */

import varieties from '../data/varieties.js'

/**
 * 添加新版本养护信息
 * @param {string} varietyId - 品种ID
 * @param {string} version - 版本号 (YYYY-MM)
 * @param {Object} data - 养护信息数据
 */
export function addCareVersion(varietyId, version, data) {
  const variety = varieties.find(v => v.id === varietyId)
  if (!variety) {
    throw new Error(`品种 ${varietyId} 不存在`)
  }
  
  if (!/^\d{4}-\d{2}$/.test(version)) {
    throw new Error('版本号格式错误，应为 YYYY-MM')
  }

  if (variety.careVersions.some(v => v.version === version)) {
    throw new Error(`版本 ${version} 已存在`)
  }

  const newVersion = {
    version,
    title: data.title || `${version} 养护要点`,
    tasks: data.tasks || [],
    tips: data.tips || ''
  }

  variety.careVersions.push(newVersion)
  sortVersions(variety)
  
  return newVersion
}

/**
 * 更新已有版本的养护信息
 * @param {string} varietyId - 品种ID
 * @param {string} version - 版本号
 * @param {Object} data - 新的养护信息数据
 */
export function updateCareVersion(varietyId, version, data) {
  const variety = varieties.find(v => v.id === varietyId)
  if (!variety) {
    throw new Error(`品种 ${varietyId} 不存在`)
  }

  const versionIndex = variety.careVersions.findIndex(v => v.version === version)
  if (versionIndex === -1) {
    throw new Error(`版本 ${version} 不存在`)
  }

  variety.careVersions[versionIndex] = {
    ...variety.careVersions[versionIndex],
    ...data
  }

  return variety.careVersions[versionIndex]
}

/**
 * 删除版本
 * @param {string} varietyId - 品种ID
 * @param {string} version - 版本号
 */
export function deleteCareVersion(varietyId, version) {
  const variety = varieties.find(v => v.id === varietyId)
  if (!variety) {
    throw new Error(`品种 ${varietyId} 不存在`)
  }

  const initialLength = variety.careVersions.length
  variety.careVersions = variety.careVersions.filter(v => v.version !== version)
  
  return variety.careVersions.length < initialLength
}

/**
 * 按版本号排序（升序）
 */
function sortVersions(variety) {
  variety.careVersions.sort((a, b) => a.version.localeCompare(b.version))
}

/**
 * 获取所有品种列表（用于管理）
 */
export function getAllVarieties() {
  return varieties.map(v => ({
    id: v.id,
    name: v.name,
    versions: v.careVersions.map(cv => cv.version)
  }))
}

/**
 * 获取指定品种的最新版本号
 */
export function getLatestVersion(varietyId) {
  const variety = varieties.find(v => v.id === varietyId)
  if (!variety || variety.careVersions.length === 0) return null
  return variety.careVersions[variety.careVersions.length - 1].version
}

/**
 * 生成购买链接（包含版本参数）
 * @param {string} baseUrl - 基础URL
 * @param {string} varietyId - 品种ID
 * @param {string} purchaseMonth - 购买月份 (YYYY-MM)
 */
export function generatePurchaseUrl(baseUrl, varietyId, purchaseMonth) {
  return `${baseUrl}/variety/${varietyId}?v=${purchaseMonth}`
}
