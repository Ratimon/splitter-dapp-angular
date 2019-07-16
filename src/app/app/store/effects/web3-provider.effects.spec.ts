import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { Web3ProviderEffects } from './web3-provider.effects';

describe('Web3ProviderEffects', () => {
  let actions$: Observable<any>;
  let effects: Web3ProviderEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Web3ProviderEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<Web3ProviderEffects>(Web3ProviderEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
