import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelestialMechanicsComponent } from './celestial-mechanics.component';

describe('CelestialMechanicsComponent', () => {
  let component: CelestialMechanicsComponent;
  let fixture: ComponentFixture<CelestialMechanicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelestialMechanicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelestialMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
