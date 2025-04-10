import {
  afterNextRender,
  computed,
  Injectable,
  Signal,
  signal,
} from '@angular/core';

import { DUMMY_BRAGS } from '../../data/dummy-data';
import { BragDocument, Goal } from '../models/brag-document.model';

@Injectable({
  providedIn: 'root',
})
export class BragDocumentService {
  private brags = signal(DUMMY_BRAGS);

  // --> Load data from local storage, when data exists <--
  constructor() {
    afterNextRender(() => {
      const brags = localStorage.getItem('brags');
      if (brags) {
        this.brags.set(JSON.parse(brags));
      }
    });
  }

  // --> Helper function to save data / brags to localStoare <--
  private saveBrags() {
    localStorage.setItem('brags', JSON.stringify(this.brags()));
  }

  loadBrag(year: string) {
    const thisBrag = this.brags().filter((brag) => brag.year === year)[0];
    console.log(thisBrag);
    this.saveBrags();
    return thisBrag;
  }

  getBragForYear(year: string): Signal<BragDocument | null> {
    return computed(
      () => this.brags().find((brag) => brag.year === year) ?? null
    );
  }

  saveNewGoal(
    year: string,
    newGoal: Goal,
    section: 'goalsThisYear' | 'goalsNextYear'
  ) {
    this.brags.update((allBrags) =>
      allBrags.map((brag) => {
        if (brag.year !== year) return brag;

        switch (section) {
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
        }
      })
    );
    this.saveBrags();
  }
}
