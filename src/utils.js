/**
 * @name: checkFunctionName
 * @description: 检查函数名称
 * @param {String} functionName
 * @return {Void}
 */
function checkFunctionName(functionName) {
  if (variableType(functionName) !== 'String') {
    throw new Error(`${functionName}错误`)
  }
  if (!/^[a-zA-Z]+$/g.test(functionName)) {
    throw new Error(`${functionName}错误`)
  }
}

/**
 * @name: tipsUnknown
 * @description: 打印函数占位提示（未知类型）
 * @param {String} functionName
 * @return {Void}
 */
export function tipsUnknown(functionName) {
  checkFunctionName(functionName)
  throw new Error(`unknown state from ${functionName}:xm-fns`)
}

/**
 * @name: tipsParams
 * @description: 打印函数占位提示（参数错误）
 * @param {String} functionName
 * @return {Void}
 */
export function tipsParams(functionName) {
  checkFunctionName(functionName)
  throw new Error(`${functionName}: 参数错误`)
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

export default {
  variableType
}
