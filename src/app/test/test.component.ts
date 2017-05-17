import { Component, OnInit } from '@angular/core';
import { AsteroidService } from '../asteroid.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [AsteroidService]
})

export class TestComponent implements OnInit {
  callData = [];

  constructor(private asteroidService: AsteroidService, private http: Http) { }

  ngOnInit() {
    this.http.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-05-17&end_date=2017-05-17&api_key=SafUQrFLoCbNXkGFaT4xvfbWPUZSpCxcOV0G2PPI`)
    .map((res:Response) => res.json().near_earth_objects["2017-05-17"])
    .subscribe(data => {
      this.callData = data;
      this.callData.forEach(n => this.callData.push(n));
      console.log(this.callData);
    });
  }

}

// .name, n.is_potentially_hazardous_asteroid, n.close_approach_data[0].close_approach_date, n.close_approach_data[0].relative_velocity.miles_per_hour, n.estimated_diameter.miles.estimated_diameter_max, n.absolute_magnitude_h, n.nasa_jpl_url
