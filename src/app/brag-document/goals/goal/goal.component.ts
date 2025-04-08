import { Component, input } from '@angular/core';

import { type Goal } from '../../../models/brag-document.model';

@Component({
  selector: 'app-goal',
  imports: [],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css',
})
export class GoalComponent {
  goal = input<Goal>();
}
