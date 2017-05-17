import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ChartsModule } from 'ng2-charts';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  callData = [];
  apiDate;

  todaysDate: Date = new Date();

  convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString();
    var dd  = date.getDate().toString();

    var mmChars = mm.split('');
    var ddChars = dd.split('');

    return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
  }

  constructor(private http: Http) { }

  ngOnInit() {
    this.apiDate = this.convertDate(this.todaysDate);
    this.http.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=" + this.apiDate + "&end_date=" + this.apiDate + "&api_key=SafUQrFLoCbNXkGFaT4xvfbWPUZSpCxcOV0G2PPI")
    .map((res:Response) => res.json().near_earth_objects[this.apiDate])
    .subscribe(data => {
      this.callData = data;
      this.callData.forEach(n => this.callData.push());
    });

  }
}
