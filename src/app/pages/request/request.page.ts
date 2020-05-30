import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  request: any = {};
  day_after_tomorrow: string;
  two_years_later: string;

  constructor() { }

  ngOnInit() {
    //start date - at the earliest day after tomorrow
    let today = new Date();
    let day_after_tomorrow = new Date(today.getTime() + 1000*60*60*24*2);
    this.day_after_tomorrow = day_after_tomorrow.toISOString().slice(0,10);
    //end date - at the latest in two years
    let two_years_later = new Date(day_after_tomorrow.getTime() + 1000*60*60*24*365*2);
    this.two_years_later = two_years_later.toISOString().slice(0,10);
  }

  /**
   * @description capture the user request
  *@param {}
   *
   */
  send() {
    console.log('Requested tour for', this.request.Date, this.request.Time);
  }

}
