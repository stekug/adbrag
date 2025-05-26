import { Component, computed, inject, input } from '@angular/core';
import { BragDocumentService } from '../brag-document.service';
import { BragItemComponent } from '../../shared/brag-item/brag-item.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { CollaborationComponent } from './collaboration/collaboration.component';

@Component({
  selector: 'app-collaborations',
  imports: [BragItemComponent, SectionHeaderComponent, CollaborationComponent],
  template: `
    <app-brag-item>
      <app-section-header title="Collaboration & Mentorship" />

      @if(this.collaborations().length > 0) {
      <ul class="flex flex-col gap-4 pt-4">
        @for (collaboration of this.collaborations();track collaboration.id) {
        <app-collaboration [collaboration]="collaboration" />
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
