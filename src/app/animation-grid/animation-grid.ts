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
  template: `
    <section class="animation-section">
      <div class="animation-header">
        <h2>Animation</h2>
      </div>

      <div class="videos-grid">
        @for (video of videos(); track video.id) {
          <div class="video-card">
            <div class="video-container">
              <iframe 
                [src]="getSafeUrl(video.embedUrl)"
                title="{{ video.title }}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
            <div class="video-info">
              <h3>{{ video.title }}</h3>
              @if (video.description) {
                <p>{{ video.description }}</p>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
      z-index: 1;
    }

    .animation-section {
      width: 80%;
      height: calc(100vh - 80px);
      padding-top: 80px;
      padding: 80px 2rem 2rem 2rem;
      background: white;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .animation-header {
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid #333;
    }

    .animation-header h2 {
      margin: 0;
      font-size: 2.5rem;
      font-weight: 700;
      color: #333;
    }

    .videos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }

    .video-card {
      background: #f8f9fa;
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .video-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .video-container {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      background: #000;
    }

    .video-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }

    .video-info {
      padding: 1.25rem;
    }

    .video-info h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.1rem;
      font-weight: 600;
      color: #333;
    }

    .video-info p {
      margin: 0;
      font-size: 0.9rem;
      color: #666;
      line-height: 1.5;
    }

    @media (max-width: 768px) {
      .animation-section {
        width: 100%;
        height: auto;
        padding: 80px 1rem 2rem 1rem;
      }

      .animation-header h2 {
        font-size: 2rem;
      }

      .videos-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
      }
    }
  `],
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
