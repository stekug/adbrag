import { Injectable } from '@angular/core';
import { DUMMY_BRAGS } from '../../data/dummy-data';

@Injectable({
  providedIn: 'root',
})
export class BragDocumentService {
  loadBrag(year: string) {
    const bragDoc = DUMMY_BRAGS.filter((brag) => brag.year === year)[0];
    console.log(bragDoc);
    return bragDoc;
  }
}
