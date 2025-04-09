import { Component, input } from '@angular/core';
import { AddBtnComponent } from '../add-btn/add-btn.component';

@Component({
  selector: 'app-section-header',
  imports: [AddBtnComponent],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css',
})
export class SectionHeaderComponent {
  title = input<string>();
}
