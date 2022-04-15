// 可以使用es6新特性来编写代码
import babel from 'rollup-plugin-babel'
// 压缩js代码，包括es6代码压缩
import { terser } from 'rollup-plugin-terser'

export default {
  input: './main.js',
  output: {
    name: 'xmUtils',
    file: './dist/main.js',
    format: 'umd'
  },
  plugins: [babel(), terser()]
}
