import { Component, computed, inject, input } from '@angular/core';
import { BragDocumentService } from '../brag-document.service';
import { BragItemComponent } from '../../shared/brag-item/brag-item.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-collaborations',
  imports: [BragItemComponent, SectionHeaderComponent, DatePipe],
  template: `
    <app-brag-item>
      <app-section-header title="Collaboration & Mentorship" />

      @if(this.collaborations().length > 0) {
      <ul class="collaboration-list">
        @for (collaboration of this.collaborations();track collaboration.id) {
        <li>
          <strong>{{ collaboration.type }}</strong> - {{ collaboration.description }}
          <span class="date">{{ collaboration.date | date : 'shortDate' }}</span>
          <span class="related-to">Related to: {{ collaboration.relatedTo }}</span>
        </li>
        }
      </ul>
      } @else {
      <p>No collaborations or mentorships recorded for this year.</p>
      }
    </app-brag-item>
  `,
})
export class CollaborationsComponent {
  private bragDocumentService = inject(BragDocumentService);

  selectedYear = input.required<string>();

  collaborations = computed(() => {
    return this.bragDocumentService.getCollaborationsForThisYear(this.selectedYear());
  });
}
