import { Component, input, OnInit } from '@angular/core';
import { GoalComponent } from './goal/goal.component';

import { GoalsSection, type Goal } from '../../../models/brag-document.model';

@Component({
  selector: 'app-goals-container',
  imports: [GoalComponent],
  templateUrl: './goals-container.component.html',
  styleUrl: './goals-container.component.css',
})
export class GoalsContainerComponent {
  goals = input.required<Goal[]>();
  goalsSection = input.required<GoalsSection>();
}
