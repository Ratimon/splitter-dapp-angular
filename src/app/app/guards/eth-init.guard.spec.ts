import { TestBed, async, inject } from '@angular/core/testing';

import { EthInitGuard } from './eth-init.guard';

describe('EthInitGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EthInitGuard]
    });
  });

  it('should ...', inject([EthInitGuard], (guard: EthInitGuard) => {
    expect(guard).toBeTruthy();
  }));
});
