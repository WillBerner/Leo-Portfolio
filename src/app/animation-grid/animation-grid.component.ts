import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Video {
  id: string;
  title: string;
  embedUrl: string;
  description?: string;
}

@Component({
  selector: 'app-animation-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animation-grid.component.html',
  styleUrl: './animation-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimationGridComponent {
  private sanitizer = inject(DomSanitizer);

  videos = signal<Video[]>([
    {
      id: '1',
      title: 'Smooth Transitions',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'A stunning animation showcase'
    },
    {
      id: '2',
      title: 'Interactive Elements',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Dynamic user interactions'
    },
    {
      id: '3',
      title: 'Loading States',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Creative loading animations'
    },
    {
      id: '4',
      title: 'Scroll Effects',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Parallax and scroll animations'
    },
    {
      id: '5',
      title: 'Hover States',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Delightful hover effects'
    },
    {
      id: '6',
      title: '3D Animations',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Three-dimensional motion'
    }
  ]);

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
