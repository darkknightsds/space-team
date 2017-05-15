import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
