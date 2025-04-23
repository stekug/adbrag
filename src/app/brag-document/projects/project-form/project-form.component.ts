import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDatepickerModule,
  MatDateRangePicker,
} from '@angular/material/datepicker';
import { MatDateRangeInput } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-project-form',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDateRangePicker,
    MatDateRangeInput,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
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
