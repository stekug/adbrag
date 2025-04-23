import { Component, input, Signal } from '@angular/core';
import { GoalsComponent } from './goals/goals.component';
import { ProjectsComponent } from './projects/projects.component';
import { BragSectionComponent } from '../shared/brag-section/brag-section.component';

@Component({
  selector: 'app-brag-document',
  imports: [GoalsComponent, ProjectsComponent, BragSectionComponent],
  templateUrl: './brag-document.component.html',
})
export class BragDocumentComponent {
  selectedYear = input.required<string>();
}
