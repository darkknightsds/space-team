import { Component, OnInit } from '@angular/core';
import { AsteroidService } from '../asteroid.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [ AsteroidService ]
})
export class IndexComponent implements OnInit {
  asteroids: FirebaseListObservable<any[]>;

  constructor(private asteroidService: AsteroidService) { }

  ngOnInit() {
    this.asteroids = this.asteroidService.getAsteroids();
  }

}
