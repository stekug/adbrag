import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { BragItemComponent } from '../../shared/brag-item/brag-item.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, BragItemComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {}
