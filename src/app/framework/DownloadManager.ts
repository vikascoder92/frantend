import {TaskCode} from './global';
import {HttpRequest} from './HttpRequest';
import {CommonService} from './common.service';
import {BaseComponent} from './BaseCompo';
import {JsonParser} from './ApiGenerator';


export class DownloadManager {
  protected commonService: CommonService;
  protected c: BaseComponent;

  constructor(c: BaseComponent, service: CommonService) {
    this.c = c;
    this.commonService = service;
  }

  downloadData(req: HttpRequest) {
    this.onPreExecute(req.taskCode);
    this.commonService.callHttpReq(req).subscribe(
      res => {
        // let response = JSON.parse(res['_body'])
        this.onResponseReceived(req.taskCode, res, req);
      },
      error => {
        this.onErrorReceived(req.taskCode, error, req);
      },
      () => {
      }
    );
  }

  onPreExecute(taskCode: TaskCode) {
    this.c.onPreExecute(taskCode);
  }

  onErrorReceived(taskCode: TaskCode, error: any, req: HttpRequest) {
    console.log('on error Received of download data in data service class');
    this.c.onApiError(taskCode, error, req);
  }

  onResponseReceived(taskCode: TaskCode, response: any, req: HttpRequest) {
    this.c.onResponseReceived(taskCode, this.parseJson(response, req));
  }

  parseJson(response: any, req: HttpRequest) {
    if (req.isArrayResponse) {
      return JsonParser.parseJsonArray(response, req.classTypeValue);
    } else {
      return JsonParser.parseJsonString(response, req.classTypeValue);
    }
  }
}
