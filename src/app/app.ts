import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AnimationGridComponent } from './animation-grid/animation-grid.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SidebarComponent, AnimationGridComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="main-container">
      <app-sidebar></app-sidebar>
      <app-animation-grid></app-animation-grid>
    </div>
  `,
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {}
