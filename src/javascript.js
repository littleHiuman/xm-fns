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
  if (!/^[a-zA-Z\s]+$/g.test(params)) {
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

/**
 * @name: formatDate
 * @description: 格式化日期
 * @param {Date} dateObj 日期对象
 * @param {String} formatStr 标识
 * @return {String}
 */
function formatDate(dateObj, formatStr = 'YYYY-MM-DD') {
  if (!(dateObj instanceof Date)) {
    return tipsParams('formatDate')
  }
  const formatInfo = checkFormatDateSign(formatStr)
  if (!formatInfo) {
    return tipsParams('formatDate')
  }
  return concatFormatDate(dateObj, formatInfo)
}
/**
 * @name: checkFormatDateSign
 * @description: 检查标识
 * @param {String} formatStr 标识
 * @return {Object} 标识、分隔符
 */
function checkFormatDateSign(formatStr) {
  const signs = {
    Y: [2, 4],
    M: [1, 2],
    D: [1, 2],
    H: [1, 2],
    h: [1, 2],
    m: [1, 2],
    s: [1, 2]
  }
  const formatSign = formatStr.match(/[a-zA-Z]+/g)
  if (!formatSign) {
    return
  }
  const formatSignH = formatStr.match(/[Hh]+/g)
  if (formatSignH && formatSignH.length == 2) {
    return
  }
  for (const sign of formatSign) {
    const startLetter = sign[0]
    const len = sign.length
    if (signs[startLetter] && signs[startLetter].includes(len)) {
      const repeatStr = startLetter.repeat(len)
      if (repeatStr != sign) {
        return
      }
    } else {
      return
    }
  }
  const formatSplit = formatStr.match(/[^a-zA-Z]/g)
  if (!formatSplit) {
    return
  }
  if (formatSplit.length + 1 != formatSign.length) {
    return
  }
  return { formatSign, formatSplit }
}
/**
 * @name: concatFormatDate
 * @description: 拼接日期
 * @param {Date} dateObj 日期对象
 * @param {Object} formatInfo 标识、分隔符
 * @return {String}
 */
function concatFormatDate(dateObj, formatInfo) {
  const { formatSign, formatSplit } = formatInfo
  let splitIdx = 0
  let res = ''
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const date = dateObj.getDate()
  const hour = dateObj.getHours()
  const minutes = dateObj.getMinutes()
  const seconds = dateObj.getSeconds()
  // const A = hour > 12 ? 'PM' : 'AM'
  const obj = {
    Y: year,
    M: month,
    D: date,
    H: hour,
    h: hour > 12 ? hour - 12 : hour,
    m: minutes,
    s: seconds
  }
  for (const sign of formatSign) {
    const startLetter = sign[0]
    const len = sign.length
    const info = obj[startLetter]
    if (startLetter == 'Y' && len == 2) {
      res += `${info}`.slice(-2)
    } else if (len == 2) {
      res += fillZero(info, 2)
    } else {
      res += info
    }
    if (splitIdx < formatSplit.length) {
      res += formatSplit[splitIdx++]
    }
  }
  return res
}
/**
 * @name: fillStr
 * @description: 给数值或字符串补充内容以满足长度
 * @param {Number | String} str 数值或字符串
 * @param {Number} len 长度
 * @param {Number | String} fill 要补充的内容（数值或字符串）
 * @return {String}
 */
function fillStr(str, len, fill) {
  if (variableType(str) !== 'String' && variableType(str) !== 'Number') {
    return tipsParams('fillStr')
  }
  if (variableType(len) !== 'Number') {
    return tipsParams('fillStr')
  }
  if (variableType(fill) !== 'String' && variableType(fill) !== 'Number') {
    return tipsParams('fillStr')
  }
  str = `${str}`
  const strLen = str.length
  if (strLen >= len) {
    return str
  }
  const between = len - strLen
  return `${fill}`.repeat(between) + str
}
/**
 * @name: fillZero
 * @description: 给数值或字符串补充0以满足长度
 * @param {Number | String} str 数值或字符串
 * @param {String} len 长度
 * @return {String}
 */
function fillZero(str, len) {
  if (variableType(str) !== 'String' && variableType(str) !== 'Number') {
    return tipsParams('fillZero')
  }
  if (variableType(len) !== 'Number') {
    return tipsParams('fillZero')
  }
  return fillStr(str, len, 0)
}

/**
 * @name: debounce
 * @description: 防抖
 * @param {Function} fn
 * @param {Number} delay
 * @return {Function}
 */
function debounce(fn, delay) {
  let timeout = null
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

/**
 * @name: throttle
 * @description: 节流
 * @param {Function} fn
 * @param {Number} delay
 * @return {Function}
 */
function throttle(fn, delay) {
  let flag = true
  return function(...args) {
    if (!flag) {
      return
    }
    flag = false
    setTimeout(() => {
      fn.apply(this, args)
      flag = true
    }, delay)
  }
}

/**
 * @name: deepClone
 * @description: 深拷贝
 * @param {any} item
 * @return {any}
 */
function deepClone(item) {
  if (variableType(item) == 'Array') {
    return cloneArray(item)
  } else if (variableType(item) == 'Object') {
    return cloneObj(item)
  } else if (variableType(item) == 'Map') {
    return cloneMap(item)
  } else if (variableType(item) == 'Set') {
    return cloneSet(item)
  } else if (variableType(item) == 'Date') {
    return new Date(new Date().setTime(item.getTime()))
  } else if (variableType(item) == 'RegExp') {
    return new RegExp(item.source, item.flags)
  } else if (variableType(item) == 'Function') {
    return item.bind()
  }
  return item
}

/**
 * @name: cloneArray
 * @description: 深拷贝数组
 * @param {Array} arrObj
 * @return {Array}
 */
function cloneArray(arrObj) {
  const temArr = []
  for (const item of arrObj) {
    if (item == arrObj) {
      temArr.push(temArr)
    } else {
      temArr.push(deepClone(item))
    }
  }
  return temArr
}
/**
 * @name: cloneObj
 * @description: 深拷贝对象
 * @param {Object} obj
 * @return {Object}
 */
function cloneObj(obj) {
  const temObj = {}
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const item = obj[key]
      if (item == obj) {
        temObj[key] = temObj
      } else {
        temObj[key] = deepClone(item)
      }
    }
  }
  return temObj
}
/**
 * @name: cloneMap
 * @description: 深拷贝 Map
 * @param {Map} mapObj
 * @return {Map}
 */
