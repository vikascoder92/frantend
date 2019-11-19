import {CheckUtil} from './Utils/CheckUtils';

export class StorageUtil {

  static isFromMainBranch: boolean;

  static getAuthToken() {
    return this.getItem(StorageKeys.TOKEN);
  }

  static saveToken(token: string) {
    this.setItem(StorageKeys.TOKEN, token);
  }

  static getUserId() {
    return '1';
  }

  static logoutUser() {
    this.clearAllData();
  }

  static clearAllData() {
    localStorage.clear()
  }

  static setItem(key: string, value: string) {
    localStorage.setItem(key, value)
  }

  static getItem(key: string) {
    return localStorage.getItem(key)
  }

  public static checkIfIsFromMainBranch() {
    if (!CheckUtil.isNullorUndefined(this.isFromMainBranch)) {
      console.log(this.isFromMainBranch);
      return this.isFromMainBranch;
    } else {
      const boolString = sessionStorage.getItem('isFromMainBranch');
      switch (boolString) {
        case 'false':
          this.isFromMainBranch = false;

          break;
        case 'true':
          this.isFromMainBranch = true;
          break;

        default:
          break;
      }
      return this.isFromMainBranch;
    }
  }


}

export enum StorageKeys {
  TOKEN = 'token',
  LOGIN_RESPONSE = 'login_response',
  USER_ID = 'userId',
  USER_LIST = 'userList'
}
