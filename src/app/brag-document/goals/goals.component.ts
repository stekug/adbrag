import { Component, computed, inject, signal, Signal } from '@angular/core';
import { GoalsSectionComponent } from './goals-section/goals-section.component';
import { BragDocumentService } from '../brag-document.service';
import {
  BragDocument,
  Goal,
  GoalsSection,
} from '../../models/brag-document.model';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-goals',
  imports: [GoalsSectionComponent, GoalFormComponent, ConfirmDialogComponent],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css',
})
export class GoalsComponent {
  private bragDocumentService = inject(BragDocumentService);

  brag: Signal<BragDocument | null> =
    this.bragDocumentService.getBragForYear('2025');

  isAddingGoal = false;

  isEditingGoal = false;
  pendingEditId: string = '';
  goalText = signal('');

  isConfirmDelete = false;
  pendingDeleteId: string = '';

  goalsSection: GoalsSection | null = null;

  goalsThisYear = computed(() => this.brag()?.goalsThisYear ?? []);
  goalsNextYear = computed(() => this.brag()?.goalsNextYear ?? []);

  //
  // --> Handle ADD goal
  //
  handleAdd(goalsSection: GoalsSection) {
    this.goalsSection = goalsSection;
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
  // <-- End ADD goal
  //

  //
  // --> Handle DELETE goal
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
  // <-- End DELETE goal
  //

  //
  // --> Handle EDIT goal
  //

  handleEditRequest(id: string, goalsSection: GoalsSection) {
    this.goalsSection = goalsSection;
    this.pendingEditId = id;
    this.isEditingGoal = true;

    const goal = this.bragDocumentService.getGoal('2025', id, goalsSection);
    if (!goal) return;

    this.goalText.set(goal.text);
  }

  onEdit(goalData: { text: string; goalsSection: GoalsSection }) {
    const editedGoal = { text: goalData.text, id: this.pendingEditId };
    this.bragDocumentService.saveEditedGoal(
      '2025',
      editedGoal,
      goalData.goalsSection
    );
    this.isEditingGoal = false;
    this.pendingEditId = '';
  }

  onCancelEdit() {
    this.isEditingGoal = false;
  }

  //
  // <-- End EDIT goal
  //
}
