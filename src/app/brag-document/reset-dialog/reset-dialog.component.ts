import { Component, effect, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-dialog',
  imports: [FormsModule],
  templateUrl: './reset-dialog.component.html',
})
export class ResetDialogComponent {
  selectedYear = input<string>();
  cancelResetRequest = output();
  resetBragDocument = output();
  enteredText = '';

  onCancel() {
    this.cancelResetRequest.emit();
  }

  onSubmit() {
    if (this.enteredText === 'RESET') {
      this.resetBragDocument.emit();
    } else return;
  }
}
