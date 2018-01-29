import { Component, OnInit } from '@angular/core';
import { RestService } from './services/rest.service';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RestService, GlobalService]
})
export class AppComponent implements OnInit {
  pageTitle = 'app';
  data: any = {};
  btn1;
  btn2;
  pageText: any = {};
  company: any = this.globalService.company;

  constructor(
    private restService: RestService,
    private globalService: GlobalService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {

    this.restService.getAppData('this.globalService.defaultLanguage').then(
      res => {
        const pageData = res.filter(el => el.title === this.pageTitle);
        this.data = pageData[0];
        this.pageText = this.data.text;
      },
      err => {
        console.log('Error occured');
      }
    );
  }



}
