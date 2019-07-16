import {
    createFeatureSelector,
    createSelector,
  } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromError from '../reducers/error.reducer';


export const selectErrorState = createFeatureSelector<fromRoot.AppState, fromError.ErrorState>(
  'error'
);

export const getError = createSelector(
  selectErrorState,
  fromError.getError
);