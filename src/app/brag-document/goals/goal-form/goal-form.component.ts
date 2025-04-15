import { Component, effect, input, output, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { GoalsSection } from '../../../models/brag-document.model';

@Component({
  selector: 'app-goal-form',
  imports: [FormsModule],
  templateUrl: './goal-form.component.html',
})
export class GoalFormComponent {
  goalsSection = input.required<GoalsSection>();
  title = input.required<string>();
  description = input.required<string>();
  placeholder = input<string>('');
  submitText = input.required<string>();
  cancelText = input.required<string>();
  initialText = input<string>('');

  cancel = output<void>();
  submitForm = output<{
    text: string;
    goalsSection: GoalsSection;
  }>();

  enteredGoal = signal<string>('');

  constructor() {
    effect(() => {
      const text = this.initialText();
      if (text) {
        this.enteredGoal.set(text);
      }
    });
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.submitForm.emit({
      text: this.enteredGoal(),
      goalsSection: this.goalsSection(),
    });
  }
}
