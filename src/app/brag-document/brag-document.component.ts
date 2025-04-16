import { Component, input, Signal } from '@angular/core';
import { GoalsComponent } from './goals/goals.component';

@Component({
  selector: 'app-brag-document',
  imports: [GoalsComponent],
  templateUrl: './brag-document.component.html',
})
export class BragDocumentComponent {
  selectedYear = input.required<string>();
}
