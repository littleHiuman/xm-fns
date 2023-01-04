!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).xmUtils=t()}(this,(function(){"use strict";function e(e){if("Object"!==t(e))return f("filterNumberKeys");const r={};for(const t in e)if(Object.hasOwnProperty.call(e,t)&&Number.isNaN(+t)){const n=e[t];r[t]=n}return r}function t(e){const t=Object.prototype.toString.call(e);return t.slice(8,t.length-1)}function r(e){return"Array"!==t(e)?f("uniqueArray"):0===e.length?e:[...new Set(e)]}function n(e,t,r){let n=e.getMonth()+1;n=n<10?`0${n}`:n;let o=e.getDate();o=o<10?`0${o}`:o;const i=e.getDay();let a=["周日","周一","周二","周三","周四","周五","周六"][i];return r&&t===i&&(a="今日"),{date:`${n}/${o}`,week:a}}function o(e,r,n){if("String"!==t(e)&&"Number"!==t(e))return f("fillStr");if("Number"!==t(r))return f("fillStr");if("String"!==t(n)&&"Number"!==t(n))return f("fillStr");const o=(e=`${e}`).length;if(o>=r)return e;const i=r-o;return`${n}`.repeat(i)+e}function i(e,r){return"String"!==t(e)&&"Number"!==t(e)||"Number"!==t(r)?f("fillZero"):o(e,r,0)}function a(e){return"Array"==t(e)?function(e){const t=[];for(const r of e)r==e?t.push(t):t.push(a(r));return t}(e):"Object"==t(e)?function(e){const t={};for(const r in e)if(Object.hasOwnProperty.call(e,r)){const n=e[r];t[r]=n==e?t:a(n)}return t}(e):"Map"==t(e)?function(e){const t=new Map;for(const[r,n]of e)n==e?t.set(r,t):t.set(r,a(n));return t}(e):"Set"==t(e)?function(e){const t=new Set;for(const r of e)r==e?t.add(t):t.add(a(r));return t}(e):"Date"==t(e)?new Date((new Date).setTime(e.getTime())):"RegExp"==t(e)?new RegExp(e.source,e.flags):"Function"==t(e)?e.bind():e}function l(e,r){if("String"!==t(e))return f("getUrlParam");if("String"!==t(r))return f("getUrlParam");return new URL(r||location.href).searchParams.get(e)||""}function u(e,r,n){if("String"!==t(e))return f("setUrlParam");if("String"!==t(r)||"Number"!==t(r))return f("setUrlParam");if("String"!==t(n))return f("setUrlParam");const o=new URL(n||location.href);return o.searchParams.set(e,r),o.href}function s(e,r){if("String"!==t(e))return f("deleteUrlParam");if("String"!==t(r))return f("deleteUrlParam");const n=new URL(r||location.href);return n.searchParams.delete(e),n.href}var c={filterNumberKeys:e,capitalizedFirstLetter:function(e){return"String"!==t(e)?f("capitalizedFirstLetter"):/^[a-zA-Z\s]+$/g.test(e)?e.slice(0,1).toUpperCase()+e.slice(1):f("capitalizedFirstLetter")},percentNum:function(e,r,n=1){return"Number"!==t(e)||"Number"!==t(r)||-1===[0,1].indexOf(n)?f("percentNum"):0===e||0===r?0==n?"0%":"0.00%":0===n?`${Math.round(e/r*100)}%`:`${(Math.round(e/r*1e4)/100).toFixed(2)}%`},variableType:t,uniqueArray:r,uniqueComplexArray:function(e,r,n=1){if("Array"!==t(e))return f("uniqueComplexArray");if("String"!==t(r))return f("uniqueComplexArray");if(-1===[0,1].indexOf(n))return f("uniqueComplexArray");if(0===e.length)return e;0===n&&(e=e.reverse());const o=new Map,i=e.filter((e=>!o.has(e[r])&&o.set(e[r],1)));return 0===n?i.reverse():i},randomNums:function(e={}){const{min:r=2,max:n=32}=e;let{length:o=5}=e;if("Number"!==t(o)||"Number"!==t(r)||"Number"!==t(n))return f("randomNums");if(o<=0||n<=r)return f("randomNums");n-r<o&&(o=n-r+1);const i=[];for(let e=o;e>0;e--){const e=Math.round(Math.random()*(n-r))+r;i.includes(e)||i.push(e)}return i},getMinNMax:function(e){if("Array"!==t(e))return f("getMinNMax");if(0===e.length)return;let r=e[0],n=e[0];for(let t=1;t<e.length;t++)r>e[t]&&(r=e[t]),n<e[t]&&(n=e[t]);return{min:r,max:n}},flatArray:function(e){return"Array"!==t(e)?f("flatArray"):0===e.length?e:Array.prototype.flat.call(e,1/0)},getWeekDate:function(e=-1,t=!1){if(-1===[-1,0].indexOf(e))return f("getWeekDate");if("boolean"!=typeof t)return f("getWeekDate");const r=new Date,o=r.getDate(),i=r.getDay();let a,l;const u=[];for(0===e&&0===i||-1===e?l=0:0==e&&0!==i&&(l=-i),a=l;a<=6+l;a++){const e=new Date;e.setDate(o+a),u.push(n(e,i,t))}return u},formatDate:function(e,t="YYYY-MM-DD"){if(!(e instanceof Date))return f("formatDate");const r=function(e){const t={Y:[2,4],M:[1,2],D:[1,2],H:[1,2],h:[1,2],m:[1,2],s:[1,2]},r=e.match(/[a-zA-Z]+/g);if(!r)return;const n=e.match(/[Hh]+/g);if(n&&2==n.length)return;for(const e of r){const r=e[0],n=e.length;if(!t[r]||!t[r].includes(n))return;if(r.repeat(n)!=e)return}const o=e.match(/[^a-zA-Z]/g);if(!o)return;if(o.length+1!=r.length)return;return{formatSign:r,formatSplit:o}}(t);return r?function(e,t){const{formatSign:r,formatSplit:n}=t;let o=0,a="";const l=e.getFullYear(),u=e.getMonth()+1,s=e.getDate(),c=e.getHours(),f=e.getMinutes(),F=e.getSeconds(),m={Y:l,M:u,D:s,H:c,h:c>12?c-12:c,m:f,s:F};for(const e of r){const t=e[0],r=e.length,l=m[t];a+="Y"==t&&2==r?`${l}`.slice(-2):2==r?i(l,2):l,o<n.length&&(a+=n[o++])}return a}(e,r):f("formatDate")},fillStr:o,debounce:function(e,t){let r=null;return function(...n){clearTimeout(r),r=setTimeout((()=>{e.apply(this,n)}),t)}},throttle:function(e,t){let r=!0;return function(...n){r&&(r=!1,setTimeout((()=>{e.apply(this,n),r=!0}),t))}},deepClone:a,stop:function(){document.body.style.overflow="hidden",document.addEventListener("touchmove",(function(e){e.preventDefault()}),!1)},move:function(){document.body.style.overflow="",document.removeEventListener("touchmove",(function(e){e.preventDefault()}),!1)},numFormat:function(e){return"Number"!==t(e)?f("numFormat"):e.toString().replace(/\d+/,(e=>e.replace(/(\d)(?=(\d{3})+$)/g,(e=>`${e},`))))},getUrlParam:l,getUrlParams:function(e,n){if("Array"!==t(e))return f("getUrlParams");if("String"!==t(n))return f("getUrlParams");const o={},i=r(e);for(const e of i)o[e]=l(e,n);return o},setUrlParam:u,setUrlParams:function(e,r){if("Object"!==t(e))return f("setUrlParams");if("String"!==t(r))return f("setUrlParams");let n=r;for(const t in e)if(Object.hasOwnProperty.call(e,t)){n=u(t,e[t],n)}return n},deleteUrlParam:s,deleteUrlParams:function(e,n){if("Array"!==t(e))return f("deleteUrlParams");if("String"!==t(n))return f("deleteUrlParams");const o=r(e);let i=n;for(const e of o)i=s(e,i);return i}};function f(e){if("String"!==t(e))throw new Error("functionName错误");if(!/^[a-zA-Z]+$/g.test(e))throw new Error("functionName错误");throw new Error(`${e}: 参数错误`)}const F={lightpink:"#FFB6C1",pink:"#FFC0CB",crimson:"#DC143C",lavenderblush:"#FFF0F5",palevioletred:"#DB7093",hotpink:"#FF69B4",deeppink:"#FF1493",mediumvioletred:"#C71585",orchid:"#DA70D6",thistle:"#D8BFD8",plum:"#DDA0DD",violet:"#EE82EE",magenta:"#FF00FF",fuchsia:"#FF00FF",darkmagenta:"#8B008B",purple:"#800080",mediumorchid:"#BA55D3",darkvoilet:"#9400D3",darkorchid:"#9932CC",indigo:"#4B0082",blueviolet:"#8A2BE2",mediumpurple:"#9370DB",mediumslateblue:"#7B68EE",slateblue:"#6A5ACD",darkslateblue:"#483D8B",lavender:"#E6E6FA",ghostwhite:"#F8F8FF",blue:"#0000FF",mediumblue:"#0000CD",midnightblue:"#191970",darkblue:"#00008B",navy:"#000080",royalblue:"#4169E1",cornflowerblue:"#6495ED",lightsteelblue:"#B0C4DE",lightslategray:"#778899",slategray:"#708090",doderblue:"#1E90FF",aliceblue:"#F0F8FF",steelblue:"#4682B4",lightskyblue:"#87CEFA",skyblue:"#87CEEB",deepskyblue:"#00BFFF",lightblue:"#ADD8E6",powderblue:"#B0E0E6",cadetblue:"#5F9EA0",azure:"#F0FFFF",lightcyan:"#E1FFFF",paleturquoise:"#AFEEEE",cyan:"#00FFFF",aqua:"#D4F2E7",darkturquoise:"#00CED1",darkslategray:"#2F4F4F",darkcyan:"#008B8B",teal:"#008080",mediumturquoise:"#48D1CC",lightseagreen:"#20B2AA",turquoise:"#40E0D0",auqamarin:"#7FFFAA",mediumaquamarine:"#00FA9A",mediumspringgreen:"#00FF7F",mintcream:"#F5FFFA",springgreen:"#3CB371",seagreen:"#2E8B57",honeydew:"#F0FFF0",lightgreen:"#90EE90",palegreen:"#98FB98",darkseagreen:"#8FBC8F",limegreen:"#32CD32",lime:"#00FF00",forestgreen:"#228B22",green:"#008000",darkgreen:"#006400",chartreuse:"#7FFF00",lawngreen:"#7CFC00",greenyellow:"#ADFF2F",olivedrab:"#556B2F",beige:"#F5F5DC",lightgoldenrodyellow:"#FAFAD2",ivory:"#FFFFF0",lightyellow:"#FFFFE0",yellow:"#FFFF00",olive:"#808000",darkkhaki:"#BDB76B",lemonchiffon:"#FFFACD",palegodenrod:"#EEE8AA",khaki:"#F0E68C",gold:"#FFD700",cornislk:"#FFF8DC",goldenrod:"#DAA520",floralwhite:"#FFFAF0",oldlace:"#FDF5E6",wheat:"#F5DEB3",moccasin:"#FFE4B5",orange:"#FFA500",papayawhip:"#FFEFD5",blanchedalmond:"#FFEBCD",navajowhite:"#FFDEAD",antiquewhite:"#FAEBD7",tan:"#D2B48C",brulywood:"#DEB887",bisque:"#FFE4C4",darkorange:"#FF8C00",linen:"#FAF0E6",peru:"#CD853F",peachpuff:"#FFDAB9",sandybrown:"#F4A460",chocolate:"#D2691E",saddlebrown:"#8B4513",seashell:"#FFF5EE",sienna:"#A0522D",lightsalmon:"#FFA07A",coral:"#FF7F50",orangered:"#FF4500",darksalmon:"#E9967A",tomato:"#FF6347",mistyrose:"#FFE4E1",salmon:"#FA8072",snow:"#FFFAFA",lightcoral:"#F08080",rosybrown:"#BC8F8F",indianred:"#CD5C5C",red:"#FF0000",brown:"#A52A2A",firebrick:"#B22222",darkred:"#8B0000",maroon:"#800000",white:"#FFFFFF",whitesmoke:"#F5F5F5",gainsboro:"#DCDCDC",lightgrey:"#D3D3D3",silver:"#C0C0C0",darkgray:"#A9A9A9",gray:"#808080",dimgray:"#696969",black:"#000000"};function m(e){return e=e.trim().toLowerCase(),!!F[e]}function g(e){return m(e=e.trim().toLowerCase())?C(F[e]):f("RGB2HEX")}function d(e){return m(e=e.trim().toLowerCase())?F[e]:f("RGB2HEX")}function p(e){return e=e.trim().replace(/ /g,""),/^rgb\(\d{1,3}\,\d{1,3}\,\d{1,3}\)$/g.test(e)}function h(e){return b(e)||D(e)}function b(e){return e=e.trim(),/^#[0-9a-zA-Z]{3}$/g.test(e)}function D(e){return e=e.trim(),/^#[0-9a-zA-Z]{6}$/g.test(e)}function E(e){if(p(e=e.trim().replace(/ /g,""))){const t=e.slice(4,-1).split(",");for(const e in t)if(Object.hasOwnProperty.call(t,e)){const r=t[e];t[e]=(r-0).toString(16)}return`#${t.join("").toUpperCase()}`}return f("RGB2HEX")}function C(e){if(b(e=e.trim())){const t=e.slice(1,2),r=e.slice(2,3),n=e.slice(3,4);return`rgb(${`${Number.parseInt(t+t,16)},${Number.parseInt(r+r,16)},${Number.parseInt(n+n,16)}`})`}if(D(e)){const t=e.slice(1,3),r=e.slice(3,5),n=e.slice(5,7);return`rgb(${`${Number.parseInt(t,16)},${Number.parseInt(r,16)},${Number.parseInt(n,16)}`})`}return f("HEX2RGB")}function y(e){const t=e.trim();if(b(t)){const e=t.slice(1,2),r=t.slice(2,3),n=t.slice(3,4);return`#${e+e+r+r+n+n}`}return D(e)?e:f("shortHEXVal2LongHEXVal")}function A(e,t){const r={};for(const n in e)if(Object.hasOwnProperty.call(e,n)){const o=e[n],i=t[n];r[n]=!o&&i?i:o&&!i||o&&i&&("initial"===i||o===i)?o:i}for(const e in t)if(Object.hasOwnProperty.call(t,e)){const n=t[e];r[e]||(r[e]=n)}return r}var w={isColorVal:function(e){return p(e)||h(e)||m(e)},isStringColorVal:m,stringColor2RGB:g,stringColor2HEX:d,isRGBVal:p,isHEXVal:h,isShortHEXVal:b,isLongHEXVal:D,RGB2HEX:E,HEX2RGB:C,shortHEXVal2LongHEXVal:y,eqColorVal:function(e,t){return e=e.trim(),t=t.trim(),p(e)&&p(t)?function(e,t){return e=e.trim(),t=t.trim(),p(e)&&p(t)?e.replace(/ /g,"")==t.replace(/ /g,""):f("eqRGBVal")}(e,t):h(e)&&h(t)?function(e,t){return e=e.trim(),t=t.trim(),h(e)&&h(t)?y(e).toUpperCase()==y(t).toUpperCase():f("eqHEXVal")}(e,t):m(e)&&m(t)?function(e,t){return e=e.trim(),t=t.trim(),m(e)&&m(t)?e.toLowerCase()==t.toLowerCase():f("eqStringColorVal")}(e,t):p(e)&&h(t)||h(e)&&p(t)?function(e,t){return p(e)&&h(t)?y(E(e))==y(t).toUpperCase():h(e)&&p(t)?y(E(t))==y(e).toUpperCase():f("eqRGBNHEX")}(e,t):m(e)&&!m(t)||!m(e)&&m(t)?function(e,t){return m(e)&&p(t)?g(e)==t.replace(/ /g,""):m(e)&&h(t)?d(e).toUpperCase()==y(t).toUpperCase():m(t)&&p(e)?g(t)==e.replace(/ /g,""):m(t)&&h(e)?d(t).toUpperCase()==y(e).toUpperCase():f("eqStringColorValNOther")}(e,t):f("eqColorVal")},assignCssObj:A,getCSSStyle:function(t){return t instanceof window.HTMLElement?A(e(window.getComputedStyle(t)),e(t.style)):f("getCSSStyle")}};return Object.assign({},w,c)}));
