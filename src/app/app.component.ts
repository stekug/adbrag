import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BragDocumentComponent } from './brag-document/brag-document.component';
import { ResetDialogComponent } from './brag-document/reset-dialog/reset-dialog.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    BragDocumentComponent,
    ResetDialogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'adbrag';
  selectedYear = signal(new Date().getFullYear().toString());
  isResetBrag = false;

  handleYearChange(year: string) {
    this.selectedYear.set(year);
  }

  handleResetBragRequest() {
    this.isResetBrag = true;
  }

  handleResetBragDocument() {
    console.log('Call the RESET Service');
    this.isResetBrag = false;
  }

  handleCancelResetBragRequest() {
    this.isResetBrag = false;
  }
}
