declare function cloneArray(arrObj: Array<any>): Array<any>;
declare function cloneObj(cloneObj: Object<any>): Object<any>;
declare function cloneMap(mapObj: Map<any>): Map<any>;
declare function cloneSet(mapObj: Set<any>): Set<any>;
declare function mo(e: Event): void;
export declare function filterNumberKeys(obj: Object<any>): Object<any>;
export declare function capitalizedFirstLetter(params: string): string;
export declare function percentNum(num: number, num2: number, type?: number = 1): string;
export declare function uniqueArray(arr: Array<any>): Array<any>;
export declare function uniqueComplexArray(arr: Array<any>, key: string, type?: number = 1): Array<any>;
interface RandomNumsType {
  min?: number = 2
  max?: number = 32
  length?: number = 5
}
export declare function randomNums(params: Object<RandomNumsType>): Array<number>;
interface GetMinNMaxType {
  min: number
  max: number
}
export declare function getMinNMax(arr: Array<any>): Object<GetMinNMaxType>;
export declare function flatArray(arr: Array<any>): Array<any>;
export declare function debounce(fn: Function, delay: number): Function;
export declare function throttle(fn: Function, delay: number): Function;
export declare function deepClone(item: any): any;
export declare function stop(): void;
export declare function move(): void;
export declare function numFormat(num: number): string;
export declare function isEmptyObject(obj: Object<any>): boolean;
export declare function getTopValue(elm: any): number;
export declare function calcAutoIncreaseElms(elms: Array<any>): void;