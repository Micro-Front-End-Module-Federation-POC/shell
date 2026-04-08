import { Routes } from '@angular/router';
import { Home } from './home/home';
import { HowToImplement } from './how-to-implement/how-to-implement';
import { Demo } from './demo/demo';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full',
  },
  {
    path: 'how-to-implement',
    loadComponent: () => import('./how-to-implement/how-to-implement').then(m => m.HowToImplement),
  },
  {
    path: 'demo',
    loadComponent: () => import('./demo/demo').then(m => m.Demo),
    loadChildren: () => import('./demo/demo.routes').then(m => m.routes),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
