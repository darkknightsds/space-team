import { TestBed, inject } from '@angular/core/testing';

import { AsteroidService } from './asteroid.service';

describe('AsteroidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsteroidService]
    });
  });

  it('should be created', inject([AsteroidService], (service: AsteroidService) => {
    expect(service).toBeTruthy();
  }));
});
