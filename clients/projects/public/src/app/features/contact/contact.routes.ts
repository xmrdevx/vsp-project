import { Routes } from '@angular/router';

export const contactRoutes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/contact/contact.component').then(c => c.ContactComponent)
  }
];
