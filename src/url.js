import { tipsParams, variableType } from './utils'
import xmJSUtils from './javascript'

/**
 * @name: getUrlParam
 * @description: 获取URL的单个参数
 * @param {String} key 参数名
 * @param {String} url URL地址，不传的话会取location.href
 * @return {String} 参数值
 */
function getUrlParam(key, url) {
  if (variableType(key) !== 'String') {
    return tipsParams('getUrlParam', 'key')
  }
  if (variableType(url) !== 'String') {
    return tipsParams('getUrlParam', 'url')
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
    return tipsParams('getUrlParams', 'keys')
  }
  if (variableType(url) !== 'String') {
    return tipsParams('getUrlParams', 'url')
  }
  const obj = {}
  const keysArr = xmJSUtils.uniqueArray(keys)
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
    return tipsParams('setUrlParam', 'key')
  }
  if (variableType(val) !== 'String' || variableType(val) !== 'Number') {
    return tipsParams('setUrlParam', 'val')
  }
  if (variableType(url) !== 'String') {
    return tipsParams('setUrlParam', 'url')
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
    return tipsParams('setUrlParams', 'params')
  }
  if (variableType(url) !== 'String') {
    return tipsParams('setUrlParams', 'url')
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
    return tipsParams('deleteUrlParam', 'key')
  }
  if (variableType(url) !== 'String') {
    return tipsParams('deleteUrlParam', 'url')
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
    return tipsParams('deleteUrlParams', 'keys')
  }
  if (variableType(url) !== 'String') {
    return tipsParams('deleteUrlParams', 'url')
  }
  const keysArr = xmJSUtils.uniqueArray(keys)
  let afterUrl = url
  for (const key of keysArr) {
    afterUrl = deleteUrlParam(key, afterUrl)
  }
  return afterUrl
}

export default {
  getUrlParam,
  getUrlParams,
  setUrlParam,
  setUrlParams,
  deleteUrlParam,
  deleteUrlParams
}
