declare module 'xm-fns' {
  /**css */
  declare function isColorVal(val: string): boolean;
  declare function isStringColorVal(val: string): boolean;
  declare function stringColor2RGB(val: string): string;
  declare function stringColor2HEX(val: string): string;
  declare function isRGBVal(val: string): boolean;
  declare function isHEXVal(val: string): boolean;
  declare function isShortHEXVal(val: string): boolean;
  declare function isLongHEXVal(val: string): boolean;
  declare function RGB2HEX(RGBVal: string): string;
  declare function HEX2RGB(HEXVal: string): string;
  declare function shortHEXVal2LongHEXVal(HEXVal: string): string;
  declare function eqColorVal(val1: string, val2: string): boolean;
  declare function assignCssObj(base: Object<any>, obj: Object<any>): Object<any>;
  declare function getCSSStyle(dom: HTMLElement): Object<any>;

  /**date */
  declare function getWeekDate(startDay?: number = -1, showToday?: boolean = false): Array<any>;
  declare function getDateInfoNWeek(dd: Date, day: number, showToday: boolean): Object<any>;
  declare function formatDate(dateObj: Date, formatStr?: string = 'YYYY-MM-DD'): string;
  declare function fillZero(str: number|string, len: number): string;
  declare function fillStr(str: number|string, len: number, fill: number|string): string;
  declare function getDays(weekday: number, num: number, startDay: number, lastResult: Array<any>): Array<any>;
  declare function getTimeDiffFormat(time: number): string;
  declare function getMonthDay(isFillBlank?: boolean = false, isFirstDayMonday?: boolean = false, customDate?: Date = new Date()): Array<any>;

  /**javascript */
  declare function filterNumberKeys(obj: Object<any>): Object<any>;
  declare function capitalizedFirstLetter(params: string): string;
  declare function percentNum(num: number, num2: number, type?: number = 1): string;
  declare function uniqueArray(arr: Array<any>): Array<any>;
  declare function uniqueComplexArray(arr: Array<any>, key: string, type?: number = 1): Array<any>;
  interface RandomNumsType {
    min?: number = 2
    max?: number = 32
    length?: number = 5
  }
  declare function randomNums(params: Object<RandomNumsType>): Array<number>;
  interface GetMinNMaxType {
    min: number
    max: number
  }
  declare function getMinNMax(arr: Array<any>): Object<GetMinNMaxType>;
  declare function flatArray(arr: Array<any>): Array<any>;
  declare function debounce(fn: Function, delay: number): Function;
  declare function throttle(fn: Function, delay: number): Function;
  declare function deepClone(item: any): any;
  declare function stop(): void;
  declare function move(): void;
  declare function numFormat(num: number): string;
  declare function isEmptyObject(obj: Object<any>): boolean;

  /**url */
  declare function getUrlParam(key: string, url: string): string;
  declare function getUrlParams(keys: Array<any>, url: string): Object<any>;
  declare function setUrlParam(key: string, val: string|number, url:string): string;
  declare function setUrlParams(params: Object<any>, url: string): string;
  declare function deleteUrlParam(key: string, url: string): string;
  declare function deleteUrlParams(keys: Array<any>, url: string): string;

  /**utils */
  declare function variableType(params: any): string;
}
interface Window {
  xmFns: any;
}