import { Component, inject, signal } from '@angular/core';
import { BragDocumentService } from './brag-document/brag-document.service';

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
  private bragDocumentService = inject(BragDocumentService);
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
    this.bragDocumentService.resetThisYearBrag(this.selectedYear());
    this.isResetBrag = false;
  }

  handleCancelResetBragRequest() {
    this.isResetBrag = false;
  }
}
