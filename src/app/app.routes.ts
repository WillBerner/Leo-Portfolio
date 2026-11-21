import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'animation',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Animation', layout: 'media' },
  },
  {
    path: 'comics',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Comics', layout: 'carousel' },
  },
  {
    path: 'design',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Design', layout: 'projects' },
  },
  {
    path: 'life-drawing',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Life Drawing', layout: 'gallery' },
  },
  {
    path: 'misc',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Miscellaneous pieces', layout: 'projects' },
  },
  {
    path: 'printmaking',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Printmaking', layout: 'projects' },
  },
  {
    path: 'resume',
    loadComponent: () => import('./section-page/section-page.component').then((m) => m.SectionPageComponent),
    data: { title: 'Resume', layout: 'resume' },
  },
  { path: '**', redirectTo: '' },
];
