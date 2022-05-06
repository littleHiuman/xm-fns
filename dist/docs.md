# 文档
## javascript
### [filterNumberKeys](#filterNumberKeys)
### [capitalizedFirstLetter](#capitalizedFirstLetter)
### [percentNum](#percentNum)
### [variableType](#variableType)
### [uniqueArray](#uniqueArray)
### [uniqueComplexArray](#uniqueComplexArray)
### [randomNums](#randomNums)
### [getMinNMax](#getMinNMax)
### [flatArray](#flatArray)
### [getWeekDate](#getWeekDate)
### [getDateInfoNWeek](#getDateInfoNWeek)
### [formatDate](#formatDate)
### [checkFormatDateSign](#checkFormatDateSign)
### [concatFormatDate](#concatFormatDate)
### [fillStr](#fillStr)
### [fillZero](#fillZero)
### [debounce](#debounce)
### [throttle](#throttle)
## css
### [isColorVal](#isColorVal)
### [isStringColorVal](#isStringColorVal)
### [stringColor2RGB](#stringColor2RGB)
### [stringColor2HEX](#stringColor2HEX)
### [isRGBVal](#isRGBVal)
### [isHEXVal](#isHEXVal)
### [isShortHEXVal](#isShortHEXVal)
### [isLongHEXVal](#isLongHEXVal)
### [RGB2HEX](#RGB2HEX)
### [HEX2RGB](#HEX2RGB)
### [shortHEXVal2LongHEXVal](#shortHEXVal2LongHEXVal)
### [eqRGBVal](#eqRGBVal)
### [eqHEXVal](#eqHEXVal)
### [eqStringColorVal](#eqStringColorVal)
### [eqRGBNHEX](#eqRGBNHEX)
### [eqStringColorValNOther](#eqStringColorValNOther)
### [eqColorVal](#eqColorVal)
### [assignCssObj](#assignCssObj)
### [getCSSStyle](#getCSSStyle)
<br/><br/>
## javascript
### <a id="filterNumberKeys">filterNumberKeys</a>
#### 过滤对象中数值形式的key
#### 参数：
		obj，类型：Object，描述：对象

#### 返回值：
		类型：Object，描述：处理后的对象

---
### <a id="capitalizedFirstLetter">capitalizedFirstLetter</a>
#### 首字母大写
#### 参数：
		params，类型：String

#### 返回值：
		类型：String

---
### <a id="percentNum">percentNum</a>
#### 得到两数相除的百分数
#### 参数：
		num，类型：Number，描述：分子
		num2，类型：Number，描述：分母
		type，类型：Number，描述：默认为1（1：得到的是保留两位小数的数；0：得到的是整数）

#### 返回值：
		类型：String，描述：返回计算后的结果加上百分号，如33.33%

---
### <a id="variableType">variableType</a>
#### 获取变量类型
#### 参数：
		params，类型：*

#### 返回值：
		类型：String，描述：变量的类型（首字母大写的形式）

---
### <a id="uniqueArray">uniqueArray</a>
#### 数组去重
#### 参数：
		arr，类型：Array

#### 返回值：
		类型：Array

---
### <a id="uniqueComplexArray">uniqueComplexArray</a>
#### 对象数组去重
#### 参数：
		arr，类型：Array
		key，类型：String，描述：对象的唯一标识属性
		type，类型：Number，描述：默认为1（1：如果有重复，保留先添加的数据

#### 返回值：
		类型：Array

---
### <a id="randomNums">randomNums</a>
#### 获取随机整数
#### 参数：
		params，类型：Object
		params.length，类型：Number，描述：默认5
		params.min，类型：Number，描述：默认2
		params.max，类型：Number，描述：默认32

#### 返回值：
		类型：Array

---
### <a id="getMinNMax">getMinNMax</a>
#### 获取数组中的最小值和最大值
#### 参数：
		arr，类型：Array

