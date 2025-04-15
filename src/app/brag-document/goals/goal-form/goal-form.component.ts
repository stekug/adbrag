import { Component, input, output, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { GoalsSection } from '../../../models/brag-document.model';

@Component({
  selector: 'app-goal-form',
  imports: [FormsModule],
  templateUrl: './goal-form.component.html',
})
export class GoalFormComponent {
  goalsSection = input.required<GoalsSection>();
  cancel = output<void>();
  add = output<{
    text: string;
    goalsSection: GoalsSection;
  }>();
  enteredGoal = signal('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      text: this.enteredGoal(),
      goalsSection: this.goalsSection(),
    });
  }
}
