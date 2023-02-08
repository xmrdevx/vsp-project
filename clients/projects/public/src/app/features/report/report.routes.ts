import { Routes } from '@angular/router';

export const reportRoutes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/report/report.component').then(c => c.ReportComponent) 
  }
];

