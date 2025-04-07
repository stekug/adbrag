import { Component } from '@angular/core';
import { GoalsComponent } from './goals/goals.component';

@Component({
  selector: 'app-brag-document',
  imports: [GoalsComponent],
  templateUrl: './brag-document.component.html',
  styleUrl: './brag-document.component.css',
})
export class BragDocumentComponent {}
