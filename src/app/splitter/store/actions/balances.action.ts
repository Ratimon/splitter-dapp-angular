import { createAction, props} from '@ngrx/store';
import { Balance } from '../../models/balance.model';

export const split = createAction('[SplitterContract] Split Amount ', props<{payload: {bob: string; carol: string; amount: number}}>());
export const withdraw = createAction('[SplitterContract] Withdraw Amount ');

