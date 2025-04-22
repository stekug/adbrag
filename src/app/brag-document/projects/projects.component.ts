import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { BragItemComponent } from '../../shared/brag-item/brag-item.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, BragItemComponent, SectionHeaderComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  openAddProjectForm() {
    console.log('click Add');
  }
}
