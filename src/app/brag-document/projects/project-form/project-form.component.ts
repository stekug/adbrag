import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDateRangePicker,
    MatDateRangeInput,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent {
  cancel = output<void>();
  submit = output<void>();

  form = new FormGroup({
    title: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ],
    }),
    subTitle: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ],
    }),
    startDate: new FormControl(new Date()),
    endDate: new FormControl(new Date()),
    description: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ],
    }),
    techStack: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(1), // Assuming techStack is a string of comma-separated values
      ],
    }),
  });

  get titleIsInvalid() {
    return (
      this.form.controls.title.touched &&
      this.form.controls.title.dirty &&
      this.form.controls.title.invalid
    );
  }
  get subTitleIsInvalid() {
    return (
      this.form.controls.subTitle.touched &&
      this.form.controls.subTitle.dirty &&
      this.form.controls.subTitle.invalid
    );
  }
  get descriptionIsInvalid() {
    return (
      this.form.controls.description.touched &&
      this.form.controls.description.dirty &&
      this.form.controls.description.invalid
    );
  }
  get techStackIsInvalid() {
    return (
      this.form.controls.techStack.touched &&
      this.form.controls.techStack.dirty &&
      this.form.controls.techStack.invalid
    );
  }

  onSubmit() {
    this.submit.emit();
    console.log(this.form.value);
  }

  onCancel() {
    this.cancel.emit();
  }
}
