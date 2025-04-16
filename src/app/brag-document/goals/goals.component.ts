import { Component, computed, inject, input, signal } from '@angular/core';
import { GoalsSectionComponent } from './goals-section/goals-section.component';
import { BragDocumentService } from '../brag-document.service';
import { Goal, GoalsSection } from '../../models/brag-document.model';
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

  selectedYear = input.required<string>();

  brag = computed(() =>
    this.bragDocumentService.getBragForYear(this.selectedYear())()
  );

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
    this.bragDocumentService.saveNewGoal(
      this.selectedYear(),
      newGoal,
      goalsSection
    );

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
      this.selectedYear(),
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

    const goal = this.bragDocumentService.getGoal(
      this.selectedYear(),
      id,
      goalsSection
    );
    if (!goal) {
      console.error(`Goal with ID ${id} not found in the specified section.`);
      alert(
        'The goal you are trying to edit could not be found. Please try again.'
      );
      return;
    }

    this.goalText.set(goal.text);
  }

  onEdit(goalData: { text: string; goalsSection: GoalsSection }) {
    const editedGoal = { text: goalData.text, id: this.pendingEditId };
    this.bragDocumentService.saveEditedGoal(
      this.selectedYear(),
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
