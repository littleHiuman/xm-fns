import { tipsParams } from './utils'
import { filterNumberKeys } from './javascript'

const stringColorVal = {
  lightpink: '#FFB6C1',
  pink: '#FFC0CB',
  crimson: '#DC143C',
  lavenderblush: '#FFF0F5',
  palevioletred: '#DB7093',
  hotpink: '#FF69B4',
  deeppink: '#FF1493',
  mediumvioletred: '#C71585',
  orchid: '#DA70D6',
  thistle: '#D8BFD8',
  plum: '#DDA0DD',
  violet: '#EE82EE',
  magenta: '#FF00FF',
  fuchsia: '#FF00FF',
  darkmagenta: '#8B008B',
  purple: '#800080',
  mediumorchid: '#BA55D3',
  darkvoilet: '#9400D3',
  darkorchid: '#9932CC',
  indigo: '#4B0082',
  blueviolet: '#8A2BE2',
  mediumpurple: '#9370DB',
  mediumslateblue: '#7B68EE',
  slateblue: '#6A5ACD',
  darkslateblue: '#483D8B',
  lavender: '#E6E6FA',
  ghostwhite: '#F8F8FF',
  blue: '#0000FF',
  mediumblue: '#0000CD',
  midnightblue: '#191970',
  darkblue: '#00008B',
  navy: '#000080',
  royalblue: '#4169E1',
  cornflowerblue: '#6495ED',
  lightsteelblue: '#B0C4DE',
  lightslategray: '#778899',
  slategray: '#708090',
  doderblue: '#1E90FF',
  aliceblue: '#F0F8FF',
  steelblue: '#4682B4',
  lightskyblue: '#87CEFA',
  skyblue: '#87CEEB',
  deepskyblue: '#00BFFF',
  lightblue: '#ADD8E6',
  powderblue: '#B0E0E6',
  cadetblue: '#5F9EA0',
  azure: '#F0FFFF',
  lightcyan: '#E1FFFF',
  paleturquoise: '#AFEEEE',
  cyan: '#00FFFF',
  aqua: '#D4F2E7',
  darkturquoise: '#00CED1',
  darkslategray: '#2F4F4F',
  darkcyan: '#008B8B',
  teal: '#008080',
  mediumturquoise: '#48D1CC',
  lightseagreen: '#20B2AA',
  turquoise: '#40E0D0',
  auqamarin: '#7FFFAA',
  mediumaquamarine: '#00FA9A',
  mediumspringgreen: '#00FF7F',
  mintcream: '#F5FFFA',
  springgreen: '#3CB371',
  seagreen: '#2E8B57',
  honeydew: '#F0FFF0',
  lightgreen: '#90EE90',
  palegreen: '#98FB98',
  darkseagreen: '#8FBC8F',
  limegreen: '#32CD32',
  lime: '#00FF00',
  forestgreen: '#228B22',
  green: '#008000',
  darkgreen: '#006400',
  chartreuse: '#7FFF00',
  lawngreen: '#7CFC00',
  greenyellow: '#ADFF2F',
  olivedrab: '#556B2F',
  beige: '#F5F5DC',
  lightgoldenrodyellow: '#FAFAD2',
  ivory: '#FFFFF0',
  lightyellow: '#FFFFE0',
  yellow: '#FFFF00',
  olive: '#808000',
  darkkhaki: '#BDB76B',
  lemonchiffon: '#FFFACD',
  palegodenrod: '#EEE8AA',
  khaki: '#F0E68C',
  gold: '#FFD700',
  cornislk: '#FFF8DC',
  goldenrod: '#DAA520',
  floralwhite: '#FFFAF0',
  oldlace: '#FDF5E6',
  wheat: '#F5DEB3',
  moccasin: '#FFE4B5',
  orange: '#FFA500',
  papayawhip: '#FFEFD5',
  blanchedalmond: '#FFEBCD',
  navajowhite: '#FFDEAD',
  antiquewhite: '#FAEBD7',
  tan: '#D2B48C',
  brulywood: '#DEB887',
  bisque: '#FFE4C4',
  darkorange: '#FF8C00',
  linen: '#FAF0E6',
  peru: '#CD853F',
  peachpuff: '#FFDAB9',
  sandybrown: '#F4A460',
  chocolate: '#D2691E',
  saddlebrown: '#8B4513',
  seashell: '#FFF5EE',
  sienna: '#A0522D',
  lightsalmon: '#FFA07A',
  coral: '#FF7F50',
  orangered: '#FF4500',
  darksalmon: '#E9967A',
  tomato: '#FF6347',
  mistyrose: '#FFE4E1',
  salmon: '#FA8072',
  snow: '#FFFAFA',
  lightcoral: '#F08080',
  rosybrown: '#BC8F8F',
  indianred: '#CD5C5C',
  red: '#FF0000',
  brown: '#A52A2A',
  firebrick: '#B22222',
  darkred: '#8B0000',
  maroon: '#800000',
  white: '#FFFFFF',
  whitesmoke: '#F5F5F5',
  gainsboro: '#DCDCDC',
  lightgrey: '#D3D3D3',
  silver: '#C0C0C0',
  darkgray: '#A9A9A9',
  gray: '#808080',
  dimgray: '#696969',
  black: '#000000'
}

