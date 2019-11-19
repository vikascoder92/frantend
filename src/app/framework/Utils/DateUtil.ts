import * as moment from 'moment';

export class DateUtil {
  static getStandardTime(
    serverdatestr: string,
    serverformat: string,
    reqformat: string
  ) {
    return moment(moment(serverdatestr, serverformat).toDate()).format(
      reqformat
    );
  }

  static getUTCTime(
    serverdatestr: string,
    serverformat: string,
    reqformat: string
  ) {
    return moment(moment.utc(serverdatestr, serverformat).toDate()).format(
      reqformat
    );
  }

  static getStringDatefromJSON(json: any, reqformat: string) {
    return moment(moment(json).toISOString()).format(reqformat);
  }

  static getStringDatefromDate(date: Date, dateFormat: string) {
    return moment(moment(date)).format(dateFormat);
  }

  static getDatefromString(datestring: string, format: string) {
    return moment(datestring, format).toDate();
  }

  static isValid(date: Date) {
    return moment(date).isValid();
  }

  static getDatefromMs(milliseconds: number, reqdateformat: string) {
    return moment(milliseconds).format(reqdateformat);
  }
}
