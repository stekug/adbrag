import { Component, input, output, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-goal',
  imports: [FormsModule],
  templateUrl: './new-goal.component.html',
  styleUrl: './new-goal.component.css',
})
export class NewGoalComponent {
  goalsSection = input.required<'goalsThisYear' | 'goalsNextYear'>();
  cancel = output<void>();
  add = output<{
    text: string;
    goalsSection: 'goalsThisYear' | 'goalsNextYear';
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
