import { Component, input, output } from '@angular/core';
import { GoalsSection, type Goal } from '../../../models/brag-document.model';

import { GoalsContainerComponent } from '../goals-container/goals-container.component';
import { SectionHeaderComponent } from '../../../shared/section-header/section-header.component';

@Component({
  selector: 'app-goals-section',
  imports: [GoalsContainerComponent, SectionHeaderComponent],
  templateUrl: './goals-section.component.html',
  styleUrl: './goals-section.component.css',
})
export class GoalsSectionComponent {
  title = input.required<string>();
  goals = input.required<Goal[]>();
  goalsSection = input.required<GoalsSection>();

  onAdd = output<string | void>();

  requestDelete = output<string>();
  requestEdit = output<string>();
}
