import { createReducer, on } from '@ngrx/store';
import { Web3ProviderActions } from '../actions';

export interface Web3ProviderState {
  metamaskEnable: boolean;
  address: string;
  balance: string;
}

const initialState: Web3ProviderState = {
  metamaskEnable: false,
  address: null,
  balance: null
};

export const reducer = createReducer(
  initialState,
  on(Web3ProviderActions.initSuccess, state => ({
    ...state,
    metamaskEnable: true
  })),
  on(Web3ProviderActions.addressSuccess, (state, { address }) => ({
    ...state,
    address: address
  })),
  on(Web3ProviderActions.balanceSuccess, (state, { balance }) => ({
    ...state,
    balance
  }))
);

export const getMetaMaskEnable = (state: Web3ProviderState) =>
  state.metamaskEnable;
export const getAddress = (state: Web3ProviderState) => state.address;
export const getBalance = (state: Web3ProviderState) => state.balance;