import { Injectable, Inject } from '@angular/core';


import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, from, EMPTY as empty} from 'rxjs';
import { exhaustMap, switchMap, map, tap, catchError } from 'rxjs/operators';

import { MetamaskWeb3Provider } from '../../services/tokens/web3-token';
import { Web3ProviderService } from '../../services/web3-provider.service';

import { Web3ProviderActions, SpinnerActions, ErrorActions } from '../actions';

@Injectable()
export class Web3ProviderEffects {
  constructor(
    @Inject(MetamaskWeb3Provider) private web3Provider,
    private web3ProviderService: Web3ProviderService,
    private readonly actions$: Actions
  ) {}

  metaMaskEnable$ = createEffect(() => this.actions$.pipe(
      ofType(Web3ProviderActions.init),
      exhaustMap(() => {
        if ('enable' in this.web3Provider) {
          return from(this.web3Provider.enable()).pipe(

            tap((ethAccounts: string[]) =>
              console.log(
                'Ethereum provider has been granted access to the following accounts',
                ethAccounts
              )
            ),

            map((ethAccounts: string[]) => {
              if (ethAccounts.length === 0) {
                return ErrorActions.errorMessage({
                  errorMsg: 'Can not get any user accounts'
                });
              }
              return Web3ProviderActions.initSuccess();
            }),

            // User denied account access
            catchError((err: Error) =>
              of(ErrorActions.errorMessage({ errorMsg: err.message }), SpinnerActions.hide())
            )
          );
        }

        return empty;
      })
    )
  );


  showAccountInfo$ = createEffect(() => this.actions$.pipe(
      ofType(Web3ProviderActions.initSuccess),
      switchMap(() => {
        return [
          Web3ProviderActions.getAddress(),
          Web3ProviderActions.getBalance()
        ]

      })
    )
  );

  getAccount$ = createEffect(() => this.actions$.pipe(
      ofType(Web3ProviderActions.getAddress),
      switchMap(() =>
        this.web3ProviderService.getAccount().pipe(
          map((address: string) => Web3ProviderActions.addressSuccess({ address })),
          catchError((err: Error) =>
            of(ErrorActions.errorMessage({ errorMsg: err.message }))
          )
        )
      )
    )
  );

  getBalance$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Web3ProviderActions.getBalance),
      switchMap(() =>
        this.web3ProviderService.getBalance().pipe(
          map((balance: string) =>
            Web3ProviderActions.balanceSuccess({ balance })
          ),
          catchError((err: Error) =>
            of(ErrorActions.errorMessage({ errorMsg: err.message }))
          )
        )
      )
    )
  );

  showSpinner$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Web3ProviderActions.init),
      map(() => SpinnerActions.show())
    )
  );

  hideSpinner$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Web3ProviderActions.initSuccess),
      map(() => SpinnerActions.hide())
    )
  );

}