import { Component, inject } from '@angular/core';
import { GoalsComponent } from './goals/goals.component';
import { BragDocumentService } from './brag-document.service';

@Component({
  selector: 'app-brag-document',
  imports: [GoalsComponent],
  templateUrl: './brag-document.component.html',
  styleUrl: './brag-document.component.css',
})
export class BragDocumentComponent {}
