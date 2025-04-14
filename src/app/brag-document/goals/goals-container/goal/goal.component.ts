import { Component, inject, input } from '@angular/core';
import { BragDocumentService } from '../../../brag-document.service';

import {
  GoalsSection,
  type Goal,
} from '../../../../models/brag-document.model';
import { SmallBtnComponent } from '../../../shared/small-btn/small-btn.component';

@Component({
  selector: 'app-goal',
  imports: [SmallBtnComponent],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css',
})
export class GoalComponent {
  private bragDocumentService = inject(BragDocumentService);
  goal = input.required<Goal>();
  goalsSection = input.required<GoalsSection>();
  // goalSection = input.required<'goalsThisYear' | 'goalsNextYear'>();

  onClick(action: 'edit' | 'delete', id: string) {
    switch (action) {
      case 'edit':
        console.log('edit', id);
        return;
      case 'delete':
        this.bragDocumentService.deleteGoal('2025', id, this.goalsSection());
    }
  }
}
