# 文档
## css

[isColorVal（判断是否是颜色值）](#iscolorval)

[isStringColorVal（判断是否是字符串颜色值）](#isstringcolorval)

[stringColor2RGB（字符串颜色值转换成RGB颜色值）](#stringcolor2rgb)

[stringColor2HEX（字符串颜色值转换成十六进制颜色值）](#stringcolor2hex)

[isRGBVal（判断是否是RGB颜色值）](#isrgbval)

[isHEXVal（判断是否是十六进制颜色值）](#ishexval)

[isShortHEXVal（判断是否是缩写的十六进制颜色值）](#isshorthexval)

[isLongHEXVal（判断是否是六位的十六进制颜色值）](#islonghexval)

[RGB2HEX（RGB颜色值转换成十六进制颜色值）](#rgb2hex)

[HEX2RGB（十六进制颜色值转换成RGB颜色值）](#hex2rgb)

[shortHEXVal2LongHEXVal（缩写的十六进制颜色值转换成六位的十六进制颜色值）](#shorthexval2longhexval)

[eqColorVal（比较两个颜色值是否是同一个颜色）](#eqcolorval)

[assignCssObj（合并两个CSS样式对象）](#assigncssobj)

[getCSSStyle（获取DOM元素的CSS的值）](#getcssstyle)

## date

[getWeekDate（获取本周的日期和周几）](#getweekdate)

[formatDate（格式化日期）](#formatdate)

[fillZero（给数值或字符串补充0以满足长度）](#fillzero)

[fillStr（给数值或字符串补充内容以满足长度）](#fillstr)

[getDays（获取最近的（一个或多个）周几（不包括今天））](#getdays)

[getTimeDiffFormat（时间处理方法(显示几天前、几小时前、几分钟前……)）](#gettimediffformat)

[getMonthDay（获取这个月的所有天数与星期）](#getmonthday)

[getDateInfoNWeek（得到某天的日期和周几）](#getdateinfonweek)

## javascript

[filterNumberKeys（过滤对象中数值形式的key）](#filternumberkeys)

[capitalizedFirstLetter（首字母大写）](#capitalizedfirstletter)

[percentNum（得到两数相除的百分数）](#percentnum)

[uniqueArray（数组去重）](#uniquearray)

[uniqueComplexArray（对象数组去重）](#uniquecomplexarray)

[randomNums（获取随机整数）](#randomnums)

[getMinNMax（获取数组中的最小值和最大值）](#getminnmax)

[flatArray（数组拍平）](#flatarray)

[debounce（防抖）](#debounce)

[throttle（节流）](#throttle)

[deepClone（深拷贝）](#deepclone)

[stop（禁止滚动条滚动）](#stop)

[move（恢复滚动条滚动）](#move)

[numFormat（数值增加千位符（,））](#numformat)

[isEmptyObject（判断是否是空对象）](#isemptyobject)

[getTopValue（获取DOM元素距离页面顶部的距离）](#gettopvalue)

[calcAutoIncreaseElms（数值过渡递增效果（可包含字符串），innerText为初始值，data-value为最终值，如：<div id="totalVolume" data-value="£750M">£0M</div>）](#calcautoincreaseelms)

## url

[getUrlParam（获取URL的单个参数）](#geturlparam)

[getUrlParams（获取URL的多个参数）](#geturlparams)

[setUrlParam（设置URL的单个参数）](#seturlparam)

[setUrlParams（设置URL的多个参数）](#seturlparams)

[deleteUrlParam（删除URL的参数）](#deleteurlparam)

[deleteUrlParams（删除URL的参数）](#deleteurlparams)

## utils

[variableType（获取变量类型）](#variabletype)


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
#### 合并两个CSS样式对象
#### 参数：
		base，类型：Object，描述：原对象
		obj，类型：Object，描述：要处理的对象

#### 返回值：
		类型：Object，描述：合并后的结果

---
### getCSSStyle
#### 获取DOM元素的CSS的值
#### 参数：
		DOM，类型：*，描述：DOM元素

#### 返回值：
		类型：Object，描述：DOM元素的CSS的值

---
## date
### getWeekDate
#### 获取本周的日期和周几
#### 参数：
		startDay，类型：Number，描述：开始时间（-1代表今天开始，0代表周日开始，1代表周一开始）
		showToday，类型：Boolean，描述：显示今日还是显示周几，true显示今日

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
### fillZero
#### 给数值或字符串补充0以满足长度
#### 参数：
		str，类型：Number | String，描述：数值或字符串
		len，类型：Number，描述：长度

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
### getDays
#### 获取最近的（一个或多个）周几（不包括今天）
#### 参数：
		weekday，类型：Number，描述：周几（0-6）
		num，类型：Number，描述：个数（大于0）
		startDay，类型：Number，描述：开始时间（大于此刻）（可选参数）
		lastResult，类型：Array，描述：之前的结果（可选参数）

#### 返回值：
		类型：Array，描述：结果

---
### getTimeDiffFormat
#### 时间处理方法(显示几天前、几小时前、几分钟前……)
#### 参数：
		time，类型：Number，描述：时间戳（过去的时间）

#### 返回值：
		类型：String，描述：匹配后的字符串

---
### getMonthDay
#### 获取这个月的所有天数与星期
#### 参数：
		isFillBlank，类型：Boolean，描述：是否需要补充空白（默认不补充），如：1号不是周一/周日时、最后一天不是周日/周六时，补充空对象占位
		isFirstDayMonday，类型：Boolean，描述：一周的第一天是周几（isFillBlank为true时有效，默认第一天是周日），true代表第一天是周一，false代表第一天是周日
		customDate，类型：String|Number|Date，描述：自定义日期，默认是new

#### 返回值：
		类型：Array，描述：{date:Number,weekday:Number}格式的数据；date对应这个月几号，weekday对应周几，0-6

---
### getDateInfoNWeek
#### 得到某天的日期和周几
#### 参数：
		dd，类型：Date，描述：日期对象
		day，类型：Number，描述：今天是周几
		showToday，类型：Boolean，描述：显示今日还是显示周几，默认显示周x

#### 返回值：
		类型：Object，描述：包含date和week属性的对象

---
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
### deepClone
#### 深拷贝
#### 参数：
		item，类型：any

#### 返回值：
		类型：any

---
### stop
#### 禁止滚动条滚动
#### 参数：
		类型：void

#### 返回值：
		类型：void

---
### move
#### 恢复滚动条滚动
#### 参数：
		类型：void

#### 返回值：
		类型：void

---
### numFormat
#### 数值增加千位符（,）
#### 参数：
		num，类型：Number

#### 返回值：
		类型：String

---
### isEmptyObject
#### 判断是否是空对象
#### 参数：
		obj，类型：Object，描述：对象

#### 返回值：
		类型：Boolean

---
### getTopValue
#### 获取DOM元素距离页面顶部的距离
#### 参数：
		DOM，类型：*，描述：DOM元素

#### 返回值：
		类型：Number

---
### calcAutoIncreaseElms
#### 数值过渡递增效果（可包含字符串），innerText为初始值，data-value为最终值，如：<div id="totalVolume" data-value="£750M">£0M</div>
#### 参数：
		DOM，类型：*，描述：DOM元素（数组）

#### 返回值：
		类型：void

---
## url
### getUrlParam
#### 获取URL的单个参数
#### 参数：
		key，类型：String，描述：参数名
		url，类型：String，描述：URL地址，不传的话会取location.href

#### 返回值：
		类型：String，描述：参数值

---
### getUrlParams
#### 获取URL的多个参数
#### 参数：
		keys，类型：Array，描述：参数名列表
		url，类型：String，描述：URL地址，不传的话会取location.href

#### 返回值：
		类型：Object

---
### setUrlParam
#### 设置URL的单个参数
#### 参数：
		key，类型：String，描述：参数名
		val，类型：String | Number，描述：参数值
		url，类型：String，描述：URL地址，不传的话会取location.href

#### 返回值：
		类型：String，描述：新的URL

---
### setUrlParams
#### 设置URL的多个参数
#### 参数：
		params，类型：Object
		url，类型：String，描述：URL地址，不传的话会取location.href

#### 返回值：
		类型：String，描述：新的URL

---
### deleteUrlParam
#### 删除URL的参数
#### 参数：
		key，类型：String，描述：参数名
		url，类型：String，描述：URL地址，不传的话会取location.href

#### 返回值：
		类型：String，描述：新的URL

---
### deleteUrlParams
#### 删除URL的参数
#### 参数：
		keys，类型：Array，描述：参数名列表
		url，类型：String，描述：URL地址，不传的话会取location.href

#### 返回值：
		类型：String，描述：新的URL

---
## utils
### variableType
#### 获取变量类型
#### 参数：
		params，类型：*

#### 返回值：
		类型：String，描述：变量的类型（首字母大写的形式）

---
