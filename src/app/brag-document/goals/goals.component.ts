import { Component, computed, inject, Signal } from '@angular/core';
import { GoalsSectionComponent } from './goals-section/goals-section.component';
import { BragDocumentService } from '../brag-document.service';
import { BragDocument, Goal } from '../../models/brag-document.model';
import { NewGoalComponent } from './new-goal/new-goal.component';

@Component({
  selector: 'app-goals',
  imports: [GoalsSectionComponent, NewGoalComponent],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css',
})
export class GoalsComponent {
  private bragDocumentService = inject(BragDocumentService);

  brag: Signal<BragDocument | null> =
    this.bragDocumentService.getBragForYear('2025');

  isAddingGoal = false;

  activeGoalSection: 'goalsThisYear' | 'goalsNextYear' | null = null;

  goalsThisYear = computed(() => this.brag()?.goalsThisYear ?? []);
  goalsNextYear = computed(() => this.brag()?.goalsNextYear ?? []);

  // --> Handle goals adding for this and next year <--
  handleAdd(type: 'goalsThisYear' | 'goalsNextYear') {
    this.activeGoalSection = type;
    this.isAddingGoal = true;
    console.log('Adding a Goal: ', type);
  }

  onCancelAddGoal() {
    this.isAddingGoal = false;
  }

  onAddGoal(goalData: {
    text: string;
    section: 'goalsThisYear' | 'goalsNextYear';
  }) {
    const newGoal: Goal = {
      id: crypto.randomUUID(),
      text: goalData.text,
    };
    const section = goalData.section;
    // Send newGoal to Service
    this.bragDocumentService.saveNewGoal('2025', newGoal, section);

    this.isAddingGoal = false;
  }
}
