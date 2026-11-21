import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'animation',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Animation' },
  },
  {
    path: 'comics',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Comics' },
  },
  {
    path: 'design',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Design' },
  },
  {
    path: 'life-drawing',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Life Drawing' },
  },
  {
    path: 'misc',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Misc.' },
  },
  {
    path: 'printmaking',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Printmaking' },
  },
  {
    path: 'resume',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Resume' },
  },
  { path: '**', redirectTo: '' },
];
