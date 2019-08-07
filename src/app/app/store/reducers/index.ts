import {
  ActionReducer,
  ActionReducerMap,
  Action,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { InjectionToken } from '@angular/core';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { environment } from '../../../../environments/environment';

import * as fromSpinner from './spinner.reducer';
import * as fromError from './error.reducer';
import * as fromWeb3Provider from './web3-provider.reducer';


export interface AppState {
  router: RouterReducerState;
  error: fromError.ErrorState;
  spinner: fromSpinner.SpinnerState;
  web3Provider: fromWeb3Provider.Web3ProviderState;
};

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
  factory: () => ({
    router: routerReducer,
    error: fromError.reducer,
    spinner: fromSpinner.reducer,
    web3Provider: fromWeb3Provider.reducer,
  }),
});

// console.log all actions
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];