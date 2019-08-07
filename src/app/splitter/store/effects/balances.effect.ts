import { Injectable, Injector } from '@angular/core';
import { exhaustMap, map, tap, switchMap, catchError } from 'rxjs/operators';
import { of, empty} from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as fromServices from '../../services';
// import * as fromRootServices from '../../../app/services';

import { BalancesActions } from '../actions';
import { ErrorActions, Web3ProviderActions, SpinnerActions} from '../../../app/store/actions'
import {Balance} from '../../models/balance.model'


@Injectable()
export class BalanceEffects {
  constructor(
    private splitterContractService: fromServices.SplitterContractService,
    // private web3ProviderService: fromRootServices.Web3ProviderService,
    private readonly actions$: Actions,
  ) {}

//   splitterContractService = injector.get(fromServices.SplitterContractService)

    splitBalance$ = createEffect(() => this.actions$.pipe(
        ofType(BalancesActions.split),
        exhaustMap((action)=> {
            let { bob, carol, amount} = action
            
            return this.splitterContractService.split(bob, carol, amount).pipe(

                tap( (balances: Balance[]) => console.log('balances: ', balances)),
                switchMap( (balances: Balance[]) => {

                    return [
                        BalancesActions.splitSuccess({
                            balances
                        }),
                        // BalancesActions.loadBalance()
                        // update current balance
                        Web3ProviderActions.getBalance()
                    ]
                  }                
                ),

                catchError((error: Error) =>
                    // of(ErrorActions.errorMessage({ errorMsg: err.message }),
                    // SpinnerActions.hide(),  
                    // // update ballance
                    // // Web3ProviderActions.getBalance()
                    // )

                    of(BalancesActions.splitFail({error}))
              )
            )
        }),
    ));

    withdrawBalance$ = createEffect(() => this.actions$.pipe(
        ofType(BalancesActions.withdraw),
        exhaustMap(()=> {
            return this.splitterContractService.withdraw().pipe(

                tap( (balance: Balance) => console.log('balance: ', balance)),
                switchMap( (balance: Balance) => {

                    return [
                        BalancesActions.withdrawSuccess({
                            balance
                        }),
                        // BalancesActions.loadBalance()
                        // update current balance
                        Web3ProviderActions.getBalance()
                    ]
                  }                
                ),

                catchError((error: Error) =>
                    of(BalancesActions.withdrawFail({error}))
              )
            )
        }),
    ));


    loadBalance$ = createEffect(() => this.actions$.pipe(
        ofType(BalancesActions.loadBalance),
        exhaustMap((action)=>{
            let {address} = action

            return this.splitterContractService.getBalance(address).pipe(
                tap( (balance : Balance ) => console.log('balances: ', balance)),

                switchMap( (balance: Balance) => {

                    return [
                        BalancesActions.loadBalanceSuccess({
                            balance
                        }),
                    ]
                  }                
                ),
                catchError((error: Error) =>
                of(BalancesActions.loadBalanceFail({error}))
                )
            )
        }),
    ));

} 