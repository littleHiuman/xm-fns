const fs = require('fs')
const path = require('path')

// 找到导出的方法
function findExportDefault(data) {
  const str = 'export default {'
  const start = data.indexOf(str)
  const len = data.length
  const end = data.lastIndexOf('}')
  if (start !== -1 && start < len && end !== -1 && end <= len) {
    const res = data.slice(start + str.length, end - 1).trim()
    return res
  }
  return null
}

// 得到函数名
function findFnName(str) {
  const list = str.split(',')
  const temKey = []
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
  const len = str.length
  const start = str.indexOf(infoStrStart, startIndex)
  let res
  const lenInfoStrEnd = infoStrEnd == '\n' ? 0 : infoStrEnd.length
  if (start != -1 && start < len) {
    const end = str.indexOf(infoStrEnd, start)
    if (end != -1 && end < len) {
      const strSliceStart = start + infoStrStart.length
      const strSclieEnd = infoStrEnd == '\n' ? end : end
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
  const nameStrStart = '@name:'
  const descStrStart = '@description:'
  const paramStrStart = '@param'
  const returnStrStart = '@return'

  const name = getInfo({ str, infoStrStart: nameStrStart, infoStrEnd: '\n' }).trim()
  const desc = getInfo({ str, infoStrStart: descStrStart, infoStrEnd: '\n' }).trim()
  const returnInfo = getInfo({
    str,
    infoStrStart: returnStrStart,
    infoStrEnd: '\n'
  })
  const params = []
  getInfo({
    str,
    infoStrStart: paramStrStart,
    infoStrEnd: '\n',
    isLoop: true,
    arr: params
  })
  const returnInfos = handleParams(returnInfo)
  const paramsInfos = handleParams(params)
  const text = template({ name, desc, returnInfo: returnInfos, paramsInfo: paramsInfos })
  return {
    name,
    desc,
    paramsInfos,
    returnInfos,
    text
  }
}

function handleParams(params) {
  const arr = []
  if (Object.prototype.toString.call(params) == '[object Array]') {
    for (const p of params) {
      arr.push(handleParamsOnce(p))
    }
  } else {
    arr.push(handleParamsOnce(params))
  }
  return arr
}

const variableRegExp = /^[a-zA-Z0_][a-zA-Z0-9_]+(\.[a-zA-Z0_][a-zA-Z0-9_]+){0,}$/
const variableRegExp2 = /[a-zA-Z0_][a-zA-Z0-9_]+(\.[a-zA-Z0_][a-zA-Z0-9_]+){0,}/
function handleParamsOnce(params) {
  const myParams = params.trim()
  const res = myParams.match(/\{[a-zA-Z\*]+\}/g)
  const typeRes = res && res[0]
  if (typeRes) {
    const res = typeRes.slice(1, -1)
    const index = myParams.indexOf(typeRes)
    let [param, ...desc] = myParams.slice(index + typeRes.length).trim().split(' ')
    param = param.trim()
    desc = desc&&desc[0] || ''
    desc = desc.trim()
    if (param) {
      const regExpRes = variableRegExp.test(param)
      if (!regExpRes) {
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

function Array2String(arr) {
  let str = ''
  for (const item of arr) {
    let temStr = ''
    if (item.param ||item.type|| item.desc) {
      temStr= `${item.param}${item.type?`，类型：${item.type}`:''}${item.desc?`，描述：${item.desc}`:''}`
    }
    if (temStr) {
      if (temStr.indexOf('，') == 0) {
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
  const paramStr = Array2String(paramsInfo)
  if (paramStr) {
    str +=`\t\t<p>参数：</p>
${paramStr}`
  }
  const returnStr = Array2String(returnInfo)
  if (returnStr) {
    str +=`\t\t<p>返回值：</p>
${returnStr}`
  }
  str +=`\t\t<br>
`
  return str
}

const res = fs.readdirSync(`${__dirname}/`)
const fileList = res.filter(item => !item.startsWith('.')&&!item.startsWith('genDocs'))
fileList.forEach(item => `./${item}`)
// const fileList = ['./javascript.js', './css.js']
const filename = path.join(__dirname,'../dist/docs.html')
let docInfo = ''

for (const file of fileList) {
  let partRes = file.match(variableRegExp2)
  partRes = partRes&&partRes[0] ||''
  const fileInfo = fs.readFileSync(path.join(__dirname, file)).toString()
  const fns = findExportDefault(fileInfo)
  const annotations = []
  if (fns) {
    const allNames = findFnName(fns)
    // 找所有注释
    getInfo({
      str: fileInfo,
      infoStrStart: '/**',
      infoStrEnd: ' */',
      isLoop: true,
      arr: annotations
    })
    const allInfo = {}
    for (const item of annotations) {
      const info = getFnInfo(item)
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
