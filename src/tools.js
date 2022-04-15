const fs = require('fs')
const path = require('path')

// 找到导出的方法
function findExportDefault(data) {
  let str = 'export default {'
  let start = data.indexOf(str)
  let len = data.length
  let end = data.lastIndexOf('}')
  if (start !== -1 && start < len && end !== -1 && end <= len) {
    let res = data.slice(start + str.length, end - 1).trim()
    return res
  }
  return null
}

// 得到函数名
function findFnName(str) {
  let list = str.split(',')
  let temKey = []
  for (const item of list) {
    temKey.push(item.split(':')[0].trim())
  }
  return temKey
}

function getInfo({
  str,
  infoStrStart,
  infoStrEnd = '\n',
  isLoop = false,
  arr = [],
  startIndex = 0
}) {
  let len = str.length
  let start = str.indexOf(infoStrStart, startIndex)
  let res
  let lenInfoStrEnd = infoStrEnd == '\n' ? 0 : infoStrEnd.length
  if (start != -1 && start < len) {
    let end = str.indexOf(infoStrEnd, start)
    if (end != -1 && end < len) {
      let strSliceStart = start + infoStrStart.length
      let strSclieEnd = infoStrEnd == '\n' ? end : end
      res = str.slice(strSliceStart, strSclieEnd)
      if (isLoop && arr) {
        arr.push(res)
        getInfo({
          str,
          infoStrStart,
          infoStrEnd,
          isLoop,
          arr,
          startIndex: end + lenInfoStrEnd
        })
      } else if (!isLoop) {
        return res
      }
    }
  }
}

function getFnInfo(str) {
  let nameStrStart = '@name:'
  let descStrStart = '@description:'
  let paramStrStart = '@param'
  let returnStrStart = '@return'

  let name = getInfo({ str, infoStrStart: nameStrStart, infoStrEnd: '\n' }).trim()
  let desc = getInfo({ str, infoStrStart: descStrStart, infoStrEnd: '\n' }).trim()
  let returnInfo = getInfo({
    str,
    infoStrStart: returnStrStart,
    infoStrEnd: '\n'
  })
  let params = []
  getInfo({
    str,
    infoStrStart: paramStrStart,
    infoStrEnd: '\n',
    isLoop: true,
    arr: params
  })
  let returnInfos = handleParams(returnInfo)
  let paramsInfos = handleParams(params)
  let text = template({ name, desc, returnInfo: returnInfos, paramsInfo: paramsInfos })
  return {
    name,
    desc,
    paramsInfos,
    returnInfos,
    text
  }
}

function handleParams(params) {
  let arr = []
  if (Object.prototype.toString.call(params) == '[object Array]') {
    for (const p of params) {
      arr.push(handleParamsOnce(p))
    }
  } else {
    arr.push(handleParamsOnce(params))
  }
  return arr
}

let variableRegExp = /^[a-zA-Z0_][a-zA-Z0-9_]+(\.[a-zA-Z0_][a-zA-Z0-9_]+){0,}$/
let variableRegExp2 = /[a-zA-Z0_][a-zA-Z0-9_]+(\.[a-zA-Z0_][a-zA-Z0-9_]+){0,}/
function handleParamsOnce(params) {
  let myParams = params.trim()
  let res = myParams.match(/\{[a-zA-Z\*]+\}/g)
  let typeRes = res && res[0]
  if (typeRes) {
    let res = typeRes.slice(1, -1)
    let index = myParams.indexOf(typeRes)
    let [param, ...desc] = myParams.slice(index + typeRes.length).trim().split(' ')
    param = param.trim()
    desc = desc&&desc[0] || ''
    desc = desc.trim()
    if(param){
      let regExpRes = variableRegExp.test(param)
      if(!regExpRes){
        desc = param
        param = ''
      }
    }
    return {
      type: res,
      param,
      desc
    }
  }
}

function Array2String(arr){
  let str = ''
  for (const item of arr) {
    let temStr = ''
    if(item.param ||item.type|| item.desc){
      temStr= `${item.param}${item.type?'，类型：'+item.type:''}${item.desc?'，描述：'+item.desc:''}`
    }
    if(temStr){
      if(temStr.indexOf('，') == 0){
        temStr = temStr.slice(1)
      }
      temStr=`\t\t<p>${temStr}</p>\n`
    }
    str += temStr
  }
  // if(str.lastIndexOf('\n') == str.length-1){
  //   str = str.slice(0,-1)
  // }
  return str
}

function template({ name, desc, returnInfo, paramsInfo }) {
  let str = `
    <p>方法名：</p>
    <p>\t${name}</p>
    <p>描述：</p>
    <p>\t${desc}</p>`
  let paramStr = Array2String(paramsInfo)
  if(paramStr){
    str +=`\t\t<p>参数：</p>
${paramStr}`
  }
  let returnStr = Array2String(returnInfo)
  if(returnStr){
    str +=`\t\t<p>返回值：</p>
${returnStr}`
  }
  str +=`\t\t<br>
`
  return str
}

const fileList = ['./javascript.js', './css.js']
let filename = path.join(__dirname,'../dist/docs.html')
let docInfo = ''

for (const file of fileList) {
  let partRes = file.match(variableRegExp2)
  partRes = partRes&&partRes[0] ||''
  let fileInfo = fs.readFileSync(path.join(__dirname, file)).toString()
  let fns = findExportDefault(fileInfo)
  const annotations = []
  if (fns) {
    let allNames = findFnName(fns)
    // 找所有注释
    getInfo({
      str: fileInfo,
      infoStrStart: '/**',
      infoStrEnd: ' */',
      isLoop: true,
      arr: annotations
    })
    let allInfo = {}
    for (const item of annotations) {
      let info = getFnInfo(item)
      allInfo[info.name] = info
    }
    docInfo+= `\t\t<p>---------------${partRes}---------------</p>\n`
    for (const item of allNames) {
      docInfo += allInfo[item].text
    }
  }
}

docInfo = `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>docs</title>
    <link rel="stylesheet" href="" />
  </head>
  <body>
${docInfo}
  </body>
</html>`
fs.writeFileSync(filename, docInfo)