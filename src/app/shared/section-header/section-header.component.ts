import { Component, input, output } from '@angular/core';
import { AddBtnComponent } from '../add-btn/add-btn.component';

@Component({
  selector: 'app-section-header',
  imports: [AddBtnComponent],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css',
})
export class SectionHeaderComponent {
  title = input.required<string>();
  actionType = input<string>();
  onAdd = output<string | void>();

  handleAddClick() {
    if (this.actionType()) {
      this.onAdd.emit(this.actionType());
    } else {
      this.onAdd.emit();
    }
  }
}
