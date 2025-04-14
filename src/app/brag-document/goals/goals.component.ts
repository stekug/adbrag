import { Component, computed, inject, input, Signal } from '@angular/core';
import { GoalsSectionComponent } from './goals-section/goals-section.component';
import { BragDocumentService } from '../brag-document.service';
import {
  BragDocument,
  Goal,
  GoalsSection,
} from '../../models/brag-document.model';
import { NewGoalComponent } from './new-goal/new-goal.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-goals',
  imports: [GoalsSectionComponent, NewGoalComponent, ConfirmDialogComponent],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css',
})
export class GoalsComponent {
  private bragDocumentService = inject(BragDocumentService);

  brag: Signal<BragDocument | null> =
    this.bragDocumentService.getBragForYear('2025');

  isAddingGoal = false;

  isConfirmDelete = false;
  pendingDeleteId: string = '';

  goalsSection: GoalsSection | null = null;

  goalsThisYear = computed(() => this.brag()?.goalsThisYear ?? []);
  goalsNextYear = computed(() => this.brag()?.goalsNextYear ?? []);

  //
  // --> Handle add goal
  //
  handleAdd(type: GoalsSection) {
    this.goalsSection = type;
    this.isAddingGoal = true;
  }

  onCancelAddGoal() {
    this.isAddingGoal = false;
  }

  onAddGoal(goalData: { text: string; goalsSection: GoalsSection }) {
    const newGoal: Goal = {
      id: crypto.randomUUID(),
      text: goalData.text,
    };
    const goalsSection = goalData.goalsSection;
    // Send newGoal to Service
    this.bragDocumentService.saveNewGoal('2025', newGoal, goalsSection);

    this.isAddingGoal = false;
  }
  //
  // <-- End add goal
  //

  //
  // --> Handle delete goal
  //

  handleDeleteRequest(id: string, goalsSection: GoalsSection) {
    this.pendingDeleteId = id;
    this.goalsSection = goalsSection;
    this.isConfirmDelete = true;
  }

  onDeleteConfirm() {
    if (!this.pendingDeleteId) return;

    this.bragDocumentService.deleteGoal(
      '2025',
      this.pendingDeleteId,
      this.goalsSection!
    );
    this.pendingDeleteId = '';
    this.isConfirmDelete = false;
    this.goalsSection = null;
  }

  onCancelDialog() {
    this.pendingDeleteId = '';
    this.isConfirmDelete = false;
  }

  //
  // <-- End delete goal
  //
}
