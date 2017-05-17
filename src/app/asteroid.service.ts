import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AsteroidService {
  asteroids: FirebaseListObservable<any[]>;
  dateQuery: string;

  constructor(private database: AngularFireDatabase, private http: Http) {
    this.asteroids = database.list('asteroids');

    this.dateQuery = new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDay();

    console.log(this.dateQuery);
   }

   getAsteroids() {
     return this.asteroids;
   }

   getData() {
    return this.http.get(`https://api.nasa.gov/neo/rest/v1/feed?start_Date()=2017-05-17&end_Date()=2017-05-17&api_key=SafUQrFLoCbNXkGFaT4xvfbWPUZSpCxcOV0G2PPI`)
    .map((res:Response) => res.json().near_earth_objects["2017-05-17"]);
  }

}
