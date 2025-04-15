import { Component, signal } from '@angular/core';
import { GoalsComponent } from './goals/goals.component';

@Component({
  selector: 'app-brag-document',
  imports: [GoalsComponent],
  templateUrl: './brag-document.component.html',
})
export class BragDocumentComponent {
  selectedYear = signal(new Date().getFullYear().toString());
}
