import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidDetailComponent } from './asteroid-detail.component';

describe('AsteroidDetailComponent', () => {
  let component: AsteroidDetailComponent;
  let fixture: ComponentFixture<AsteroidDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsteroidDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
