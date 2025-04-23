import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  imports: [FormsModule],
  templateUrl: './project-form.component.html',
})
export class ProjectFormComponent {
  cancel = output<void>();
  submit = output<void>();

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.submit.emit();
  }
}
