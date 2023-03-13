# xm-fns

一个前端的常用方法的工具库，包含CSS的、JavaScript的……

A front-end tool library for common methods, includes CSS, JavaScript ...

[xm-fns - npm 地址](https://www.npmjs.com/package/xm-fns)

[xm-fns - Github 地址](https://github.com/littleHiuman/xm-fns)

[文档](./dist/docs.md)

## 安装
`npm install xm-fns`

## 使用

```js
// npm 包的方式：
// 1. 解构引入
import { debounce } from 'xm-fns'
// 2. 引入全部
// import xmFns from 'xm-fns'
// const debounce = xmFns.debounce

// cdn 包的方式
// 解构引入
// const { debounce } = window.xmFns
// 或
// const debounce = window.xmFns.debounce

function fn () { ... }
var myFn = debounce(fn, 1000)
```

## 项目命令

### 打包
`npm run build`

### 测试
`npm run test`

### eslint检查
`npm run style`

### 打包、eslint检查、测试
`npm run validate`

### 生成文档
`npm run genDocs`

## 其他
如果使用过程中，有bug、建议/意见都可以提issue~
