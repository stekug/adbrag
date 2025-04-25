import { Component, computed, inject, input, output } from '@angular/core';
import { BragDocumentService } from '../brag-document.service';

import { ProjectComponent } from './project/project.component';
import { BragItemComponent } from '../../shared/brag-item/brag-item.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { Project } from '../../models/brag-document.model';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectComponent,
    ProjectFormComponent,
    BragItemComponent,
    SectionHeaderComponent,
    ConfirmDialogComponent,
  ],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  private bragDocumentService = inject(BragDocumentService);

  selectedYear = input.required<string>();

  isAddingProject = false;
  isDeletingProject = false;
  isEditingProject = false;

  pendingDeleteProjectId = '';
  pendingEditProjectId = '';

  pendingEditProjectData: Project | null = null;

  brag = computed(() =>
    this.bragDocumentService.getBragForYear(this.selectedYear())()
  );

  projects = computed(() =>
    this.bragDocumentService.getProjectsForThisYear(this.selectedYear())
  );

  // ### Add Project ###

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

  // ### Edit Project ###

  onCancelEditProject() {
    this.isEditingProject = false;
  }

  handleEditProjectRequest(projectId: string) {
    this.isEditingProject = true;
    this.pendingEditProjectId = projectId;

    const projectToEdit = this.bragDocumentService.getProject(
      this.selectedYear(),
      projectId
    );

    if (!projectToEdit) return;
    this.pendingEditProjectData = projectToEdit;
  }

  // ### Delete Project ###

  onCancelDeleteProject() {
    this.isDeletingProject = false;
  }

  handleDeleteProjectRequest(projectId: string) {
    this.isDeletingProject = true;
    this.pendingDeleteProjectId = projectId;
  }

  handleDeleteProject() {
    this.bragDocumentService.deleteProject(
      this.selectedYear(),
      this.pendingDeleteProjectId
    );
    this.pendingDeleteProjectId = '';
    this.isDeletingProject = false;
  }
}
