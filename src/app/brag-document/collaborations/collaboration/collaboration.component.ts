import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Collaboration } from '../../../models/brag-document.model';

@Component({
  selector: 'app-collaboration',
  imports: [DatePipe],
  template: `
    <li class="rounded-md bg-primary-grey drop-shadow-md/30 flex">
      <div class="min-w-40">
        <strong>{{ collaboration().type }}</strong>
      </div>

      <p class="bg-primary-white">{{ collaboration().description }}</p>
      <span class="date">{{ collaboration().date | date : 'shortDate' }}</span>
      <span class="related-to">Related to: {{ collaboration().relatedTo }}</span>
    </li>
  `,
  styles: ``,
})
export class CollaborationComponent {
  collaboration = input.required<Collaboration>();
}
