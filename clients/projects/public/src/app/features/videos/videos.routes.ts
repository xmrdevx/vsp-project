import { Routes } from '@angular/router';
import { SelectedWatchVideoLoadedGuard } from './guards/selected-watch-video-loaded.guard';

export const videoRoutes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/videos/videos.component').then(c => c.VideosComponent)
  },
  {
    path: 'watch',
    canActivate: [SelectedWatchVideoLoadedGuard],
    loadComponent: () => 
      import('./pages/watch/watch.component').then(c => c.WatchComponent)
  },
  {
    path: 'live',
    loadComponent: () => 
      import('./pages/live/live.component').then(c => c.LiveComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
