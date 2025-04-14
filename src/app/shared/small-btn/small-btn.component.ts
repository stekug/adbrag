import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-small-btn',
  imports: [NgClass],
  templateUrl: './small-btn.component.html',
})
export class SmallBtnComponent {
  variant = input<'delete' | 'edit' | 'default'>('default');
}
