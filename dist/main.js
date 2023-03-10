!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).xmUtils=t()}(this,(function(){"use strict";function e(e){throw function(e){if("String"!==t(e))throw new Error(`${e}错误`);if(!/^[a-zA-Z]+$/g.test(e))throw new Error(`${e}错误`)}(e),new Error(`${e}: 参数错误`)}function t(e){const t=Object.prototype.toString.call(e);return t.slice(8,t.length-1)}var r={variableType:t};function n(r){if("Object"!==t(r))return e("filterNumberKeys");const n={};for(const e in r)if(Object.hasOwnProperty.call(r,e)&&Number.isNaN(+e)){const t=r[e];n[e]=t}return n}function o(e){return"Array"==t(e)?function(e){const t=[];for(const r of e)r==e?t.push(t):t.push(o(r));return t}(e):"Object"==t(e)?function(e){const t={};for(const r in e)if(Object.hasOwnProperty.call(e,r)){const n=e[r];t[r]=n==e?t:o(n)}return t}(e):"Map"==t(e)?function(e){const t=new Map;for(const[r,n]of e)n==e?t.set(r,t):t.set(r,o(n));return t}(e):"Set"==t(e)?function(e){const t=new Set;for(const r of e)r==e?t.add(t):t.add(o(r));return t}(e):"Date"==t(e)?new Date((new Date).setTime(e.getTime())):"RegExp"==t(e)?new RegExp(e.source,e.flags):"Function"==t(e)?e.bind():e}const i=function(e){e.preventDefault()};var a={filterNumberKeys:n,capitalizedFirstLetter:function(r){return"String"!==t(r)?e("capitalizedFirstLetter"):/^[a-zA-Z\s]+$/g.test(r)?r.slice(0,1).toUpperCase()+r.slice(1):e("capitalizedFirstLetter")},percentNum:function(r,n,o=1){return"Number"!==t(r)||"Number"!==t(n)||-1===[0,1].indexOf(o)?e("percentNum"):0===r||0===n?0==o?"0%":"0.00%":0===o?`${Math.round(r/n*100)}%`:`${(Math.round(r/n*1e4)/100).toFixed(2)}%`},uniqueArray:function(r){return"Array"!==t(r)?e("uniqueArray"):0===r.length?r:[...new Set(r)]},uniqueComplexArray:function(r,n,o=1){if("Array"!==t(r))return e("uniqueComplexArray");if("String"!==t(n))return e("uniqueComplexArray");if(-1===[0,1].indexOf(o))return e("uniqueComplexArray");if(0===r.length)return r;0===o&&(r=r.reverse());const i=new Map,a=r.filter((e=>!i.has(e[n])&&i.set(e[n],1)));return 0===o?a.reverse():a},randomNums:function(r={}){const{min:n=2,max:o=32}=r;let{length:i=5}=r;if("Number"!==t(i)||"Number"!==t(n)||"Number"!==t(o))return e("randomNums");if(i<=0||o<=n)return e("randomNums");o-n<i&&(i=o-n+1);const a=[];for(let e=i;e>0;e--){const e=Math.round(Math.random()*(o-n))+n;a.includes(e)||a.push(e)}return a},getMinNMax:function(r){if("Array"!==t(r))return e("getMinNMax");if(0===r.length)return;let n=r[0],o=r[0];for(let e=1;e<r.length;e++)n>r[e]&&(n=r[e]),o<r[e]&&(o=r[e]);return{min:n,max:o}},flatArray:function(r){return"Array"!==t(r)?e("flatArray"):0===r.length?r:Array.prototype.flat.call(r,1/0)},debounce:function(e,t){let r=null;return function(...n){clearTimeout(r),r=setTimeout((()=>{e.apply(this,n)}),t)}},throttle:function(e,t){let r=!0;return function(...n){r&&(r=!1,setTimeout((()=>{e.apply(this,n),r=!0}),t))}},deepClone:o,stop:function(){document.body.style.overflow="hidden",document.addEventListener("touchmove",i,!1)},move:function(){document.body.style.overflow="",document.removeEventListener("touchmove",i,!1)},numFormat:function(r){return"Number"!==t(r)?e("numFormat"):r.toString().replace(/\d+/,(e=>e.replace(/(\d)(?=(\d{3})+$)/g,(e=>`${e},`))))},isEmptyObject:function(r){return"Object"!==t(r)?e("isEmptyObject"):0===Object.keys(r).length}};const u={lightpink:"#FFB6C1",pink:"#FFC0CB",crimson:"#DC143C",lavenderblush:"#FFF0F5",palevioletred:"#DB7093",hotpink:"#FF69B4",deeppink:"#FF1493",mediumvioletred:"#C71585",orchid:"#DA70D6",thistle:"#D8BFD8",plum:"#DDA0DD",violet:"#EE82EE",magenta:"#FF00FF",fuchsia:"#FF00FF",darkmagenta:"#8B008B",purple:"#800080",mediumorchid:"#BA55D3",darkvoilet:"#9400D3",darkorchid:"#9932CC",indigo:"#4B0082",blueviolet:"#8A2BE2",mediumpurple:"#9370DB",mediumslateblue:"#7B68EE",slateblue:"#6A5ACD",darkslateblue:"#483D8B",lavender:"#E6E6FA",ghostwhite:"#F8F8FF",blue:"#0000FF",mediumblue:"#0000CD",midnightblue:"#191970",darkblue:"#00008B",navy:"#000080",royalblue:"#4169E1",cornflowerblue:"#6495ED",lightsteelblue:"#B0C4DE",lightslategray:"#778899",slategray:"#708090",doderblue:"#1E90FF",aliceblue:"#F0F8FF",steelblue:"#4682B4",lightskyblue:"#87CEFA",skyblue:"#87CEEB",deepskyblue:"#00BFFF",lightblue:"#ADD8E6",powderblue:"#B0E0E6",cadetblue:"#5F9EA0",azure:"#F0FFFF",lightcyan:"#E1FFFF",paleturquoise:"#AFEEEE",cyan:"#00FFFF",aqua:"#D4F2E7",darkturquoise:"#00CED1",darkslategray:"#2F4F4F",darkcyan:"#008B8B",teal:"#008080",mediumturquoise:"#48D1CC",lightseagreen:"#20B2AA",turquoise:"#40E0D0",auqamarin:"#7FFFAA",mediumaquamarine:"#00FA9A",mediumspringgreen:"#00FF7F",mintcream:"#F5FFFA",springgreen:"#3CB371",seagreen:"#2E8B57",honeydew:"#F0FFF0",lightgreen:"#90EE90",palegreen:"#98FB98",darkseagreen:"#8FBC8F",limegreen:"#32CD32",lime:"#00FF00",forestgreen:"#228B22",green:"#008000",darkgreen:"#006400",chartreuse:"#7FFF00",lawngreen:"#7CFC00",greenyellow:"#ADFF2F",olivedrab:"#556B2F",beige:"#F5F5DC",lightgoldenrodyellow:"#FAFAD2",ivory:"#FFFFF0",lightyellow:"#FFFFE0",yellow:"#FFFF00",olive:"#808000",darkkhaki:"#BDB76B",lemonchiffon:"#FFFACD",palegodenrod:"#EEE8AA",khaki:"#F0E68C",gold:"#FFD700",cornislk:"#FFF8DC",goldenrod:"#DAA520",floralwhite:"#FFFAF0",oldlace:"#FDF5E6",wheat:"#F5DEB3",moccasin:"#FFE4B5",orange:"#FFA500",papayawhip:"#FFEFD5",blanchedalmond:"#FFEBCD",navajowhite:"#FFDEAD",antiquewhite:"#FAEBD7",tan:"#D2B48C",brulywood:"#DEB887",bisque:"#FFE4C4",darkorange:"#FF8C00",linen:"#FAF0E6",peru:"#CD853F",peachpuff:"#FFDAB9",sandybrown:"#F4A460",chocolate:"#D2691E",saddlebrown:"#8B4513",seashell:"#FFF5EE",sienna:"#A0522D",lightsalmon:"#FFA07A",coral:"#FF7F50",orangered:"#FF4500",darksalmon:"#E9967A",tomato:"#FF6347",mistyrose:"#FFE4E1",salmon:"#FA8072",snow:"#FFFAFA",lightcoral:"#F08080",rosybrown:"#BC8F8F",indianred:"#CD5C5C",red:"#FF0000",brown:"#A52A2A",firebrick:"#B22222",darkred:"#8B0000",maroon:"#800000",white:"#FFFFFF",whitesmoke:"#F5F5F5",gainsboro:"#DCDCDC",lightgrey:"#D3D3D3",silver:"#C0C0C0",darkgray:"#A9A9A9",gray:"#808080",dimgray:"#696969",black:"#000000"};function l(e){return e=e.trim().toLowerCase(),!!u[e]}function s(t){return l(t=t.trim().toLowerCase())?p(u[t]):e("RGB2HEX")}function c(t){return l(t=t.trim().toLowerCase())?u[t]:e("RGB2HEX")}function f(e){return e=e.trim().replace(/ /g,""),/^rgb\(\d{1,3}\,\d{1,3}\,\d{1,3}\)$/g.test(e)}function F(e){return g(e)||m(e)}function g(e){return e=e.trim(),/^#[0-9a-zA-Z]{3}$/g.test(e)}function m(e){return e=e.trim(),/^#[0-9a-zA-Z]{6}$/g.test(e)}function d(t){if(f(t=t.trim().replace(/ /g,""))){const e=t.slice(4,-1).split(",");for(const t in e)if(Object.hasOwnProperty.call(e,t)){const r=e[t];e[t]=(r-0).toString(16)}return`#${e.join("").toUpperCase()}`}return e("RGB2HEX")}function p(t){if(g(t=t.trim())){const e=t.slice(1,2),r=t.slice(2,3),n=t.slice(3,4);return`rgb(${`${Number.parseInt(e+e,16)},${Number.parseInt(r+r,16)},${Number.parseInt(n+n,16)}`})`}if(m(t)){const e=t.slice(1,3),r=t.slice(3,5),n=t.slice(5,7);return`rgb(${`${Number.parseInt(e,16)},${Number.parseInt(r,16)},${Number.parseInt(n,16)}`})`}return e("HEX2RGB")}function h(t){const r=t.trim();if(g(r)){const e=r.slice(1,2),t=r.slice(2,3),n=r.slice(3,4);return`#${e+e+t+t+n+n}`}return m(t)?t:e("shortHEXVal2LongHEXVal")}function D(e,t){const r={};for(const n in e)if(Object.hasOwnProperty.call(e,n)){const o=e[n],i=t[n];r[n]=!o&&i?i:o&&!i||o&&i&&("initial"===i||o===i)?o:i}for(const e in t)if(Object.hasOwnProperty.call(t,e)){const n=t[e];r[e]||(r[e]=n)}return r}var y={isColorVal:function(e){return f(e)||F(e)||l(e)},isStringColorVal:l,stringColor2RGB:s,stringColor2HEX:c,isRGBVal:f,isHEXVal:F,isShortHEXVal:g,isLongHEXVal:m,RGB2HEX:d,HEX2RGB:p,shortHEXVal2LongHEXVal:h,eqColorVal:function(t,r){return t=t.trim(),r=r.trim(),f(t)&&f(r)?function(t,r){return t=t.trim(),r=r.trim(),f(t)&&f(r)?t.replace(/ /g,"")==r.replace(/ /g,""):e("eqRGBVal")}(t,r):F(t)&&F(r)?function(t,r){return t=t.trim(),r=r.trim(),F(t)&&F(r)?h(t).toUpperCase()==h(r).toUpperCase():e("eqHEXVal")}(t,r):l(t)&&l(r)?function(t,r){return t=t.trim(),r=r.trim(),l(t)&&l(r)?t.toLowerCase()==r.toLowerCase():e("eqStringColorVal")}(t,r):f(t)&&F(r)||F(t)&&f(r)?function(t,r){return f(t)&&F(r)?h(d(t))==h(r).toUpperCase():F(t)&&f(r)?h(d(r))==h(t).toUpperCase():e("eqRGBNHEX")}(t,r):l(t)&&!l(r)||!l(t)&&l(r)?function(t,r){return l(t)&&f(r)?s(t)==r.replace(/ /g,""):l(t)&&F(r)?c(t).toUpperCase()==h(r).toUpperCase():l(r)&&f(t)?s(r)==t.replace(/ /g,""):l(r)&&F(t)?c(r).toUpperCase()==h(t).toUpperCase():e("eqStringColorValNOther")}(t,r):e("eqColorVal")},assignCssObj:D,getCSSStyle:function(t){return t instanceof window.HTMLElement?D(n(window.getComputedStyle(t)),n(t.style)):e("getCSSStyle")}};function b(e,t,r){let n=e.getMonth()+1;n=n<10?`0${n}`:n;let o=e.getDate();o=o<10?`0${o}`:o;const i=e.getDay();let a=["周日","周一","周二","周三","周四","周五","周六"][i];return r&&t===i&&(a="今日"),{date:`${n}/${o}`,week:a}}function E(r,n){return"String"!==t(r)&&"Number"!==t(r)||"Number"!==t(n)?e("fillZero"):C(r,n,0)}function C(r,n,o){if("String"!==t(r)&&"Number"!==t(r))return e("fillStr");if("Number"!==t(n))return e("fillStr");if("String"!==t(o)&&"Number"!==t(o))return e("fillStr");const i=(r=`${r}`).length;if(i>=n)return r;const a=n-i;return`${o}`.repeat(a)+r}var A={getWeekDate:function(t=-1,r=!1){if(-1===[-1,0].indexOf(t))return e("getWeekDate");if("boolean"!=typeof r)return e("getWeekDate");const n=new Date,o=n.getDate(),i=n.getDay();let a,u;const l=[];for(0===t&&0===i||-1===t?u=0:0==t&&0!==i&&(u=-i),a=u;a<=6+u;a++){const e=new Date;e.setDate(o+a),l.push(b(e,i,r))}return l},getDateInfoNWeek:b,formatDate:function(t,r="YYYY-MM-DD"){if(!(t instanceof Date))return e("formatDate");const n=function(e){const t={Y:[2,4],M:[1,2],D:[1,2],H:[1,2],h:[1,2],m:[1,2],s:[1,2]},r=e.match(/[a-zA-Z]+/g);if(!r)return;const n=e.match(/[Hh]+/g);if(n&&2==n.length)return;for(const e of r){const r=e[0],n=e.length;if(!t[r]||!t[r].includes(n))return;if(r.repeat(n)!=e)return}const o=e.match(/[^a-zA-Z]/g);if(!o)return;if(o.length+1!=r.length)return;return{formatSign:r,formatSplit:o}}(r);return n?function(e,t){const{formatSign:r,formatSplit:n}=t;let o=0,i="";const a=e.getFullYear(),u=e.getMonth()+1,l=e.getDate(),s=e.getHours(),c=e.getMinutes(),f=e.getSeconds(),F={Y:a,M:u,D:l,H:s,h:s>12?s-12:s,m:c,s:f};for(const e of r){const t=e[0],r=e.length,a=F[t];i+="Y"==t&&2==r?`${a}`.slice(-2):2==r?E(a,2):a,o<n.length&&(i+=n[o++])}return i}(t,n):e("formatDate")},fillZero:E,fillStr:C,getDays:function r(n,o,i,a){if(-1===[0,1,2,3,4,5,6].indexOf(n)||o<=0)return e("getDays");const u=new Date;if(i&&("Number"!==t(i)||i<u.getTime()))return e("getDays");if(a&&"Array"!==t(a))return e("getDays");const l=i?new Date(i):u,s=l.getDay(),c=864e5;let f;const F=a||[];s==n?f=7*c:s<n?f=(n-s)*c:s>n&&(f=(7-s+n)*c);const g=new Date(l.getTime()+f);return F.push(g),--o&&r(n,o,g.getTime(),F),F},getTimeDiffFormat:function(r){if("Number"!==t(r))return e("getTimeDiffFormat");const n=r,o=(new Date).getTime();if(o<n)return e("getTimeDiffFormat");const i=o-n,a=1e3,u=6e4,l=36e5,s=24*l,c=30*s,f=12*c;return i<a?"刚刚":i<u?`${parseInt(i/a)}秒前`:i<l?`${parseInt(i/u)}分钟前`:i<s?`${parseInt(i/l)}小时前`:i<c?`${parseInt(i/s)}天前`:i<f?`${parseInt(i/c)}月前`:`${parseInt(i/f)}年前`},getMonthDay:function(r=!1,n=!1,o=new Date){if("Boolean"!==t(r))return e("getMonthDay");if("Boolean"!==t(n))return e("getMonthDay");let i;if(void 0!==o)if("String"===t(o)){const t=o.split(/[^\d]/g);if(2!==t.length)return e("getMonthDay");i=new Date(t.join("-"))}else if("Number"===t(o))i=new Date(o);else{if("Date"!==t(o))return e("getMonthDay");i=o}const a=`${i.getFullYear()}-${i.getMonth()+1}-1`,u=`${i.getFullYear()}-${i.getMonth()+2}-1`,l=new Date(a),s=new Date(new Date(u).getTime()-864e5),c=l.getDay(),f=s.getDate(),F=[];for(let e=0;e<f;e++)F.push({date:e+1,weekday:(c+e)%7});if(r){const e=s.getDay();let t=c,r=7-e-1;n&&(t=(c+6)%7,r=(7-e)%7);const o=[{},{},{},{},{},{},{}];F.unshift(...o.slice(0,t)),F.push(...o.slice(0,r))}return F}};function w(r,n){if("String"!==t(r))return e("getUrlParam");if("String"!==t(n))return e("getUrlParam");return new URL(n||location.href).searchParams.get(r)||""}function B(r,n,o){if("String"!==t(r))return e("setUrlParam");if("String"!==t(n)||"Number"!==t(n))return e("setUrlParam");if("String"!==t(o))return e("setUrlParam");const i=new URL(o||location.href);return i.searchParams.set(r,n),i.href}function S(r,n){if("String"!==t(r))return e("deleteUrlParam");if("String"!==t(n))return e("deleteUrlParam");const o=new URL(n||location.href);return o.searchParams.delete(r),o.href}var $={getUrlParam:w,getUrlParams:function(r,n){if("Array"!==t(r))return e("getUrlParams");if("String"!==t(n))return e("getUrlParams");const o={},i=a.uniqueArray(r);for(const e of i)o[e]=w(e,n);return o},setUrlParam:B,setUrlParams:function(r,n){if("Object"!==t(r))return e("setUrlParams");if("String"!==t(n))return e("setUrlParams");let o=n;for(const e in r)if(Object.hasOwnProperty.call(r,e)){o=B(e,r[e],o)}return o},deleteUrlParam:S,deleteUrlParams:function(r,n){if("Array"!==t(r))return e("deleteUrlParams");if("String"!==t(n))return e("deleteUrlParams");const o=a.uniqueArray(r);let i=n;for(const e of o)i=S(e,i);return i}};return Object.assign({},y,a,A,$,r)}));
