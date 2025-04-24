import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Project } from '../../../models/brag-document.model';

import { SmallBtnComponent } from '../../../shared/small-btn/small-btn.component';

@Component({
  selector: 'app-project',
  imports: [DatePipe, SmallBtnComponent],
  templateUrl: './project.component.html',
})
export class ProjectComponent {
  project = input.required<Project>();
  deleteRequest = output<void>();

  onDeleteRequest() {
    this.deleteRequest.emit();
  }
}
