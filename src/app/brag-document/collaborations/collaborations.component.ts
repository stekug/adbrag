import { Component, computed, inject, input, signal } from '@angular/core';
import { BragDocumentService } from '../brag-document.service';
import { BragItemComponent } from '../../shared/brag-item/brag-item.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-collaborations',
  imports: [BragItemComponent, SectionHeaderComponent],
  templateUrl: './collaborations.component.html',
})
export class CollaborationsComponent {
  private bragDocumentService = inject(BragDocumentService);

  selectedYear = input.required<string>();

  collaborations = signal([]);

  ngOnInit() {}
}
