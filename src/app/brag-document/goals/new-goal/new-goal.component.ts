import { Component, output } from '@angular/core';

@Component({
  selector: 'app-new-goal',
  imports: [],
  templateUrl: './new-goal.component.html',
  styleUrl: './new-goal.component.css',
})
export class NewGoalComponent {
  cancel = output<void>();

  onCancel() {
    this.cancel.emit();
  }
}
