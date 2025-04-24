import { Component, computed, inject, input } from '@angular/core';
import { BragDocumentService } from '../brag-document.service';

import { ProjectComponent } from './project/project.component';
import { BragItemComponent } from '../../shared/brag-item/brag-item.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { Project } from '../../models/brag-document.model';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectComponent,
    ProjectFormComponent,
    BragItemComponent,
    SectionHeaderComponent,
  ],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  private bragDocumentService = inject(BragDocumentService);

  selectedYear = input.required<string>();

  isAddingProject = false;

  brag = computed(() =>
    this.bragDocumentService.getBragForYear(this.selectedYear())()
  );

  projects = computed(() =>
    this.bragDocumentService.getProjectsForThisYear(this.selectedYear())
  );

  openAddProjectForm() {
    this.isAddingProject = true;
  }

  onCancelAddProject() {
    this.isAddingProject = false;
  }

  onSubmitAddProject(newProject: Project) {
    this.isAddingProject = false;
    this.bragDocumentService.saveNewProject(this.selectedYear(), newProject);
  }

  handleDeleteProject(projectId: string) {
    this.bragDocumentService.deleteProject(this.selectedYear(), projectId);
  }
}
