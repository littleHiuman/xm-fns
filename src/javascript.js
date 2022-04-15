import { tipsParams } from './utils'

/**
 * @name: filterNumberKeys
 * @description: 过滤对象中数值形式的key
 * @param {Object} obj 对象
 * @return {Object} 处理后的对象
 */
export function filterNumberKeys(obj) {
  if (variableType(obj) !== 'Object') {
    return tipsParams('filterNumberKeys')
  }
  const temObj = {}
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key) && Number.isNaN(+key)) {
      const value = obj[key]
      temObj[key] = value
    }
  }
  return temObj
}

/**
 * @name: capitalizedFirstLetter
 * @description: 首字母大写
 * @param {String} params
 * @return {String}
 */
function capitalizedFirstLetter(params) {
  if (variableType(params) !== 'String') {
    return tipsParams('capitalizedFirstLetter')
  }
  if (!/^[a-zA-Z]+$/g.test(params)) {
    return tipsParams('capitalizedFirstLetter')
  }
  return params.slice(0, 1).toUpperCase() + params.slice(1)
}

/**
 * @name: percentNum
 * @description: 得到两数相除的百分数
 * @param {Number} num 分子
 * @param {Number} num2 分母
 * @param {Number} type 默认为1（1：得到的是保留两位小数的数；0：得到的是整数）
 * @return {String} 返回计算后的结果加上百分号，如33.33%
 */
function percentNum(num, num2, type = 1) {
  if (variableType(num) !== 'Number' || variableType(num2) !== 'Number') {
    return tipsParams('percentNum')
  }
  if ([0, 1].indexOf(type) === -1) {
    return tipsParams('percentNum')
  }
  if (num === 0 || num2 === 0) {
    if (type == 0) {
      return '0%'
    }
    return '0.00%'
  }

  if (type === 0) {
    return `${Math.round((num / num2) * 100)}%`
  }
  return `${(Math.round((num / num2) * 10000) / 100).toFixed(2)}%`
}

/**
 * @name: variableType
 * @description: 获取变量类型
 * @param {*} params
 * @return {String} 变量的类型（首字母大写的形式）
 */
export function variableType(params) {
  const res = Object.prototype.toString.call(params)
  return res.slice(8, res.length - 1)
}

/**
 * @name: uniqueArray
 * @description: 数组去重
 * @param {Array} arr
 * @return {Array}
 */
function uniqueArray(arr) {
  if (variableType(arr) !== 'Array') {
    return tipsParams('uniqueArray')
  }
  if (arr.length === 0) {
    return arr
  }

  return [...new Set(arr)]
}

/**
 * @name: uniqueComplexArray
 * @description: 对象数组去重
 * @param {Array} arr
 * @param {String} key 对象的唯一标识属性
 * @param {Number} type 默认为1（1：如果有重复，保留先添加的数据 0：如果有重复，保留后添加的数据）
 * @return {Array}
 */
function uniqueComplexArray(arr, key, type = 1) {
  if (variableType(arr) !== 'Array') {
    return tipsParams('uniqueComplexArray')
  }
  if (variableType(key) !== 'String') {
    return tipsParams('uniqueComplexArray')
  }
  if ([0, 1].indexOf(type) === -1) {
    return tipsParams('uniqueComplexArray')
  }
  if (arr.length === 0) {
    return arr
  }
  if (type === 0) {
    arr = arr.reverse()
  }

  const map = new Map()
  const res = arr.filter(obj => !map.has(obj[key]) && map.set(obj[key], 1))

  if (type === 0) {
    return res.reverse()
  }
  return res
}

/**
 * @name: randomNums
 * @description: 获取随机整数
 * @param {Object} params
 * @param {Number} params.length 默认5
 * @param {Number} params.min 默认2
 * @param {Number} params.max 默认32
 * @return {Array}
 */
function randomNums(params = {}) {
  const { min = 2, max = 32 } = params
  let { length = 5 } = params
  if (
    variableType(length) !== 'Number' ||
    variableType(min) !== 'Number' ||
    variableType(max) !== 'Number'
  ) {
    return tipsParams('randomNums')
  }
  if (length <= 0 || max <= min) {
    return tipsParams('randomNums')
  }

  if (max - min < length) {
    length = max - min + 1
  }
  const arr = []
  for (let i = length; i > 0; i--) {
    const num = Math.round(Math.random() * (max - min)) + min
    if (!arr.includes(num)) {
      arr.push(num)
    }
  }
  return arr
}

/**
 * @name: getMinNMax
 * @description: 获取数组中的最小值和最大值
 * @param {Array} arr
 * @return {Object} 包含min和max属性的对象
 */
function getMinNMax(arr) {
  if (variableType(arr) !== 'Array') {
    return tipsParams('getMinNMax')
  }
  if (arr.length === 0) {
    return
  }
  let min = arr[0]
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return {
    min,
    max
  }
}

/**
 * @name: flatArray
 * @description: 数组拍平
 * @param {Array} arr
 * @return {Array}
 */
function flatArray(arr) {
  if (variableType(arr) !== 'Array') {
    return tipsParams('flatArray')
  }
  if (arr.length === 0) {
    return arr
  }

  return Array.prototype.flat.call(arr, Infinity)
}

/**
 * @name: getWeekDate
 * @description: 获取本周的日期和周几
 * @param {Number} startDay
 * @param {Boolean} showToday
 * @return {Array}
 */
function getWeekDate(startDay = -1, showToday = false) {
  // startDay -1代表今天开始，0代表周日开始
  // showToday 显示今日还是显示周几
  if ([-1, 0].indexOf(startDay) === -1) {
    return tipsParams('getWeekDate')
  }
  if (typeof showToday !== 'boolean') {
    return tipsParams('getWeekDate')
  }

  const dateObj = new Date()
  const date = dateObj.getDate()
  const day = dateObj.getDay()
  let i
  let start
  const result = []
  if ((startDay === 0 && day === 0) || startDay === -1) {
    start = 0
  } else if (startDay == 0 && day !== 0) {
    start = -day
  }
  for (i = start; i <= 6 + start; i++) {
    const dateObjTem = new Date()
    dateObjTem.setDate(date + i)
    result.push(getDateInfoNWeek(dateObjTem, day, showToday))
  }
  return result
}

/**
 * @name: getDateInfoNWeek
 * @description: 得到某天的日期和周几
 * @param {Date} dd 日期对象
 * @param {Number} day 今天是周几 0-6
 * @param {Boolean} showToday 显示今日还是显示周几
 * @return {Object} 包含date和week属性的对象
 */
export function getDateInfoNWeek(dd, day, showToday) {
  let m = dd.getMonth() + 1 //获取当前月份
  m = m < 10 ? `0${m}` : m
  let d = dd.getDate() //获取当前月份的日期
  d = d < 10 ? `0${d}` : d
  const w = dd.getDay() //获取星期几
  const weekStr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  let week = weekStr[w]
  if (showToday && day === w) {
    week = '今日'
  }
  return {
    date: `${m}/${d}`,
    week
  }
}

export default {
  filterNumberKeys,
  capitalizedFirstLetter,
  percentNum,
  variableType,
  uniqueArray,
  uniqueComplexArray,
  randomNums,
  getMinNMax,
  flatArray,
  getWeekDate
}
