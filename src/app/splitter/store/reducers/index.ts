import {
    createSelector,
    createFeatureSelector,
    Action,
    combineReducers,
    ActionReducerMap,
  } from '@ngrx/store';

  import * as fromRoot from '../../../app/store/reducers';
  import * as fromBalances from './balances.reducer';

  export interface SplitterState {
    balances: fromBalances.BalanceState;
    // receipts: 
  }

  export interface AppState extends fromRoot.AppState {  
    Splitter: SplitterState;
  }
  
  export function reducers(state: SplitterState | undefined, action: Action) {
    return combineReducers({
      balances: fromBalances.reducer,
    })(state, action);
  }

  export const getSplitterState = createFeatureSelector<SplitterState>(
    'splitter'
  );