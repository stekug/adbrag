import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { GoalsSectionComponent } from './goals-section/goals-section.component';
import { BragDocumentService } from '../brag-document.service';
import { BragDocument } from '../../models/brag-document.model';
import { NewGoalComponent } from './new-goal/new-goal.component';

@Component({
  selector: 'app-goals',
  imports: [GoalsSectionComponent, NewGoalComponent],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css',
})
export class GoalsComponent {
  private bragDocumentService = inject(BragDocumentService);

  brag = signal<BragDocument>(this.bragDocumentService.loadBrag('2025'));

  isAddingGoal = false;

  goalsThisYear = computed(() => this.brag().goalsThisYear);
  goalsNextYear = computed(() => this.brag().goalsNextYear);

  // --> Handle goals adding for this and next year <--
  handleAdd(type: 'goalsThisYear' | 'goalsNextYear') {
    console.log('Adding a Goal: ', type);
    switch (type) {
      case 'goalsThisYear':
        this.isAddingGoal = true;
        // update goalsThisYear
        console.log('adding goal to this year');
        break;
      case 'goalsNextYear':
        this.isAddingGoal = true;
        // update goalsNextYear
        console.log('adding goal to next year');
        break;
    }
  }

  onCancelAddGoal() {
    this.isAddingGoal = false;
  }
}
