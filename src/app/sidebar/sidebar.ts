import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="sidebar">
      <div class="sidebar-content">
        <!-- Profile Photo -->
        <div class="profile-photo">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
            alt="Leo's profile photo"
            loading="lazy"
          />
        </div>

        <!-- Bio Section -->
        <section class="bio-section">
          <h2>About</h2>
          <p>
            I'm a passionate full-stack developer with a love for creating beautiful and functional web experiences. 
            With expertise in Angular, TypeScript, and modern web technologies, I build scalable applications that make a difference.
          </p>
        </section>

        <!-- Action Buttons -->
        <div class="button-group">
          <a href="#portfolio" class="action-button primary">View Portfolio</a>
          <a href="#contact" class="action-button secondary">Get in Touch</a>
          <a href="#resume" class="action-button secondary">Download Resume</a>
        </div>
      </div>
    </aside>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
      z-index: 1;
    }

    .sidebar {
      width: 20%;
      height: calc(100vh - 80px);
      padding-top: 80px;
      background: #f8f9fa;
      border-right: 1px solid #e0e0e0;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .sidebar-content {
      padding: 2rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .profile-photo {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .profile-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .bio-section {
      padding: 0;
    }

    .bio-section h2 {
      margin: 0 0 1rem 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: #333;
    }

    .bio-section p {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.6;
      color: #666;
    }

    .button-group {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .action-button {
      display: inline-block;
      padding: 0.75rem 1.25rem;
      border-radius: 6px;
      font-size: 0.9rem;
      font-weight: 500;
      text-decoration: none;
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;
      border: none;
    }

    .action-button.primary {
      background: #333;
      color: white;
    }

    .action-button.primary:hover {
      background: #555;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .action-button.secondary {
      background: white;
      color: #333;
      border: 1px solid #ddd;
    }

    .action-button.secondary:hover {
      background: #f0f0f0;
      border-color: #999;
    }

    @media (max-width: 768px) {
      .sidebar {
        width: 100%;
        height: auto;
        border-right: none;
        border-bottom: 1px solid #e0e0e0;
        padding-top: 0;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {}
