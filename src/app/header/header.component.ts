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

  currentYear = new Date().getFullYear().toString();
  availableYears = this.bragDocumentService.availableYears;
  selectedYear = input.required<string>();
  selectedYearValue!: string;
  changeYear = output<string>();
  resetBragRequest = output<void>();

  ngOnInit(): void {
    this.selectedYearValue = this.selectedYear();
  }

  onChangeYear() {
    if (this.selectedYearValue === 'create-new') {
      this.bragDocumentService.createThisYearBrag();
      this.selectedYearValue = this.currentYear;
      this.changeYear.emit(this.currentYear);
    } else {
      this.changeYear.emit(this.selectedYearValue);
      this.bragDocumentService.saveSelectedYear(this.selectedYearValue);
    }
  }

  onResetBragRequest() {
    this.resetBragRequest.emit();
  }
}