/**
 * @name: isColorVal
 * @description: 判断是否是颜色值
 * @param {String} val 颜色值
 * @return {Boolean}
 */
function isColorVal(val) {
  return isRGBVal(val) || isHEXVal(val) || isStringColorVal(val)
}

/**
 * @name: isStringColorVal
 * @description: 判断是否是字符串颜色值
 * @param {String} val 颜色值
 * @return {Boolean}
 */
function isStringColorVal(val) {
  val = val.trim().toLowerCase()
  return !!stringColorVal[val]
}

/**
 * @name: stringColor2RGB
 * @description: 字符串颜色值转换成RGB颜色值
 * @param {String} val 颜色值
 * @return {String}
 */
function stringColor2RGB(val) {
  val = val.trim().toLowerCase()
  if (isStringColorVal(val)) {
    return HEX2RGB(stringColorVal[val])
  }
  return tipsParams('stringColor2RGB', 'val')
}

/**
 * @name: stringColor2HEX
 * @description: 字符串颜色值转换成十六进制颜色值
 * @param {String} val 颜色值
 * @return {String}
 */
function stringColor2HEX(val) {
  val = val.trim().toLowerCase()
  if (isStringColorVal(val)) {
    return stringColorVal[val]
  }
  return tipsParams('stringColor2HEX', 'val')
}

/**
 * @name: isRGBVal
 * @description: 判断是否是RGB颜色值
 * @param {String} val 颜色值
 * @return {Boolean}
 */
function isRGBVal(val) {
  val = val.trim().replace(/ /g, '')
  return /^rgb\(\d{1,3}\,\d{1,3}\,\d{1,3}\)$/g.test(val)
}

/**
 * @name: isHEXVal
 * @description: 判断是否是十六进制颜色值
 * @param {String} val 颜色值
 * @return {Boolean}
 */
function isHEXVal(val) {
  return isShortHEXVal(val) || isLongHEXVal(val)
}

/**
 * @name: isShortHEXVal
 * @description: 判断是否是缩写的十六进制颜色值
 * @param {String} val 颜色值
 * @return {Boolean}
 */
function isShortHEXVal(val) {
  val = val.trim()
  return /^#[0-9a-zA-Z]{3}$/g.test(val)
}
/**
 * @name: isLongHEXVal
 * @description: 判断是否是六位的十六进制颜色值
 * @param {String} val 颜色值
 * @return {Boolean}
 */
function isLongHEXVal(val) {
  val = val.trim()
  return /^#[0-9a-zA-Z]{6}$/g.test(val)
}

/**
 * @name: RGB2HEX
 * @description: RGB颜色值转换成十六进制颜色值
 * @param {String} RGBVal RGB颜色值
 * @return {String} 十六进制颜色值
 */
function RGB2HEX(RGBVal) {
  RGBVal = RGBVal.trim().replace(/ /g, '')
  if (isRGBVal(RGBVal)) {
    const colorArr = RGBVal.slice(4, -1).split(',')
    for (const i in colorArr) {
      if (Object.hasOwnProperty.call(colorArr, i)) {
        const item = colorArr[i]
        colorArr[i] = (item - 0).toString(16)
      }
    }
    const colorVal = colorArr.join('').toUpperCase()

    return `#${colorVal}`
  }
  return tipsParams('RGB2HEX', 'RGBVal')
}

/**
 * @name: HEX2RGB
 * @description: 十六进制颜色值转换成RGB颜色值
 * @param {String} HEXVal 十六进制颜色值
 * @return {String} RGB颜色值
 */
