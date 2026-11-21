import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'animation',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Animation', layout: 'media', section: 'animation' },
  },
  {
    path: 'comics',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Comics', layout: 'carousel', section: 'comics' },
  },
  {
    path: 'design',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Design', layout: 'projects', section: 'design' },
  },
  {
    path: 'life-drawing',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Life Drawing', layout: 'gallery', section: 'life-drawing' },
  },
  {
    path: 'misc',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Miscellaneous pieces', layout: 'projects', section: 'misc' },
  },
  {
    path: 'printmaking',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Printmaking', layout: 'projects', section: 'printmaking' },
  },
  {
    path: 'resume',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Resume', layout: 'resume', section: 'resume' },
  },
  { path: '**', redirectTo: '' },
];
