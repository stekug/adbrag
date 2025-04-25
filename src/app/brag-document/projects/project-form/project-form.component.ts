import { Component, input, OnInit, output } from '@angular/core';
import {
  FormBuilder,
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
import { FormErrorComponent } from '../../../shared/form-error/form-error.component';
import { Project, ProjectFormValue } from '../../../models/brag-document.model';

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
    FormErrorComponent,
  ],
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent implements OnInit {
  projectData = input<Project | null>();
  pendingEditProjectId = '';

  isEditingProject = input<boolean>(false);

  cancel = output<void>();
  submitForm = output<Project>();

  form = new FormGroup({
    title: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40),
      ],
    }),
    subTitle: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ],
    }),
    startDate: new FormControl(new Date(), {
      validators: [Validators.required],
    }),
    endDate: new FormControl(new Date(), {
      validators: [Validators.required],
    }),
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

  get startDateIsInvalid() {
    return (
      this.form.controls.startDate.touched &&
      this.form.controls.startDate.dirty &&
      this.form.controls.startDate.invalid
    );
  }
  get endDateIsInvalid() {
    return (
      this.form.controls.endDate.touched &&
      this.form.controls.endDate.dirty &&
      this.form.controls.endDate.invalid
    );
  }

  ngOnInit(): void {
    const projectData = this.projectData();
    if (!projectData) return;

    this.pendingEditProjectId = projectData.id;

    this.form.patchValue({
      ...projectData,
      startDate: new Date(projectData.startDate),
      endDate: new Date(projectData.endDate),
      techStack: Array.isArray(projectData.techStack)
        ? projectData.techStack.join(', ')
        : '',
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { title, subTitle, description, techStack, startDate, endDate } = this
      .form.value as ProjectFormValue;

    if (this.isEditingProject()) {
      const editedProject = {
        id: this.pendingEditProjectId,
        title,
        subTitle,
        description,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        techStack: techStack.split(',').map((tech: string) => tech.trim()),
      };
      this.submitForm.emit(editedProject);
    } else {
      const newProject = {
        id: crypto.randomUUID(),
        title,
        subTitle,
        description,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        techStack: techStack.split(',').map((tech: string) => tech.trim()),
      };

      this.submitForm.emit(newProject);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
