import { tipsParams, variableType } from './utils'

/**
 * @name: getWeekDate
 * @description: 获取本周的日期和周几
 * @param {Number} startDay 开始时间
 * @param {Boolean} showToday 显示今日还是显示周几，true显示今日
 * @return {Array}
 */
function getWeekDate(startDay = -1, showToday = false) {
  // startDay -1代表今天开始，0代表周日开始
  // showToday 显示今日还是显示周几
  if ([-1, 0].indexOf(startDay) === -1) {
    return tipsParams('getWeekDate', 'startDay')
  }
  if (typeof showToday !== 'boolean') {
    return tipsParams('getWeekDate', 'showToday')
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
    return tipsParams('formatDate', 'dateObj')
  }
  const formatInfo = checkFormatDateSign(formatStr)
  if (!formatInfo) {
    return tipsParams('formatDate', 'formatStr')
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
 * @name: fillZero
 * @description: 给数值或字符串补充0以满足长度
 * @param {Number | String} str 数值或字符串
 * @param {String} len 长度
 * @return {String}
 */
function fillZero(str, len) {
  if (variableType(str) !== 'String' && variableType(str) !== 'Number') {
    return tipsParams('fillZero', 'str')
  }
  if (variableType(len) !== 'Number') {
    return tipsParams('fillZero', 'len')
  }
  return fillStr(str, len, 0)
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
    return tipsParams('fillStr', 'str')
  }
  if (variableType(len) !== 'Number') {
    return tipsParams('fillStr', 'len')
  }
  if (variableType(fill) !== 'String' && variableType(fill) !== 'Number') {
    return tipsParams('fillStr', 'fill')
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
 * @name: getDays
 * @description: 获取最近的（一个或多个）周几（不包括今天）
 * @param {Number} weekday 周几（0-6）
 * @param {Number} num 个数（大于0）
 * @param {Number} startDay 开始时间（大于此刻）（可选参数）
 * @param {Object} lastResult 之前的结果（可选参数）
 * @return {Array} 结果
 */
function getDays(weekday, num, startDay, lastResult) {
  if ([0, 1, 2, 3, 4, 5, 6].indexOf(weekday) === -1) {
    return tipsParams('getDays', 'weekday')
  }
  if (num <= 0) {
    return tipsParams('getDays', 'num')
  }
  const todayDate = new Date()
  if (startDay) {
    if (variableType(startDay) !== 'Number' || startDay < todayDate.getTime()) {
      return tipsParams('getDays', 'startDay')
    }
  }
  if (lastResult) {
    if (variableType(lastResult) !== 'Array') {
      return tipsParams('getDays', 'lastResult')
    }
  }

  const date = startDay ? new Date(startDay) : todayDate
  const day = date.getDay()
  const oneDay = 24 * 60 * 60 * 1000
  let stepDays
  const result = lastResult ? lastResult : []
  if (day == weekday) {
    stepDays = 7 * oneDay
  } else if (day < weekday) {
    stepDays = (weekday - day) * oneDay
  } else if (day > weekday) {
    stepDays = (7 - day + weekday) * oneDay
  }
  const afterDay = new Date(date.getTime() + stepDays)
  result.push(afterDay)
  if (--num) {
    getDays(weekday, num, afterDay.getTime(), result)
  }
  return result
}

/**
 * @name: getTimeDiffFormat
 * @description: 时间处理方法(显示几天前、几小时前、几分钟前……)
 * @param {Number} time 时间戳（过去的时间）
 * @return {String} 匹配后的字符串
 */
function getTimeDiffFormat(time) {
  if (variableType(time) !== 'Number') {
    return tipsParams('getTimeDiffFormat', 'time')
  }
  const calcTime = time
  const now = new Date().getTime()
  if (now < calcTime) {
    return tipsParams('getTimeDiffFormat', 'time')
  }
  const between = now - calcTime
  const second = 1000 // 秒
  const minute = 60 * second // 分
  const hour = 60 * minute // 时
  const day = 24 * hour // 天
  const month = 30 * day // 月
  const year = 12 * month // 年
  if (between < second) {
    return '刚刚'
  }
  if (between < minute) {
    return `${parseInt(between / second)}秒前`
  }
  if (between < hour) {
    return `${parseInt(between / minute)}分钟前`
  }
  if (between < day) {
    return `${parseInt(between / hour)}小时前`
  }
  if (between < month) {
    return `${parseInt(between / day)}天前`
  }
  if (between < year) {
    return `${parseInt(between / month)}月前`
  }
  return `${parseInt(between / year)}年前`
}

/**
 * @name: getMonthDay
 * @description: 获取这个月的所有天数与星期
 * @param {Boolean} isFillBlank 是否需要补充空白（默认不补充），如：1号不是周一/周日时、最后一天不是周日/周六时，补充空对象占位
 * @param {Boolean} isFirstDayMonday 一周的第一天是周几（isFillBlank为true时有效，默认第一天是周日），true代表第一天是周一，false代表第一天是周日
 * @param {String|Number|Date} customDate 自定义日期，默认是new Date()，字符串如：2022-1，数值如：new Date('2022-1').getTime()，Date如：new Date('2022-1')
 * @return {Array} {date:Number,weekday:Number}格式的数据；date对应这个月几号，weekday对应周几，0-6
 */
function getMonthDay(
  isFillBlank = false,
  isFirstDayMonday = false,
  customDate = new Date()
) {
  if (variableType(isFillBlank) !== 'Boolean') {
    return tipsParams('getMonthDay', 'isFillBlank')
  }
  if (variableType(isFirstDayMonday) !== 'Boolean') {
    return tipsParams('getMonthDay', 'isFirstDayMonday')
  }

  let dateObj
  if (customDate !== undefined) {
    if (variableType(customDate) === 'String') {
      // 字符串
      const res = customDate.split(/[^\d]/g)
      if (res.length !== 2) {
        return tipsParams('getMonthDay', 'customDate')
      }
      dateObj = new Date(res.join('-'))
    } else if (variableType(customDate) === 'Number') {
      // 数值
      dateObj = new Date(customDate)
    } else if (variableType(customDate) === 'Date') {
      // Date对象
      dateObj = customDate
    } else {
      return tipsParams('getMonthDay', 'customDate')
    }
  }
  const firstDay = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-1`
  const lastDay = `${dateObj.getFullYear()}-${dateObj.getMonth() + 2}-1`
  const firstDayDateObj = new Date(firstDay)
  const lastDayDateObj = new Date(
    new Date(lastDay).getTime() - 24 * 60 * 60 * 1000
  )
  const firstDayWeekday = firstDayDateObj.getDay()
  const lastDayDate = lastDayDateObj.getDate()
  const arr = []
  for (let i = 0; i < lastDayDate; i++) {
    arr.push({
      date: i + 1,
      weekday: (firstDayWeekday + i) % 7
    })
  }
  if (isFillBlank) {
    const lastDayWeekday = lastDayDateObj.getDay()
    let prefix = firstDayWeekday
    let suffix = 7 - lastDayWeekday - 1
    if (isFirstDayMonday) {
      prefix = (firstDayWeekday + 6) % 7
      suffix = (7 - lastDayWeekday) % 7
    }
    const temArr = [{}, {}, {}, {}, {}, {}, {}]
    arr.unshift(...temArr.slice(0, prefix))
    arr.push(...temArr.slice(0, suffix))
  }
  return arr
}

export default {
  getWeekDate,
  getDateInfoNWeek,
  formatDate,
  fillZero,
  fillStr,
  getDays,
  getTimeDiffFormat,
  getMonthDay
}
