import { Component, input } from '@angular/core';
import { type Goal } from '../../../models/brag-document.model';

import { GoalsContainerComponent } from '../goals-container/goals-container.component';
import { GoalsHeaderComponent } from '../goals-header/goals-header.component';

@Component({
  selector: 'app-goals-section',
  imports: [GoalsContainerComponent, GoalsHeaderComponent],
  templateUrl: './goals-section.component.html',
  styleUrl: './goals-section.component.css',
})
export class GoalsSectionComponent {
  title = input<string>();
  goals = input.required<Goal[]>();
}
