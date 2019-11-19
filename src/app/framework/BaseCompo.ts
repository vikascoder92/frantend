
import {TaskCode} from './global';
import {OnInit} from '@angular/core';
import {CommonService} from './common.service';

import {BaseResponse} from './BaseResponse';
import {HttpRequest} from './HttpRequest';
import {DownloadManager} from './DownloadManager';
import {StorageUtil} from './StorageUtil';

import Swal from 'sweetalert2'
import { ErrorResponse } from '../modal/ErrorResponse';

export class BaseComponent implements OnInit {
  loader: boolean;

  constructor(protected commonService: CommonService) {
  }

  ngOnInit() {

  }

  showLoader() {
    this.loader = true;
  }

  stopLoader() {
    this.loader = false;
  }

  downloadData(req: HttpRequest) {
    const manager = new DownloadManager(this, this.commonService);
    manager.downloadData(req);
  }

  onPreExecute(taskCode: TaskCode) {
    this.showLoader();
  }

  onApiError(taskCode: TaskCode, error: any, req: HttpRequest) {
    console.log('error : ' + JSON.stringify(error));
    if (error) {
      const response = error as ErrorResponse;
      console.log('error response : ' + response);
      if (response) {
        if (response.status === 401) {
          this.logoutUser(taskCode, response.error)
        } else {
          this.onErrorReceived(taskCode, response.error);
        }
      } else {
        this.onServerError(taskCode, error, req);
      }
    } else {
      this.onServerError(taskCode, error, req);
    }
  }

  logoutUser(taskCode: TaskCode, response: any) {
    StorageUtil.clearAllData();
    if (response && response.message) {
      alert(response.message)
    } else {
      alert('Internal Server Error!')
    }
  }

  onResponseReceived(taskCode: TaskCode, response: any) {
    console.log('response : ' + JSON.stringify(response));
    this.stopLoader();
    if (response instanceof BaseResponse) {
      if (response.error) {
        return !response.error;
      }
    }
    this.stopLoader();
    return true;
  }


  onServerError(taskCode: TaskCode, error: any, req: HttpRequest) {
    alert('Oops some unknown error occurred');
  }

  onErrorReceived(taskCode: TaskCode, response: any) {
    if (response && response.message) {
      alert(response.message)
    } else {
      alert('Internal Server Error!')
    }
    this.stopLoader();
  }

  successAlert(message: string, rout: string) {
    Swal.fire({
      title: 'Success!',
      text: message,
      type: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      this.navigateRouter(rout);
    });
  }

  errorAlert(message: string, rout: string) {
    Swal.fire({
      title: 'Error!',
      text: message,
      type: 'error',
      confirmButtonText: 'OK'
    }).then(() => {
      this.navigateRouter(rout);
    });
  }

  navigateRouter(rout: string) {
  }

}
