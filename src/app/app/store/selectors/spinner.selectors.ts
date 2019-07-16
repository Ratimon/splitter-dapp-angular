import {
    createFeatureSelector,
    createSelector,
  } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromSpinner from '../reducers/spinner.reducer';

export const selectSpinnerState = createFeatureSelector<fromRoot.AppState, fromSpinner.SpinnerState>(
    'spinner'
  );
  
export const getSpinnerShow = createSelector(
    selectSpinnerState,
    fromSpinner.getSpinnerShow
  );