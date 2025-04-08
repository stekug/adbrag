import { Component, input } from '@angular/core';

@Component({
  selector: 'app-goals-header',
  imports: [],
  templateUrl: './goals-header.component.html',
  styleUrl: './goals-header.component.css',
})
export class GoalsHeaderComponent {
  title = input<string>();
}
