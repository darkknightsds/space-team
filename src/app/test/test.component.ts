import { Component, OnInit } from '@angular/core';
import { AsteroidService } from '../asteroid.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [AsteroidService]
})
export class TestComponent implements OnInit {
  callData = [];

  constructor(private asteroidService: AsteroidService) { }

  ngOnInit() {
    this.asteroidService.getData().subscribe(data => this.callData = data);
  }

}
