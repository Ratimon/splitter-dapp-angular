import { createAction, props} from '@ngrx/store';

export const init = createAction('[Web3/Provider] Init');
export const initSuccess = createAction('[Web3/Provider] Init Success');
export const getAccount = createAction('[Web3/Provider] Account Request');
export const accountSuccess = createAction('[Web3/Provider] Account Success',  props<{ address: string }>());
export const getBalance = createAction('[Web3/Provider] Balance Request');
export const balanceSuccess = createAction('[Web3/Provider] Balance Success',  props<{ balance: string }>());