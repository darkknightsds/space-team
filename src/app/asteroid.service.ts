import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AsteroidService {
  asteroids: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.asteroids = database.list('asteroids');
   }

   getAsteroids() {
     return this.asteroids;
   }

}
