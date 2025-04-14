import { Component, inject, input } from '@angular/core';
import { BragDocumentService } from '../../../brag-document.service';

import {
  GoalsSection,
  type Goal,
} from '../../../../models/brag-document.model';
import { SmallBtnComponent } from '../../../../shared/small-btn/small-btn.component';
import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-goal',
  imports: [SmallBtnComponent, ConfirmDialogComponent],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css',
})
export class GoalComponent {
  private bragDocumentService = inject(BragDocumentService);

  isConfirmDelete = false;
  pendingDeleteId: string = '';
  goal = input.required<Goal>();
  goalsSection = input.required<GoalsSection>();

  onEdit() {
    console.log('edit click');
  }

  onDelete(id: string) {
    this.pendingDeleteId = id;
    this.isConfirmDelete = true;
  }

  onDeleteConfirm() {
    this.bragDocumentService.deleteGoal(
      '2025',
      this.pendingDeleteId,
      this.goalsSection()
    );
    this.pendingDeleteId = '';
    this.isConfirmDelete = false;
  }

  onCancelDialog() {
    this.pendingDeleteId = '';
    this.isConfirmDelete = false;
  }
}
