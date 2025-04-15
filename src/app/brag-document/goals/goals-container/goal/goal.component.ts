import { Component, input, output } from '@angular/core';

import {
  type GoalsSection,
  type Goal,
} from '../../../../models/brag-document.model';
import { SmallBtnComponent } from '../../../../shared/small-btn/small-btn.component';

@Component({
  selector: 'app-goal',
  imports: [SmallBtnComponent],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css',
})
export class GoalComponent {
  goal = input.required<Goal>();
  goalsSection = input.required<GoalsSection>();

  requestDelete = output<string>();
  requestEdit = output<string>();
}
