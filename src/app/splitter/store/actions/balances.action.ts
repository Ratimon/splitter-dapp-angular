import { createAction, props} from '@ngrx/store';
import { Balance } from '../../models/balance.model';

export const split = createAction('[SplitterContract] Split Amount', props<{bob: string; carol: string; amount: number}>());
// export const splitSuccess = createAction('[SplitterContract] Split Amount Success', props<{payload: {bob: string; carol: string; amount: number}}>());
export const splitSuccess = createAction('[SplitterContract] Split Amount Success', props<{balances: Balance[]}>());
export const splitFail = createAction('[SplitterContract] Split Amount Fail', props<{error: any }>());

export const loadBalance = createAction('[SplitterContract] Load Balance State', props<{address: string}>());
export const loadBalanceSuccess = createAction('[SplitterContract] Load Balance State Success', props<{balance: Balance}>());
export const loadBalanceFail = createAction('[SplitterContract] Load Balance State Fail', props<{error: any }>());

export const withdraw = createAction('[SplitterContract] Withdraw Amount');
export const withdrawSuccess = createAction('[SplitterContract] Withdraw Amount Success', props<{balance: Balance}>());
export const withdrawFail = createAction('[SplitterContract] Withdraw Amount Fail', props<{error: any }>());