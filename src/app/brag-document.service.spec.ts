import { TestBed } from '@angular/core/testing';

import { BragDocumentService } from './brag-document.service';

describe('BragDocumentService', () => {
  let service: BragDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BragDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
