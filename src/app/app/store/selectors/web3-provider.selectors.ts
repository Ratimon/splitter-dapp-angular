import {
    createFeatureSelector,
    createSelector,
  } from '@ngrx/store';

import * as fromRoot from '../../../app/store';

import * as fromWeb3Provider from '../reducers/web3-provider.reducer';
  
export const getWeb3ProviderState = createFeatureSelector<fromRoot.AppState, fromWeb3Provider.Web3ProviderState>(
    'web3Provider'
);

export const getMetaMaskEnable = createSelector(
    getWeb3ProviderState,
    fromWeb3Provider.getMetaMaskEnable
);

export const getAccount = createSelector(
    getWeb3ProviderState,
    fromWeb3Provider.getAccount
);

export const getBalance = createSelector(
    getWeb3ProviderState,
    fromWeb3Provider.getBalance
);