import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CelestialMechanicsComponent } from './celestial-mechanics/celestial-mechanics.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'celestial-mechanics',
    component: CelestialMechanicsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
