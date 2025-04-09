import { afterNextRender, Injectable, signal } from '@angular/core';

import { DUMMY_BRAGS } from '../../data/dummy-data';

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
    const singleBrac = this.brags().filter((brag) => brag.year === year)[0];
    console.log(singleBrac);
    this.saveBrags();
    return singleBrac;
  }
}
