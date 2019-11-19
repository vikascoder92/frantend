export class CheckUtil {

  public static isNull(T: any) {
    return T == null;
  }

  public static isUndefined(T: any) {
    return T === undefined;
  }


  public static isNullorUndefined(T: any) {
    return T === undefined || T == null;
  }


  public static isNullEmptyString(T: string) {
    return T === undefined || T == null || T.length === 0;
  }


  public static isEmptyList(T: any[]) {
    return T === undefined || T == null || T.length === 0;
  }

}

