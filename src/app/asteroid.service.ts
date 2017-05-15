import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AsteroidService {
  asteroids: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.asteroids = database.list('near_earth_objects');
   }

   getAsteroids() {
     return this.asteroids;
   }

}
