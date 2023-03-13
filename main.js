import xmCssUtils from './src/css'
import xmJSUtils from './src/javascript'
import xmDateUtils from './src/date'
import xmUrlUtils from './src/url'
import utils from './src/utils'

const allUtils = Object.assign(
  {},
  xmCssUtils,
  xmJSUtils,
  xmDateUtils,
  xmUrlUtils,
  utils
)
if (window) {
  window.xmFns = allUtils
}
export default allUtils
