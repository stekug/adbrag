import { Component, input, output, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { GoalsSection } from '../../../models/brag-document.model';

@Component({
  selector: 'app-new-goal',
  imports: [FormsModule],
  templateUrl: './new-goal.component.html',
  styleUrl: './new-goal.component.css',
})
export class NewGoalComponent {
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