function HEX2RGB(HEXVal) {
  HEXVal = HEXVal.trim()
  if (isShortHEXVal(HEXVal)) {
    const rVal = HEXVal.slice(1, 2)
    const gVal = HEXVal.slice(2, 3)
    const bVal = HEXVal.slice(3, 4)
    const colorVal = `${Number.parseInt(rVal + rVal, 16)},${Number.parseInt(
      gVal + gVal,
      16
    )},${Number.parseInt(bVal + bVal, 16)}`
    return `rgb(${colorVal})`
  } else if (isLongHEXVal(HEXVal)) {
    const rVal = HEXVal.slice(1, 3)
    const gVal = HEXVal.slice(3, 5)
    const bVal = HEXVal.slice(5, 7)
    const colorVal = `${Number.parseInt(rVal, 16)},${Number.parseInt(
      gVal,
      16
    )},${Number.parseInt(bVal, 16)}`
    return `rgb(${colorVal})`
  }
  return tipsParams('HEX2RGB', 'HEXVal')
}

/**
 * @name: shortHEXVal2LongHEXVal
 * @description: 缩写的十六进制颜色值转换成六位的十六进制颜色值
 * @param {String} HEXVal 缩写的十六进制颜色值
 * @return {String} 六位的十六进制颜色值
 */
function shortHEXVal2LongHEXVal(HEXVal) {
  const val = HEXVal.trim()
  if (isShortHEXVal(val)) {
    const fir = val.slice(1, 2)
    const sec = val.slice(2, 3)
    const thi = val.slice(3, 4)
    return `#${fir + fir + sec + sec + thi + thi}`
  } else if (isLongHEXVal(HEXVal)) {
    return HEXVal
  }
  return tipsParams('shortHEXVal2LongHEXVal', 'HEXVal')
}

/**
 * @name: eqRGBVal
 * @description: 比较rgb颜色值
 * @param {String} val1 颜色值
 * @param {String} val2 颜色值
 * @return {Boolean}
 */
function eqRGBVal(val1, val2) {
  val1 = val1.trim()
  val2 = val2.trim()
  if (!isRGBVal(val1)) {
    return tipsParams('eqRGBVal', 'val1')
  }
  if (!isRGBVal(val2)) {
    return tipsParams('eqRGBVal', 'val2')
  }
  return val1.replace(/ /g, '') == val2.replace(/ /g, '')
}

/**
 * @name: eqHEXVal
 * @description: 比较HEX颜色值
 * @param {String} val1 颜色值
 * @param {String} val2 颜色值
 * @return {Boolean}
 */
function eqHEXVal(val1, val2) {
  val1 = val1.trim()
  val2 = val2.trim()
  if (!isHEXVal(val1)) {
    return tipsParams('eqHEXVal', 'val1')
  }
  if (!isHEXVal(val2)) {
    return tipsParams('eqHEXVal', 'val2')
  }
  return (
    shortHEXVal2LongHEXVal(val1).toUpperCase() ==
      shortHEXVal2LongHEXVal(val2).toUpperCase()
  )
}

/**
 * @name: eqStringColorVal
 * @description: 比较字符串颜色值
 * @param {String} val1 颜色值
 * @param {String} val2 颜色值
 * @return {Boolean}
 */
function eqStringColorVal(val1, val2) {
  val1 = val1.trim()
  val2 = val2.trim()
  if (!isStringColorVal(val1)) {
    return tipsParams('eqStringColorVal', 'val1')
  }
  if (!isStringColorVal(val2)) {
    return tipsParams('eqStringColorVal', 'val2')
  }
  return val1.toLowerCase() == val2.toLowerCase()
}

/**
 * @name: eqRGBNHEX
 * @description: 比较RGB颜色值和十六进制颜色值
 * @param {String} val1 颜色值
 * @param {String} val2 颜色值
 * @return {Boolean}
 */
function eqRGBNHEX(val1, val2) {
  if (isRGBVal(val1) && isHEXVal(val2)) {
    return (
      shortHEXVal2LongHEXVal(RGB2HEX(val1)) ==
      shortHEXVal2LongHEXVal(val2).toUpperCase()
    )
  } else if (isHEXVal(val1) && isRGBVal(val2)) {
    return (
      shortHEXVal2LongHEXVal(RGB2HEX(val2)) ==
      shortHEXVal2LongHEXVal(val1).toUpperCase()
    )
  }
  return tipsParams('eqRGBNHEX', 'val1|val2')
}

