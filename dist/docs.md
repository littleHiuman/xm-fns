# 文档
## javascript

[filterNumberKeys](#filternumberkeys)

[capitalizedFirstLetter](#capitalizedfirstletter)

[percentNum](#percentnum)

[variableType](#variabletype)

[uniqueArray](#uniquearray)

[uniqueComplexArray](#uniquecomplexarray)

[randomNums](#randomnums)

[getMinNMax](#getminnmax)

[flatArray](#flatarray)

[getWeekDate](#getweekdate)

[formatDate](#formatdate)

[fillStr](#fillstr)

[debounce](#debounce)

[throttle](#throttle)

## css

[isColorVal](#iscolorval)

[isStringColorVal](#isstringcolorval)

[stringColor2RGB](#stringcolor2rgb)

[stringColor2HEX](#stringcolor2hex)

[isRGBVal](#isrgbval)

[isHEXVal](#ishexval)

[isShortHEXVal](#isshorthexval)

[isLongHEXVal](#islonghexval)

[RGB2HEX](#rgb2hex)

[HEX2RGB](#hex2rgb)

[shortHEXVal2LongHEXVal](#shorthexval2longhexval)

[eqColorVal](#eqcolorval)

[assignCssObj](#assigncssobj)

[getCSSStyle](#getcssstyle)


## javascript
### filterNumberKeys
#### 过滤对象中数值形式的key
#### 参数：
		obj，类型：Object，描述：对象

#### 返回值：
		类型：Object，描述：处理后的对象

---
### capitalizedFirstLetter
#### 首字母大写
#### 参数：
		params，类型：String

#### 返回值：
		类型：String

---
### percentNum
#### 得到两数相除的百分数
#### 参数：
		num，类型：Number，描述：分子
		num2，类型：Number，描述：分母
		type，类型：Number，描述：默认为1（1：得到的是保留两位小数的数；0：得到的是整数）

#### 返回值：
		类型：String，描述：返回计算后的结果加上百分号，如33.33%

---
### variableType
#### 获取变量类型
#### 参数：
		params，类型：*

#### 返回值：
		类型：String，描述：变量的类型（首字母大写的形式）

---
### uniqueArray
#### 数组去重
#### 参数：
		arr，类型：Array

#### 返回值：
		类型：Array

---
### uniqueComplexArray
#### 对象数组去重
#### 参数：
		arr，类型：Array
		key，类型：String，描述：对象的唯一标识属性
		type，类型：Number，描述：默认为1（1：如果有重复，保留先添加的数据

#### 返回值：
		类型：Array

---
### randomNums
#### 获取随机整数
#### 参数：
		params，类型：Object
		params.length，类型：Number，描述：默认5
		params.min，类型：Number，描述：默认2
		params.max，类型：Number，描述：默认32

#### 返回值：
		类型：Array

---
### getMinNMax
#### 获取数组中的最小值和最大值
#### 参数：
		arr，类型：Array

#### 返回值：
		类型：Object，描述：包含min和max属性的对象

---
### flatArray
#### 数组拍平
#### 参数：
		arr，类型：Array

#### 返回值：
		类型：Array

---
### getWeekDate
#### 获取本周的日期和周几
#### 参数：
		startDay，类型：Number
		showToday，类型：Boolean

#### 返回值：
		类型：Array

---
### formatDate
#### 格式化日期
#### 参数：
		dateObj，类型：Date，描述：日期对象
		formatStr，类型：String，描述：标识

#### 返回值：
		类型：String

---
### fillStr
#### 给数值或字符串补充内容以满足长度
#### 参数：
		str，类型：Number | String，描述：数值或字符串
		len，类型：Number，描述：长度
		fill，类型：Number | String，描述：要补充的内容（数值或字符串）

#### 返回值：
		类型：String

---
### debounce
#### 防抖
#### 参数：
		fn，类型：Function
		delay，类型：Number

#### 返回值：
		类型：Function

---
### throttle
#### 节流
#### 参数：
		fn，类型：Function
		delay，类型：Number

#### 返回值：
		类型：Function

---
## css
### isColorVal
#### 判断是否是颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：Boolean

---
### isStringColorVal
#### 判断是否是字符串颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：Boolean

---
### stringColor2RGB
#### 字符串颜色值转换成RGB颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：String

---
### stringColor2HEX
#### 字符串颜色值转换成十六进制颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：String

---
### isRGBVal
#### 判断是否是RGB颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：Boolean

---
### isHEXVal
#### 判断是否是十六进制颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：Boolean

---
### isShortHEXVal
#### 判断是否是缩写的十六进制颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：Boolean

---
### isLongHEXVal
#### 判断是否是六位的十六进制颜色值
#### 参数：
		val，类型：String，描述：颜色值

#### 返回值：
		类型：Boolean

---
### RGB2HEX
#### RGB颜色值转换成十六进制颜色值
#### 参数：
		RGBVal，类型：String，描述：RGB颜色值

#### 返回值：
		类型：String，描述：十六进制颜色值

---
### HEX2RGB
#### 十六进制颜色值转换成RGB颜色值
#### 参数：
		HEXVal，类型：String，描述：十六进制颜色值

#### 返回值：
		类型：String，描述：RGB颜色值

---
### shortHEXVal2LongHEXVal
#### 缩写的十六进制颜色值转换成六位的十六进制颜色值
#### 参数：
		HEXVal，类型：String，描述：缩写的十六进制颜色值

#### 返回值：
		类型：String，描述：六位的十六进制颜色值

---
### eqColorVal
#### 比较两个颜色值是否是同一个颜色
#### 参数：
		val1，类型：String，描述：颜色值
		val2，类型：String，描述：颜色值

#### 返回值：
		类型：Boolean

---
### assignCssObj
#### 合并两个css样式对象
#### 参数：
		base，类型：Object，描述：原对象
		obj，类型：Object，描述：要处理的对象

#### 返回值：
		类型：Object，描述：合并后的结果

---
### getCSSStyle
#### 获取dom元素的css的值
#### 参数：
		dom，类型：*，描述：dom元素

#### 返回值：
		类型：Object，描述：dom元素的css的值

---
