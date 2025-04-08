import { Component, computed, inject, signal } from '@angular/core';
import { BragDocumentService } from '../brag-document.service';
import { BragDocument } from '../../models/brag-document.model';

@Component({
  selector: 'app-goals',
  imports: [],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css',
})
export class GoalsComponent {
  private bragDocumentService = inject(BragDocumentService);

  brag = signal<BragDocument>(this.bragDocumentService.loadBrag('2025'));

  goalsThisYear = computed(() => this.brag().goalsThisYear);
  goalsNextYear = computed(() => this.brag().goalsNextYear);
}