function cloneMap(mapObj) {
  const map = new Map()
  for (const [key, value] of mapObj) {
    if (value == mapObj) {
      map.set(key, map)
    } else {
      map.set(key, deepClone(value))
    }
  }
  return map
}
/**
 * @name: cloneMap
 * @description: 深拷贝 Set
 * @param {Set} setObj
 * @return {Set}
 */
function cloneSet(setObj) {
  const set = new Set()
  for (const item of setObj) {
    if (item == setObj) {
      set.add(set)
    } else {
      set.add(deepClone(item))
    }
  }
  return set
}

/**
 * @name: stop
 * @description: 禁止滚动条滚动
 * @param {void}
 * @return {void}
 */
function stop() {
  const mo = function(e) {
    e.preventDefault()
  }
  document.body.style.overflow = 'hidden'
  document.addEventListener('touchmove', mo, false)
}

/**
 * @name: move
 * @description: 恢复滚动条滚动
 * @param {void}
 * @return {void}
 */
function move() {
  const mo = function(e) {
    e.preventDefault()
  }
  document.body.style.overflow = ''
  document.removeEventListener('touchmove', mo, false)
}

/**
 * @name: numFormat
 * @description: 数值增加千位符（,）
 * @param {Number} num
 * @return {String}
 */
function numFormat(num) {
  if (variableType(num) !== 'Number') {
    return tipsParams('numFormat')
  }
  const res = num
    .toString()
    .replace(/\d+/, n => n.replace(/(\d)(?=(\d{3})+$)/g, $1 => `${$1},`))
  return res
}

