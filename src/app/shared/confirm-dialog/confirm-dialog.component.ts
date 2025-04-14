import { Component, input, output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirm-dialog',
  imports: [FormsModule],
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
  message = input.required<string>();
  confirmText = input.required<string>();
  cancelText = input.required<string>();

  cancel = output<void>();
  confirm = output<void>();

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.confirm.emit();
  }
}
