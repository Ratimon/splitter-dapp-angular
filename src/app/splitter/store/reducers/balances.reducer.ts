import { createReducer, on } from '@ngrx/store';

import {Balance} from '../../models/balance.model'
import { BalancesActions } from '../actions';

export interface BalanceState {
    entities: { [address: string]: Balance };
    loaded: boolean;
    loading: boolean;
}

export const initialState: BalanceState = {
  entities: {},
  loaded: false,
  loading: false,
};

export const reducer = createReducer(
  initialState,

  on(
      BalancesActions.loadBalance, 
    (state) => (
      {
      ...state,
      loading: true
    })
  ),

  on(
    BalancesActions.loadBalanceSuccess, 
    (state, { balance }) => {

      const entities = {
        ...state.entities,
        [balance.address]: balance

      };
      
      return {
        ...state,
        entities,
        loading: false,
        loaded: true,
    }}
  ),

  on(
    BalancesActions.loadBalanceFail, 
    (state) => {

      return {
        ...state,
        loading: false,
        loaded: false,
    }}
  ), 

  on(
      BalancesActions.split, 
    (state) => (
      {
      ...state,
      loading: true,
    })
  ),

  on(
    BalancesActions.splitSuccess, 
    (state, { balances }) => {
      const bob =  balances[0];
      const carol = balances[0];

      const entities = {
        ...state.entities,
        [bob.address]: bob.amount,
        [carol.address]: carol.amount,
      };
      
      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
    }}
  ),

  on(
    BalancesActions.splitFail, 
    (state) => {

      return {
        ...state,
        loading: false,
        loaded: false,
    }}
  ),

  on(
    BalancesActions.withdraw, 
    (state) => (
      {
      ...state,
      loading: true
    })
  ),

  on(
    BalancesActions.withdrawSuccess,
    (state, { balance }) => {

      const {address, amount} =  balance

      const entities = {
        ...state.entities,
        [address]: amount,
      };

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
    }}
  ),

);