import { Injectable } from '@angular/core';
// import { SplitterModule } from '../splitter.module';
import { SplitterContractToken } from './tokens/splitter-contract-token';
import { Observable, from, of } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { utils } from 'ethers';

// @Injectable(
//   {providedIn: SplitterModule}
// )
@Injectable()  
export class SplitterContractService {

  constructor(private contractToken: SplitterContractToken) { }

  split( bob :string, carol: string, amount: number) : Observable<string> {


    let overrides = {
      // The maximum units of gas for the transaction to use
      gasLimit: 23000,
      // The price (in wei) per unit of gas
      gasPrice: utils.parseUnits('9.0', 'gwei'),
      // The nonce to use in the transaction
      // nonce: 123,

      // The amount to send with the transaction (i.e. msg.value)
      value: utils.parseEther(amount.toString()),
      // The chain ID (or network ID) to use
      chainId: 4
    };

    let tx = this.contractToken.split( bob, carol, overrides);

    return from(tx).pipe(
      switchMap( (tx: any)=>{

        console.log('Transaction', tx);
        console.log('Hash:',tx.hash);

        return from(tx.wait()).pipe(
          tap((txReceipt: any) => console.log('TransactionReceipt: ', txReceipt)),
          
        )
      } ),

    );

  }

  withdraw(){
    
  }

  // async split(amount: number, bob :string, carol: string) {

  //   let overrides = {
  //     // The maximum units of gas for the transaction to use
  //     gasLimit: 23000,
  //     // The price (in wei) per unit of gas
  //     gasPrice: utils.parseUnits('9.0', 'gwei'),
  //     // The nonce to use in the transaction
  //     // nonce: 123,

  //     // The amount to send with the transaction (i.e. msg.value)
  //     value: utils.parseEther(amount.toString()),
  //     // The chain ID (or network ID) to use
  //     chainId: 4
  //   };

  //   let tx = await this.contractToken.split( bob, carol, overrides);

  //   console.log('Hash:',tx.hash);

  //   await tx.wait();

  //   let updatedBob = await this.contractToken.balances(bob);
  //   let updatedCarol = await this.contractToken.balances(carol);

  //   console.log(`The new Bob's address is `,updatedBob);
  //   console.log(`The new Carol's address is `,updatedCarol);

  // }

}
