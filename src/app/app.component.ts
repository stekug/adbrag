import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BragDocumentComponent } from './brag-document/brag-document.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BragDocumentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'adbrag';
  selectedYear = signal(new Date().getFullYear().toString());

  handleYearChange(year: string) {
    this.selectedYear.set(year);
  }
}
