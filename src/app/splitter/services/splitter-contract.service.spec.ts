import { TestBed } from '@angular/core/testing';

import { SplitterContractService } from './splitter-contract.service';

describe('SplitterContractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SplitterContractService = TestBed.get(SplitterContractService);
    expect(service).toBeTruthy();
  });
});
