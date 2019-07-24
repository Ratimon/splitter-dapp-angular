import {Balance} from '../../models/balance.model'

export interface BalanceState {
    entities: { [address: string]: Balance };
    loaded: boolean;
    loading: boolean;
  }