import { Component, inject, input } from '@angular/core';
import { BragDocumentService } from '../brag-document.service';

@Component({
  selector: 'app-collaborations',
  imports: [],
  templateUrl: './collaborations.component.html',
})
export class CollaborationsComponent {
  private bragDocumentService = inject(BragDocumentService);

  selectedYear = input<string>();

  ngOnInit() {
    console.log(this.selectedYear());
  }
}
