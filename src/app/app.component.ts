import { ApiGenerator } from './framework/ApiGenerator';
import { BaseComponent } from './framework/BaseCompo';
import { Cat } from './get';
import { CommonService } from './framework/common.service';
import { TaskCode } from './framework/global';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent implements OnInit  {
  title = 'frantend';
  dataList:Cat;
  constructor(
    public router: Router,
    public service: CommonService,
  ) {
    super(service);
  }
  ngOnInit() {
    this.test();
  }
  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.TEST_API:
        const subAreaRes = response as Cat;
        this.dataList = subAreaRes;
        console.log(response);
        break;
        }
        
      
      }
      return isSuccess;
    }

    test() {
      this.downloadData(ApiGenerator.getTest());
    }
  }


