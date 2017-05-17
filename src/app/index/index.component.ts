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

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-05-17&end_date=2017-05-17&api_key=SafUQrFLoCbNXkGFaT4xvfbWPUZSpCxcOV0G2PPI`)
    .map((res:Response) => res.json().near_earth_objects["2017-05-17"])
    .subscribe(data => {
      this.callData = data;
      this.callData.forEach(n => this.callData.push());
      console.log(this.callData);
    });
  }
}
