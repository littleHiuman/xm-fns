import { tipsParams, variableType } from './utils'

/**
 * @name: filterNumberKeys
 * @description: 过滤对象中数值形式的key
 * @param {Object} obj 对象
 * @return {Object} 处理后的对象
 */
export function filterNumberKeys(obj) {
  if (variableType(obj) !== 'Object') {
    return tipsParams('filterNumberKeys', 'obj')
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
    return tipsParams('capitalizedFirstLetter', 'params')
  }
  if (!/^[a-zA-Z\s]+$/g.test(params)) {
    return tipsParams('capitalizedFirstLetter', 'params')
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
  if (variableType(num) !== 'Number') {
    return tipsParams('percentNum', 'num')
  }
  if (variableType(num2) !== 'Number') {
    return tipsParams('percentNum', 'num2')
  }
  if ([0, 1].indexOf(type) === -1) {
    return tipsParams('percentNum', 'type')
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
 * @name: uniqueArray
 * @description: 数组去重
 * @param {Array} arr
 * @return {Array}
 */
function uniqueArray(arr) {
  if (variableType(arr) !== 'Array') {
    return tipsParams('uniqueArray', 'arr')
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
    return tipsParams('uniqueComplexArray', 'arr')
  }
  if (variableType(key) !== 'String') {
    return tipsParams('uniqueComplexArray', 'key')
  }
  if ([0, 1].indexOf(type) === -1) {
    return tipsParams('uniqueComplexArray', 'type')
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
    return tipsParams('randomNums', 'params')
  }
  if (length <= 0 || max <= min) {
    return tipsParams('randomNums', 'params')
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
    return tipsParams('getMinNMax', 'arr')
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
    return tipsParams('flatArray', 'arr')
  }
  if (arr.length === 0) {
    return arr
  }

  return Array.prototype.flat.call(arr, Infinity)
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

// touchmove 回调函数
const mo = function(e) {
  e.preventDefault()
}

/**
 * @name: stop
 * @description: 禁止滚动条滚动
 * @param {void}
 * @return {void}
 */
function stop() {
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
    return tipsParams('numFormat', 'num')
  }
  const res = num
    .toString()
    .replace(/\d+/, n => n.replace(/(\d)(?=(\d{3})+$)/g, $1 => `${$1},`))
  return res
}

/**
 * @name: isEmptyObject
 * @description: 判断是否是空对象
 * @param {Object} obj 对象
 * @return {Boolean}
 */
function isEmptyObject(obj) {
  if (variableType(obj) !== 'Object') {
    return tipsParams('isEmptyObject', 'obj')
  }
  return Object.keys(obj).length === 0
}

/**
 * @name: getTopValue
 * @description: 获取DOM元素距离页面顶部的距离
 * @param {*} DOM DOM元素
 * @return {Number}
 */
function getTopValue(elm) {
  return elm.getBoundingClientRect().top + document.documentElement.scrollTop
}

let times = 8
/**
 * @name: calcAutoIncreaseElms
 * @description: 数值过渡递增效果（可包含字符串），innerText为初始值，data-value为最终值，如：<div id="totalVolume" data-value="£750M">£0M</div>
 * @param {*} DOM DOM元素（数组）
 * @return {void}
 */
function calcAutoIncreaseElms(elms) {
  elms.reverse()
  const heights = []
  for (const elm of elms) {
    const top =
      elm.getBoundingClientRect().top + document.documentElement.scrollTop
    const lastElm = heights[heights.length - 1]
    if (lastElm) {
      const lastTop = lastElm.top
      if (Math.abs(top - lastTop) > 200) {
        heights.push({
          top,
          fns: [
            function(elm) {
              calcAutoIncrease(elm)
            }
          ],
          elms: [elm],
          status: false
        })
      } else {
        function temFn(elm) {
          calcAutoIncrease(elm)
        }
        lastElm.fns.push(temFn)
        lastElm.elms.push(elm)
      }
    } else {
      heights.push({
        top,
        fns: [
          function(elm) {
            calcAutoIncrease(elm)
          }
        ],
        elms: [elm],
        status: false
      })
    }
    // calcAutoIncrease(elm)
  }
  function startFn() {
    const clientHeight = document.documentElement.clientHeight
    const bodyTop = document.documentElement.scrollTop + clientHeight * 0.95
    for (const elm of heights) {
      if (!elm.status && bodyTop >= elm.top) {
        for (let i = 0; i < elm.fns.length; i++) {
          const fn = elm.fns[i]
          fn(elm.elms[i])
        }
        elm.status = true
      }
    }
  }
  startFn()
  window.addEventListener('scroll', startFn)
}

function calcAutoIncrease(el) {
  let targetVal = el.getAttribute('data-value')
  if (targetVal) {
    let nowVal = el.innerText
    const res = targetVal.match(/\d+/g)
    let toNumber
    let nowNumber
    let other
    let increase
    if (res && res.length) {
      toNumber = res[0]
      const startIndex = targetVal.indexOf(toNumber)
      let otherStart = ''
      if (startIndex != 0) {
        otherStart = targetVal.slice(0, startIndex)
        targetVal = targetVal.slice(startIndex)
        nowVal = nowVal.slice(startIndex)
      }
      other = targetVal.replace(toNumber, '')
      nowNumber = nowVal.replace(other, '')
      const between = toNumber - nowNumber
      increase = parseInt(between / times)
      if (between <= 8) {
        increase = 1
        times = between
      }
      increaseCb(el, increase, toNumber, nowNumber, other, otherStart, times)
    }
  }
}

function increaseCb(el, increase, toNumber, nowVal, other, otherStart, times) {
  const timeoutTime = 1 * 1000
  setTimeout(() => {
    if (nowVal - 0 + increase < toNumber - 0) {
      el.innerText = otherStart + (nowVal - 0 + increase) + other
      increaseCb(
        el,
        increase,
        toNumber,
        nowVal - 0 + increase,
        other,
        otherStart,
        times
      )
    } else {
      el.innerText = otherStart + toNumber + other
    }
  }, timeoutTime / times)
}

export default {
  filterNumberKeys,
  capitalizedFirstLetter,
  percentNum,
  uniqueArray,
  uniqueComplexArray,
  randomNums,
  getMinNMax,
  flatArray,
  debounce,
  throttle,
  deepClone,
  stop,
  move,
  numFormat,
  isEmptyObject,
  getTopValue,
  calcAutoIncreaseElms
}
