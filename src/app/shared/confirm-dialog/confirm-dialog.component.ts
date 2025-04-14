import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirm-dialog',
  imports: [FormsModule],
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
  onCancel() {}

  onSubmit() {}
}
