export class AppUtil {
  static isNullOrEmpty(s: string) {
    return s === undefined || s === null || s === '';
  }

  static isNullEmpty(data: any) {
    return data === undefined || data === null;
  }

  static isListNullOrEmpty(list: any[]) {
    return list === undefined || list === null || list.length === 0;
  }
}
