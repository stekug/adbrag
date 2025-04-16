import { Component, inject, input, OnInit, output } from '@angular/core';
import { BragDocumentService } from '../brag-document/brag-document.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  private bragDocumentService = inject(BragDocumentService);

  // currentYear = new Date().getFullYear().toString();
  currentYear = '2026';
  availableYears = this.bragDocumentService.availableYears();
  selectedYear = input.required<string>();
  selectedYearValue!: string;
  changeYear = output<string>();

  ngOnInit(): void {
    this.selectedYearValue = this.selectedYear();
  }

  onYearChange() {
    this.changeYear.emit(this.selectedYearValue);
  }
}
