import { variableType } from './javascript'

/**
 * @name: tipsUnknown
 * @description: 打印函数占位提示（未知类型）
 * @param {String} functionName
 * @return {Void}
 */
export function tipsUnknown(functionName) {
  if (
    variableType(functionName) !== 'String' ||
    !/^[a-zA-Z]+$/g.test(functionName)
  ) {
    return tipsParams('functionName')
  }
  throw new Error(`unknown state from ${functionName}:xm-tools`)
}

/**
 * @name: tipsParams
 * @description: 打印函数占位提示（参数错误）
 * @param {String} functionName
 * @return {Void}
 */
export function tipsParams(functionName) {
  if (variableType(functionName) !== 'String') {
    throw new Error('functionName错误')
  }
  if (!/^[a-zA-Z]+$/g.test(functionName)) {
    throw new Error('functionName错误')
  }
  throw new Error(`${functionName}: 参数错误`)
}
