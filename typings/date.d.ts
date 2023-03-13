interface CheckFormatDateSignType {
  formatSign: any
  formatSplit: any
}
interface WeekdayType {
  date?: string
  week?: string
}
declare function checkFormatDateSign(formatStr: string): Object<CheckFormatDateSignType> | void;
declare function concatFormatDate(dateObj: Date, formatInfo: Object<CheckFormatDateSignType>): string;
export declare function getWeekDate(startDay?: number = -1, showToday?: boolean = false): Array<WeekdayType>;
export declare function getDateInfoNWeek(dd: Date, day: number, showToday: boolean): Object<WeekdayType>;
export declare function formatDate(dateObj: Date, formatStr?: string = 'YYYY-MM-DD'): string;
export declare function fillZero(str: number|string, len: number): string;
export declare function fillStr(str: number|string, len: number, fill: number|string): string;
export declare function getDays(weekday: number, num: number, startDay?: number, lastResult?: Array<any>): Array<any>;
export declare function getTimeDiffFormat(time: number): string;
export declare function getMonthDay(isFillBlank?: boolean = false, isFirstDayMonday?: boolean = false, customDate?: Date = new Date()): Array<WeekdayType>;