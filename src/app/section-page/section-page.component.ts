import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

interface PortfolioProject {
  title: string;
  medium: string;
  date: string;
  origin: string;
  description?: string;
  media: string[];
  mediaType?: 'image' | 'video';
}

@Component({
  selector: 'app-section-page',
  templateUrl: './section-page.component.html',
  styleUrl: './section-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly title = toSignal(
    this.route.data.pipe(map((data) => (typeof data['title'] === 'string' ? data['title'] : 'Portfolio'))),
    { initialValue: 'Portfolio' },
  );
  readonly section = toSignal(
    this.route.data.pipe(map((data) => (typeof data['section'] === 'string' ? data['section'] : ''))),
    { initialValue: '' },
  );
  readonly projects = computed(() => this.projectCatalog[this.section()] ?? []);
  readonly figureDrawings = Array.from({ length: 17 }, (_, index) => `Figure drawing ${index + 1}`);

  private readonly projectCatalog: Record<string, PortfolioProject[]> = {
    animation: [
      {
        title: 'Mortal Cookie Combat',
        medium: 'Digital animation, ToonBoom',
        date: 'Summer 2025',
        origin: 'Made at University of North Carolina School of the Arts (UNCSA) Animation Intensive',
        description:
          'This was my second semi-finished short film. I chose to focus on more active, detailed motion in this piece, building off the basic storytelling I had learned in my last final at UNCSA. The background was done in Blender, one of my first projects in digital 3D.',
        media: ['Mortal Cookie Combat video'],
        mediaType: 'video',
      },
      {
        title: 'Bouncing Ball 2D',
        medium: 'Digital animation, ToonBoom',
        date: 'Summer 2025',
        origin: 'Made at University of North Carolina School of the Arts (UNCSA) Animation Intensive',
        description:
          'This piece was a deviation from the classic bouncing ball animation I’ve become accustomed to. I focused on stronger, more accurate reference-based animation instead of detailed storytelling, to practice weight and anatomy on top of the usual animation basics.',
        media: ['Bouncing Ball 2D video'],
        mediaType: 'video',
      },
      {
        title: 'Bouncing Ball 3D',
        medium: '3D Modeling, Blender',
        date: 'Spring 2026',
        origin: 'Made at Polo Creativo',
        description:
          'This was my first finished animation in Blender, which I made over several weeks at a 3D modeling class during my exchange program in Rio Grande, Argentina. The class was taught exclusively in Spanish. I based it on my last bouncing ball animation, as a re-mastering of sorts.',
        media: ['Bouncing Ball 3D video'],
        mediaType: 'video',
      },
      {
        title: 'Heist Planning',
        medium: 'Digital animation, ToonBoom',
        date: 'Summer 2024',
        origin: 'Made at University of North Carolina School of the Arts (UNCSA) Animation Intensive',
        description: 'This was my first finished short film, made with professional, industry standard tools.',
        media: ['Heist Planning video'],
        mediaType: 'video',
      },
      {
        title: 'Fall From Grace',
        medium: 'Traditional animation, colored pencil on paper',
        date: 'Fall 2025',
        origin: 'Made in Art 3',
        description:
          'This piece was a short experiment with traditional flip-book animation, something I’ve dabbled in for years.',
        media: ['Fall From Grace animation'],
        mediaType: 'video',
      },
      {
        title: 'Flour Sack Objection',
        medium: 'Digital animation, ToonBoom',
        date: 'Summer 2025',
        origin: 'Made at University of North Carolina School of the Arts (UNCSA) Animation Intensive',
        description:
          'Another classic animation practice, focusing on body language and communicating story, even with an expressionless flour sack. It’s in reference to the video game series Ace Attorney, which I admire for its strong character acting.',
        media: ['Flour Sack Objection video'],
        mediaType: 'video',
      },
      {
        title: 'Metamorphosis',
        medium: 'Digital animation, ToonBoom',
        date: 'Summer 2025',
        origin: 'Made at University of North Carolina School of the Arts (UNCSA) Animation Intensive',
        description:
          'The prompt was to create an animation that ends with the same circle, in order to transition smoothly into other student’s work, creating a “Metamorphosis”. For this piece, I wanted to focus on making it as polished and finished as possible. As for the subject, I was inspired by the creature from my favorite graphic novel The Deep Dark.',
        media: ['Metamorphosis video'],
        mediaType: 'video',
      },
      {
        title: 'Storyboarding Draft',
        medium: 'Non-photo blue pencil on paper',
        date: 'Summer 2025',
        origin: 'Made at University of North Carolina School of the Arts (UNCSA) Animation Intensive',
        description:
          'A practice in storyboarding with the main character from my comic “Totally Platonic Sleepover”, put to the song “Signal Dreams” by Small Crush.',
        media: ['Storyboarding Draft video'],
        mediaType: 'video',
      },
    ],
    comics: [
      {
        title: 'Totally Platonic Sleepover',
        medium: 'Sketched traditionally with pencil and paper, inked and rendered digitally in FireAlpaca',
        date: 'Winter 2025',
        origin: 'Self-guided',
        description:
          'This is the piece I’m most proud of in this portfolio. One of my greatest frustrations with art is finishing pieces, which is made especially difficult by my ADHD. This was the first proper comic I had ever finished, from rough sketches and sporadic blurbs, to layout, writing, critique, and finally rendering and printing. Finishing this piece proved to me that I could push through the executive dysfunction I’ve always beat myself up over, and create something genuinely entertaining for my family and friends. It reminded me of why I want to pursue comics and animation in the first place.',
        media: [
          'Totally Platonic Sleepover – Cover',
          'Totally Platonic Sleepover – Page 1',
          'Totally Platonic Sleepover – Page 2',
          'Totally Platonic Sleepover – Page 3',
          'Totally Platonic Sleepover – Page 4',
          'Totally Platonic Sleepover – Page 5',
          'Totally Platonic Sleepover – Page 6',
        ],
      },
      {
        title: 'Totally Platonic Sleepover (Sketches)',
        medium: 'Sketched traditionally with pencil and paper',
        date: 'Winter 2025',
        origin: 'Self-guided',
        media: [
          'TPS Sketch – Page 1',
          'TPS Sketch – Page 2',
          'TPS Sketch – Page 3',
          'TPS Sketch – Page 4',
          'TPS Sketch – Page 5',
          'TPS Sketch – Page 6',
        ],
      },
      {
        title: 'Draw!',
        medium: 'Ink on paper',
        date: 'Fall 2023',
        origin: 'North Carolina State Weekend Workshop',
        description: 'A short, comedic comic in the classic 4-panel Yonkoma format.',
        media: ['Draw! comic'],
      },
    ],
    design: [
      {
        title: 'Slash Fight Sticks',
        medium: '3D model done in cardstock, marker',
        date: 'Summer 2023',
        origin: 'Made during North Carolina State Design Camp',
        description: 'A packaging design for a fighting game controller.',
        media: ['Slash Fight Sticks — view 1', 'Slash Fight Sticks — view 2'],
      },
      {
        title: 'St. Peter’s Shoe',
        medium: 'Pencil and paper, 3D model done in cardstock and foam',
        date: 'Summer 2023',
        origin: 'Made during North Carolina State Design Camp',
        description:
          'The prompt was to design a shoe based on an architectural work. I based mine on St. Peter’s Seminary, an abandoned brutalist structure in Scotland which I had visited.',
        media: ['St. Peter’s Shoe design', 'St. Peter’s Shoe model'],
      },
      {
        title: 'Submerged Mangrove Temple',
        medium: 'Alcohol marker and pen on bristol paper',
        date: 'Summer 2023',
        origin: 'Made during North Carolina State Design Camp',
        description: 'A character/environment design inspired by the video game Dredge.',
        media: ['Submerged Mangrove Temple design'],
      },
      {
        title: 'Character Design Draft',
        medium: 'Non-photo blue pencil on paper',
        date: 'Summer 2025',
        origin: 'Made at University of North Carolina School of the Arts (UNCSA) Animation Intensive',
        media: ['Character Design Draft'],
      },
      {
        title: 'Architectural Models',
        medium: 'Foam, wooden dowels, hot glue, paper',
        date: 'Summer 2023',
        origin: 'Made at North Carolina State Design Camp',
        description:
          'The prompt was to design an outdoor structure for a local art museum based on a chosen painting. I chose Andrew Wyeth’s Winter 1946, focusing on the solitary figure and his shadow on a barren backdrop.',
        media: ['Architectural Models'],
      },
    ],
    'life-drawing': [
      {
        title: 'Various Figure Drawings',
        medium: 'Pencil on newsprint/sketchbook',
        date: '2024–2026',
        origin: 'Artscenter sessions',
        description:
          'This is just a sample of the pieces I made at live sessions offered by my local art center (Artscenter, Carrboro). They range in time limit, from 1 to 30 minutes.',
        media: this.figureDrawings,
      },
    ],
    misc: [
      {
        title: 'Satin, Steel, Self',
        medium: 'Watercolor and colored pencil on bristol paper',
        date: 'Fall 2025',
        origin: 'Made in Art 3',
        description:
          'This piece represents a juxtaposition, not only in subject matter and texture, but in the paradoxical politics inherent in my gender identity. As a trans person, I feel so much rage in how my community is treated in the media and society. It’s that same society that makes me feel ashamed of my anger, which is so often seen as an inherently masculine emotion. And so my urge to be a gentle, kind, “feminine” person masks my anger which is then suppressed and turned inward. That contrast is represented by the sword, which is wielded inward, drawing downward into the head, before the actual point of incision is obscured by the bow.',
        media: ['Satin, Steel, Self'],
      },
      {
        title: 'Trance',
        medium: 'Marker on repurposed book',
        date: 'Fall 2026',
        origin: 'Made in Advanced Art',
        description:
          'In this piece I explored a more graphic, medieval style, inspired by the contemporary Hungarian artist Sakrafka. The artwork moves with the poem, as it tells the story of a werewolf calming down with the help of his loved one, a metaphor for resisting toxic masculinity through gentle, soft love.',
        media: ['Trance blackout poem'],
      },
      {
        title: 'Album Cover 1',
        medium: 'Chalk Pastels on paper',
        date: 'Fall 2025',
        origin: 'Made in Art 3',
        description:
          'The prompt given was to recreate an album cover traditionally. I chose the song Bloom, not only because the song itself is important to me, but because the cover appeared to be done in chalk pastel, a medium I rarely get an excuse to use, despite being one of my favorites.',
        media: ['Album Cover 1'],
      },
      {
        title: 'Yearbook Cover',
        medium: 'Colored pencil on paper',
        date: 'Spring 2024',
        origin: 'Self-guided',
        description: 'I designed my school’s yearbook cover for the year 2023-2024.',
        media: ['Yearbook Cover'],
      },
    ],
    printmaking: [
      {
        title: 'Resilience (Black & White)',
        medium: 'Linoleum block print on paper',
        date: 'October 2026',
        origin: 'Made in Advanced Art',
        description:
          'The prompt for this piece was to create a block print with the topic of social justice. With that in mind, my piece represents the resilience of the Palestinian people in the face of genocide and oppression. The central olive tree, a common Palestinian motif representing steadfastness, has its roots intertwined into the traditional keffiyeh design, symbolizing the roots of the Palestinian people and culture being sewn into the very earth itself. I wanted the piece to focus less on the tragedy of Israel’s recent escalation in terror, which we’ve become so accustomed to in the media, and more on hope and solidarity.',
        media: ['Resilience (Black & White)'],
      },
      {
        title: 'ASL Hands',
        medium: 'Linoleum print on construction paper',
        date: 'Fall 2026',
        origin: 'Made in Advanced Art',
        description:
          'This piece was a practice not only in printmaking, a medium I’ve recently fallen in love with, but also a practice in quick hand anatomy, something I’ve been working on improving for a while. The choice to make the hands spell out the American Sign Language alphabet came along naturally as an opportunity to add extra meaning to my practice. The texture in the background came from a pre-made stamp of a graph, bought second hand, to add framing to the subject.',
        media: ['ASL Hands'],
      },
      {
        title: 'Gulper Eel Print',
        medium: 'Linoleum block on newsprint',
        date: 'Spring 2024',
        origin: 'Self-guided',
        description: 'One of my first attempts at printmaking, portraying a favorite subject of mine: deep sea creatures.',
        media: ['Gulper Eel Print'],
      },
    ],
  };
}
