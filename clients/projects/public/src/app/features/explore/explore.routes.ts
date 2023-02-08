import { Routes } from '@angular/router';

export const exploreRoutes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/explore/explore.component').then(c => c.ExploreComponent)
  }
];