/**
 * @name: getUrlParam
 * @description: 获取URL的单个参数
 * @param {String} key 参数名
 * @param {String} url URL地址，不传的话会取location.href
 * @return {String} 参数值
 */
function getUrlParam(key, url) {
  if (variableType(key) !== 'String') {
    return tipsParams('getUrlParam')
  }
  if (variableType(url) !== 'String') {
    return tipsParams('getUrlParam')
  }
  const urlObj = new URL(url || location.href)
  return urlObj.searchParams.get(key) || ''
}

/**
 * @name: getUrlParams
 * @description: 获取URL的多个参数
 * @param {Array} keys 参数名列表
 * @param {String} url URL地址，不传的话会取location.href
 * @return {Object}
 */
function getUrlParams(keys, url) {
  if (variableType(keys) !== 'Array') {
    return tipsParams('getUrlParams')
  }
  if (variableType(url) !== 'String') {
    return tipsParams('getUrlParams')
  }
  const obj = {}
  const keysArr = uniqueArray(keys)
  for (const key of keysArr) {
    obj[key] = getUrlParam(key, url)
  }
  return obj
}

/**
 * @name: setUrlParam
 * @description: 设置URL的单个参数
 * @param {String} key 参数名
 * @param {String | Number} val 参数值
 * @param {String} url URL地址，不传的话会取location.href
 * @return {String} 新的URL
 */
function setUrlParam(key, val, url) {
  if (variableType(key) !== 'String') {
    return tipsParams('setUrlParam')
  }
  if (variableType(val) !== 'String' || variableType(val) !== 'Number') {
    return tipsParams('setUrlParam')
  }
  if (variableType(url) !== 'String') {
    return tipsParams('setUrlParam')
  }
  const urlObj = new URL(url || location.href)
  urlObj.searchParams.set(key, val)
  return urlObj.href
}

/**
 * @name: setUrlParams
 * @description: 设置URL的多个参数
 * @param {Object} params
 * @param {String} url URL地址，不传的话会取location.href
 * @return {String} 新的URL
 */
function setUrlParams(params, url) {
  if (variableType(params) !== 'Object') {
    return tipsParams('setUrlParams')
  }
  if (variableType(url) !== 'String') {
    return tipsParams('setUrlParams')
  }
  let afterUrl = url
  for (const key in params) {
    if (Object.hasOwnProperty.call(params, key)) {
      const val = params[key]
      afterUrl = setUrlParam(key, val, afterUrl)
    }
  }
  return afterUrl
}

/**
 * @name: deleteUrlParam
 * @description: 删除URL的参数
 * @param {String} key 参数名
 * @param {String} url URL地址，不传的话会取location.href
 * @return {String} 新的URL
 */
function deleteUrlParam(key, url) {
  if (variableType(key) !== 'String') {
    return tipsParams('deleteUrlParam')
  }
  if (variableType(url) !== 'String') {
    return tipsParams('deleteUrlParam')
  }
  const urlObj = new URL(url || location.href)
  urlObj.searchParams.delete(key)
  return urlObj.href
}

/**
 * @name: deleteUrlParams
 * @description: 删除URL的参数
 * @param {Array} keys 参数名列表
 * @param {String} url URL地址，不传的话会取location.href
 * @return {String} 新的URL
 */
function deleteUrlParams(keys, url) {
  if (variableType(keys) !== 'Array') {
    return tipsParams('deleteUrlParams')
  }
  if (variableType(url) !== 'String') {
    return tipsParams('deleteUrlParams')
  }
  const keysArr = uniqueArray(keys)
  let afterUrl = url
  for (const key of keysArr) {
    afterUrl = deleteUrlParam(key, afterUrl)
  }
  return afterUrl
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
  getWeekDate,
  formatDate,
  fillStr,
  debounce,
  throttle,
  deepClone,
  stop,
  move,
  numFormat,
  getUrlParam,
  getUrlParams,
  setUrlParam,
  setUrlParams,
  deleteUrlParam,
  deleteUrlParams
}
