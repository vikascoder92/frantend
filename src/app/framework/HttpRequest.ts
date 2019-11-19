import {ClassType} from 'class-transformer/ClassTransformer';
import {StorageUtil} from './StorageUtil';
import {BaseResponse} from './BaseResponse';
import {HttpHeaders} from '@angular/common/http';

export class HttpRequest {
  url: string;
  params: any;
  method: string;
  taskCode: number;
  headers: HttpHeaders;
  queryParams: HttpHeaders;
  classTypeValue: ClassType<any> = BaseResponse;
  isArrayResponse: false;

  constructor(url: string) {
    this.url = url;
    this.method = 'GET';
    const auth = StorageUtil.getItem('token');
    if (auth) {
      this.headers = new HttpHeaders({'Authorization': auth}).set('Content-Type', 'application/json');
    } else {
      this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }
    this.queryParams = new HttpHeaders();
    console.log(url)
  }

  addHeader(key: string, value: string) {
    this.headers.set(key, value);
  }

  removeHeader(key: string) {
    this.headers.delete(key);
  }

  addHeaders(key: string, value: string) {
    this.headers.append(key, value);
  }

  setGetMethod() {
    this.method = 'GET';
  }

  setPostMethod() {
    this.method = 'POST';
  }

  setDeleteMethod() {
    this.method = 'DELETE';
  }

  setPatchMethod() {
    this.method = 'PATCH';
  }

  setPutMethod() {
    this.method = 'PUT';
  }

  addQueryParams(key: string, value: string) {
    this.queryParams.append(key, value);
  }

  getCompleteUrl() {
    if (this.queryParams !== undefined) {
      let paramString = '?';
      for (const key of this.queryParams.keys()) {
        const value = this.queryParams.get(key);
        paramString = paramString + key + '=' + value + '&';
      }
      paramString = paramString.slice(0, -1);
      this.url = this.url + paramString;
      console.log(this.url);
    }
  }
}

export class HttpGenericRequest<T> extends HttpRequest {
  classType: ClassType<T>;

  constructor(url: string) {
    super(url);
  }
}
