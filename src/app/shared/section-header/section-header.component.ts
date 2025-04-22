import { Component, input, output } from '@angular/core';
import { AddBtnComponent } from '../add-btn/add-btn.component';

@Component({
  selector: 'app-section-header',
  imports: [AddBtnComponent],
  templateUrl: './section-header.component.html',
})
export class SectionHeaderComponent {
  title = input.required<string>();
  onAdd = output<void>();
}
