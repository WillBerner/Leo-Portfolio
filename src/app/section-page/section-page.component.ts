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

  placeholders = Array.from({ length: 6 }, (_, index) => index + 1);
}
