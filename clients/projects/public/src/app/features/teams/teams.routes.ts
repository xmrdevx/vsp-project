import { Routes } from '@angular/router';
import { SelectedTeamProfileLoadedGuard } from './guards/selected-team-profile-loaded.guard';

export const teamsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/teams/teams.component').then(c => c.TeamsComponent)
  },
  {
    path: ':teamId',
    canActivate: [SelectedTeamProfileLoadedGuard],
    loadComponent: () => 
      import('./pages/team-profile/team-profile.component').then(c => c.TeamProfileComponent),
    children: [
      {
        path: 'announcements',
        loadComponent: () => 
          import('./pages/team-accouncements/team-accouncements.component').then(c => c.TeamAccouncementsComponent)
      },
      {
        path: 'cases',
        loadComponent: () => 
          import('./pages/team-cases/team-cases.component').then(c => c.TeamCasesComponent)
      },
      {
        path: 'videos',
        loadComponent: () => 
          import('./pages/team-videos/team-videos.component').then(c => c.TeamVideosComponent)
      },
      {
        path: 'about',
        loadComponent: () => 
          import('./pages/team-about/team-about.component').then(c => c.TeamAboutComponent)
      },
      {
        path: '**',
        redirectTo: 'announcements',
        pathMatch: 'full',
      }
    ]

  }
];
