import { Component, input } from '@angular/core';

@Component({
  selector: 'app-form-error',
  imports: [],
  templateUrl: './form-error.component.html',
})
export class FormErrorComponent {
  errorMessage = input.required<string>();
}