#### 返回值：
		类型：Object，描述：包含min和max属性的对象

---
### <a id="flatArray">flatArray</a>
#### 数组拍平
#### 参数：
		arr，类型：Array

#### 返回值：
		类型：Array

---
### <a id="getWeekDate">getWeekDate</a>
#### 获取本周的日期和周几
#### 参数：
		startDay，类型：Number
		showToday，类型：Boolean

#### 返回值：
		类型：Array

---
### <a id="formatDate">formatDate</a>
#### 格式化日期
#### 参数：
		dateObj，类型：Date，描述：日期对象
		formatStr，类型：String，描述：标识

#### 返回值：
		类型：String

---
### <a id="fillStr">fillStr</a>
#### 给数值或字符串补充内容以满足长度
#### 参数：
		str，类型：Number | String，描述：数值或字符串
		len，类型：Number，描述：长度
		fill，类型：Number | String，描述：要补充的内容（数值或字符串）

#### 返回值：
		类型：String

---
### <a id="debounce">debounce</a>
#### 防抖
#### 参数：
		fn，类型：Function
		delay，类型：Number

#### 返回值：
		类型：Function

---
### <a id="throttle">throttle</a>
#### 节流
#### 参数：
		fn，类型：Function
		delay，类型：Number

#### 返回值：
		类型：Function

---
## css
### <a id="isColorVal">isColorVal</a>
#### 判断是否是颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：Boolean

---
### <a id="isStringColorVal">isStringColorVal</a>
#### 判断是否是字符串颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：Boolean

---
### <a id="stringColor2RGB">stringColor2RGB</a>
#### 字符串颜色值转换成RGB颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：String

---
### <a id="stringColor2HEX">stringColor2HEX</a>
#### 字符串颜色值转换成十六进制颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：String

---
### <a id="isRGBVal">isRGBVal</a>
#### 判断是否是RGB颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：Boolean

---
### <a id="isHEXVal">isHEXVal</a>
#### 判断是否是十六进制颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：Boolean

---
### <a id="isShortHEXVal">isShortHEXVal</a>
#### 判断是否是缩写的十六进制颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：Boolean

---
### <a id="isLongHEXVal">isLongHEXVal</a>
#### 判断是否是六位的十六进制颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：Boolean

---
### <a id="RGB2HEX">RGB2HEX</a>
#### RGB颜色值转换成十六进制颜色值
#### 参数：
		RGBVal，类型：String，描述：RGB颜色值

#### 返回值：
		类型：String，描述：十六进制颜色值

---
### <a id="HEX2RGB">HEX2RGB</a>
#### 十六进制颜色值转换成RGB颜色值
#### 参数：
		HEXVal，类型：String，描述：十六进制颜色值

#### 返回值：
		类型：String，描述：RGB颜色值

---
### <a id="shortHEXVal2LongHEXVal">shortHEXVal2LongHEXVal</a>
#### 缩写的十六进制颜色值转换成六位的十六进制颜色值
#### 参数：
		HEXVal，类型：String，描述：缩写的十六进制颜色值

#### 返回值：
		类型：String，描述：六位的十六进制颜色值

---
### <a id="eqColorVal">eqColorVal</a>
#### 比较两个颜色值是否是同一个颜色
#### 参数：
		val1，类型：String，描述：颜色值
		val2，类型：String，描述：颜色值

#### 返回值：
		类型：Boolean

---
### <a id="assignCssObj">assignCssObj</a>
#### 合并两个css样式对象
#### 参数：
		base，类型：Object，描述：原对象
		obj，类型：Object，描述：要处理的对象

#### 返回值：
		类型：Object，描述：合并后的结果

---
### <a id="getCSSStyle">getCSSStyle</a>
#### 获取dom元素的css的值
#### 参数：
		dom，类型：*，描述：dom元素

#### 返回值：
		类型：Object，描述：dom元素的css的值

---