/**
 * @name: eqStringColorValNOther
 * @description: 比较字符串颜色值和其他颜色值
 * @param {String} val1 颜色值
 * @param {String} val2 颜色值
 * @return {Boolean}
 */
function eqStringColorValNOther(val1, val2) {
  if (isStringColorVal(val1) && isRGBVal(val2)) {
    return stringColor2RGB(val1) == val2.replace(/ /g, '')
  } else if (isStringColorVal(val1) && isHEXVal(val2)) {
    return (
      stringColor2HEX(val1).toUpperCase() ==
      shortHEXVal2LongHEXVal(val2).toUpperCase()
    )
  } else if (isStringColorVal(val2) && isRGBVal(val1)) {
    return stringColor2RGB(val2) == val1.replace(/ /g, '')
  } else if (isStringColorVal(val2) && isHEXVal(val1)) {
    return (
      stringColor2HEX(val2).toUpperCase() ==
      shortHEXVal2LongHEXVal(val1).toUpperCase()
    )
  }
  return tipsParams('eqColorVal', 'val1|val2')
}

/**
 * @name: eqColorVal
 * @description: 比较两个颜色值是否是同一个颜色
 * @param {String} val1 颜色值
 * @param {String} val2 颜色值
 * @return {Boolean}
 */
function eqColorVal(val1, val2) {
  val1 = val1.trim()
  val2 = val2.trim()
  if (isRGBVal(val1) && isRGBVal(val2)) {
    return eqRGBVal(val1, val2)
  } else if (isHEXVal(val1) && isHEXVal(val2)) {
    return eqHEXVal(val1, val2)
  } else if (isStringColorVal(val1) && isStringColorVal(val2)) {
    return eqStringColorVal(val1, val2)
  } else if (
    (isRGBVal(val1) && isHEXVal(val2)) ||
    (isHEXVal(val1) && isRGBVal(val2))
  ) {
    return eqRGBNHEX(val1, val2)
  } else if (
    (isStringColorVal(val1) && !isStringColorVal(val2)) ||
    (!isStringColorVal(val1) && isStringColorVal(val2))
  ) {
    return eqStringColorValNOther(val1, val2)
  }
  return tipsParams('eqColorVal', 'val1|val2')
}

/**
 * @name: assignCssObj
 * @description: 合并两个CSS样式对象
 * @param {Object} base 原对象
 * @param {Object} obj 要处理的对象
 * @return {Object} 合并后的结果
 */
function assignCssObj(base, obj) {
  const temObj = {}
  for (const key in base) {
    if (Object.hasOwnProperty.call(base, key)) {
      const baseVal = base[key]
      const objVal = obj[key]
      if (!baseVal && objVal) {
        temObj[key] = objVal
      } else if (baseVal && !objVal) {
        temObj[key] = baseVal
        // } else if (
        //   baseVal && objVal &&
        //   (isColorVal(baseVal) && isColorVal(objVal))
        // ) {
        //   temObj[key] = objVal
      } else if (
        baseVal &&
        objVal &&
        (objVal === 'initial' || baseVal === objVal)
      ) {
        temObj[key] = baseVal
      } else {
        temObj[key] = objVal
      }
    }
  }
  for (const key2 in obj) {
    if (Object.hasOwnProperty.call(obj, key2)) {
      const objVal2 = obj[key2]
      if (!temObj[key2]) {
        temObj[key2] = objVal2
      }
    }
  }
  return temObj
}

/**
 * @name: getCSSStyle
 * @description: 获取DOM元素的CSS的值
 * @param {*} DOM DOM元素
 * @return {Object} DOM元素的CSS的值
 */
function getCSSStyle(dom) {
  if (!(dom instanceof window.HTMLElement)) {
    return tipsParams('getCSSStyle', 'DOM')
  }

  const temComputedStyle = window.getComputedStyle(dom)
  const computedStyle = filterNumberKeys(temComputedStyle)

  const temInlineStyle = dom.style
  const inlineStyle = filterNumberKeys(temInlineStyle)

  // TODO 和以上方法得到的数据有差别
  // let clientRect = dom.getBoundingClientRect()

  return assignCssObj(computedStyle, inlineStyle)
}

export default {
  isColorVal,
  isStringColorVal,
  stringColor2RGB,
  stringColor2HEX,
  isRGBVal,
  isHEXVal,
  isShortHEXVal,
  isLongHEXVal,
  RGB2HEX,
  HEX2RGB,
  shortHEXVal2LongHEXVal,
  eqColorVal,
  assignCssObj,
  getCSSStyle
}
