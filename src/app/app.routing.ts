import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TimelineComponent } from './timeline/timeline.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'timeline',
    component: TimelineComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
