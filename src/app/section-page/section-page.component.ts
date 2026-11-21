import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-section-page',
  templateUrl: './section-page.component.html',
  styleUrl: './section-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionPageComponent {
  private route = inject(ActivatedRoute);
  title = toSignal(
    this.route.data.pipe(map((data) => (typeof data['title'] === 'string' ? data['title'] : 'Portfolio'))),
    { initialValue: 'Portfolio' },
  );
  layout = toSignal(
    this.route.data.pipe(map((data) => (typeof data['layout'] === 'string' ? data['layout'] : 'gallery'))),
    { initialValue: 'gallery' },
  );

  galleryItems = Array.from({ length: 17 }, (_, index) => index + 1);

  projects: Record<string, { title: string; meta: string; description: string }[]> = {
    projects: [
      {
        title: 'Stash Fight Sticks',
        meta: '3D model and in cardboard, marker (Summer 2023)',
        description: 'Made during North Carolina State Design Camp.',
      },
      {
        title: "St. Peter's Shoe",
        meta: 'Pencil and paper, 3D model (2023)',
        description:
          "Made during North Carolina State Design Camp. The prompt was to design a shoe based on an architectural work.",
      },
      {
        title: 'Submerged Mangrove Temple',
        meta: 'Alcohol marker and pen on Bristol paper (Summer 2023)',
        description: 'Made during North Carolina State Design Camp.',
      },
    ],
  };

  animationItems = [
    {
      title: 'Mortal Cookie Combat',
      meta: 'Digital animation, ToonBoom (Summer 2025)',
      description:
        'This was my second semi-finalist short film. I chose to focus on more active, detailed motion in this piece.',
    },
    {
      title: 'Bouncing Ball',
      meta: 'Digital animation, ToonBoom (Summer 2025)',
      description:
        'A deviation from the classic bouncing ball animation. I placed a ball in a more accurate, focused action sequence.',
    },
    {
      title: 'Bouncing Ball 3D',
      meta: 'Digital 3D animation',
      description: 'An exploration of weight and anatomy through a three-dimensional bouncing ball animation.',
    },
  ];

  comicItems = [
    {
      title: 'Totally Platonic Sleepover',
      meta: 'Sketch/watercolor with pencil and paper (2025)',
      description:
        'A comic made through an exploration of this portfolio. It explores friendship and the fears that come with growing up.',
    },
    {
      title: 'Totally Platonic Sleepover - Process',
      meta: 'Pencil and paper',
      description: 'Early thumbnail and layout studies from the comic-making process.',
    },
  ];

  projectItems = () => {
    if (this.title() === 'Miscellaneous pieces') {
      return [
      {
        title: 'Sash, Steel, Self',
        meta: 'Monochrome and colored pencil on Bristol paper (2025)',
        description:
          'A portrait representing identity, resilience, and personal history. Made with blue and metal tones.',
      },
      {
        title: 'Redrawn Anniversary Image',
        meta: 'Mixed media',
        description: 'A second piece for the miscellaneous collection.',
      },
      ];
    }

    if (this.title() === 'Printmaking') {
      return [
      {
        title: 'Resilience (Black & White)',
        meta: 'Linoleum block print on paper (October 2026)',
        description:
          'A black and white print about personal resilience and the topic of social justice.',
      },
      {
        title: 'SASH, HANDS',
        meta: 'Printmaking study',
        description: 'A hand-sign print exploring gesture and shared visual language.',
      },
      ];
    }

    return this.projects['projects'];
  };
}
