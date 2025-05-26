import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';

import 'iconify-icon';

@Component({
  selector: 'app-ui-icon',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: ` <iconify-icon
    inline
    [icon]="iconName()"
    [width]="getIconSize()"
    [height]="getIconSize()"
    [style.color]="color()"
    class="inline-flex items-center justify-center leading-none"
  />`,
  styles: ``,
})
export class UiIconComponent {
  iconName = input.required<string>();
  size = input.required<'small' | 'medium' | 'large'>();
  color = input<string>('currentColor');

  getIconSize() {
    switch (this.size()) {
      case 'small':
        return '1rem';
      case 'medium':
        return '3rem';
      case 'large':
        return '4rem';
      default:
        return '3rem';
    }
  }
}
