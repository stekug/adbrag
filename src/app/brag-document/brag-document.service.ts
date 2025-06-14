import { afterNextRender, computed, Injectable, Signal, signal } from '@angular/core';

import { DUMMY_BRAGS } from '../../data/dummy-data';
import { BragDocument, Goal, GoalsSection, Project } from '../models/brag-document.model';

@Injectable({
  providedIn: 'root',
})
export class BragDocumentService {
  private brags = signal(DUMMY_BRAGS);
  selectedYear = signal(new Date().getFullYear().toString());

  sortedBrags = computed(() =>
    this.brags()
      .slice()
      .sort((a, b) => a.year.localeCompare(b.year))
  );

  availableYears = computed(() => this.sortedBrags().map((brag) => brag.year));

  // =======================================
  // ============= Local Storage ===========
  // =======================================

  saveSelectedYear(year: string) {
    localStorage.setItem('selectedYear', JSON.stringify(year));
  }

  // --> Load data from local storage, when data exists <--
  constructor() {
    const savedYear = localStorage.getItem('selectedYear');
    if (savedYear) {
      this.selectedYear.set(JSON.parse(savedYear));
    }

    afterNextRender(() => {
      const brags = localStorage.getItem('brags');
      if (brags) {
        this.brags.set(JSON.parse(brags));
      }
    });
  }

  getSelectedYear() {
    return this.selectedYear;
  }

  // =======================================
  // ========== Brag Document Logic ========
  // =======================================

  // --> Helper function to save data / brags to localStoare <--
  private saveBrags() {
    localStorage.setItem('brags', JSON.stringify(this.brags()));
  }

  getBragForYear(year: string): Signal<BragDocument | null> {
    return computed(() => this.brags().find((brag) => brag.year === year) ?? null);
  }

  createThisYearBrag() {
    const thisYear = new Date().getFullYear().toString();
    const newBrag = {
      id: `brag-${thisYear}`,
      year: thisYear,
      goalsThisYear: [],
      goalsNextYear: [],
      projects: [],
      collaborations: [],
    };
    this.brags.update((brags) => [...brags, newBrag]);
    this.saveBrags();
  }

  resetThisYearBrag(year: string) {
    const emptyBrag = {
      id: `brag-${year}`,
      year: year,
      goalsThisYear: [],
      goalsNextYear: [],
      projects: [],
      collaborations: [],
    };
    this.brags.update((allBrags) => [...allBrags.filter((brag) => brag.year !== year), emptyBrag]);

    this.saveBrags();
  }

  // =======================================
  // ============= Goal Logic ==============
  // =======================================

  saveNewGoal(year: string, newGoal: Goal, goalsSection: GoalsSection) {
    this.brags.update((allBrags) =>
      allBrags.map((brag) => {
        if (brag.year !== year) return brag;

        switch (goalsSection) {
          case 'goalsThisYear':
            return {
              ...brag,
              goalsThisYear: [...brag.goalsThisYear, newGoal],
            };
          case 'goalsNextYear':
            return {
              ...brag,
              goalsNextYear: [...brag.goalsNextYear, newGoal],
            };
          default:
            throw new Error(`Unknown goalsSection: ${goalsSection}`);
        }
      })
    );
    this.saveBrags();
  }

  deleteGoal(year: string, id: string, goalsSection: GoalsSection) {
    this.brags.update((allBrags) =>
      allBrags.map((brag) => {
        if (brag.year !== year) return brag;

        switch (goalsSection) {
          case 'goalsThisYear':
            return {
              ...brag,
              goalsThisYear: brag.goalsThisYear.filter((goal) => goal.id !== id),
            };
          case 'goalsNextYear':
            return {
              ...brag,
              goalsNextYear: brag.goalsNextYear.filter((goal) => goal.id !== id),
            };
          default:
            throw new Error(`Unknown goalsSection: ${goalsSection}`);
        }
      })
    );
    this.saveBrags();
  }

  getGoal(year: string, id: string, goalsSection: GoalsSection) {
    const brag = this.getBragForYear(year)();

    if (!brag) return;

    if (goalsSection === 'goalsThisYear') {
      const goal = brag.goalsThisYear.find((g) => g.id === id);
      return goal;
    } else if (goalsSection === 'goalsNextYear') {
      const goal = brag.goalsNextYear.find((g) => g.id === id);
      return goal;
    }
    return undefined;
  }

  saveEditedGoal(year: string, editedGoal: Goal, goalsSection: GoalsSection) {
    this.brags.update((allBrags) =>
      allBrags.map((brag) => {
        if (brag.year !== year) return brag;

        switch (goalsSection) {
          case 'goalsThisYear':
            const newGoalsThisYear = brag.goalsThisYear.map((goal) => {
              if (goal.id !== editedGoal.id) return goal;
              return editedGoal;
            });
            return {
              ...brag,
              goalsThisYear: newGoalsThisYear,
            };
          case 'goalsNextYear':
            const newGoalsNextYear = brag.goalsNextYear.map((goal) => {
              if (goal.id !== editedGoal.id) return goal;
              return editedGoal;
            });
            return {
              ...brag,
              goalsNextYear: newGoalsNextYear,
            };
          default:
            throw new Error(`Unknown goalsSection: ${goalsSection}`);
        }
      })
    );
    this.saveBrags();
  }

  // =======================================
  // =========== Projects Logic ============
  // =======================================

  getProjectsForThisYear(year: string) {
    const brag = this.getBragForYear(year)();

    if (!brag) return;

    return brag.projects;
  }

  getProject(year: string, projectId: string) {
    const brag = this.getBragForYear(year)();

    if (!brag) return;

    const project = brag.projects.find((project) => project.id === projectId);
    return project;
  }

  saveNewProject(year: string, newProject: Project) {
    this.brags.update((allBrags) =>
      allBrags.map((brag) => {
        if (brag.year !== year) return brag;

        return {
          ...brag,
          projects: [...brag.projects, newProject],
        };
      })
    );
    this.saveBrags();
  }

  deleteProject(year: string, projectId: string) {
    this.brags.update((allBrags) =>
      allBrags.map((brag) => {
        if (brag.year !== year) return brag;

        return {
          ...brag,
          projects: brag.projects.filter((project) => project.id !== projectId),
        };
      })
    );
    this.saveBrags();
  }

  editProject(year: string, editedProject: Project) {
    this.brags.update((allBrags) =>
      allBrags.map((brag) => {
        if (brag.year !== year) return brag;

        const newProjects = brag.projects.map((project) => {
          if (project.id !== editedProject.id) return project;
          return editedProject;
        });

        return {
          ...brag,
          projects: newProjects,
        };
      })
    );
    this.saveBrags();
  }

  // =======================================
  // ======== Collaborations Logic =========
  // =======================================

  getCollaborationsForThisYear(year: string) {
    const brag = this.getBragForYear(year)();

    if (!brag) return [];

    return brag.collaborations;
  }
}
