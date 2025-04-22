import { Component, input, output } from '@angular/core';
import { GoalsSection, type Goal } from '../../../models/brag-document.model';

import { GoalsContainerComponent } from '../goals-container/goals-container.component';
import { SectionHeaderComponent } from '../../../shared/section-header/section-header.component';
import { BragItemComponent } from '../../../shared/brag-item/brag-item.component';

@Component({
  selector: 'app-goals-section',
  imports: [GoalsContainerComponent, SectionHeaderComponent, BragItemComponent],
  templateUrl: './goals-section.component.html',
  styleUrl: './goals-section.component.css',
})
export class GoalsSectionComponent {
  title = input<string>();
  goals = input.required<Goal[]>();
  goalsSection = input.required<GoalsSection>();

  onAdd = output<GoalsSection>();

  requestDelete = output<string>();
  requestEdit = output<string>();
}
