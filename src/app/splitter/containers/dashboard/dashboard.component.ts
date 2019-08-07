import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable , of } from 'rxjs';

import * as fromRoot from '../../../app/store';
import * as fromSplitter from '../../../splitter/store';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  address$: Observable<string>;
  ethbalance$: Observable<string>;

  constructor(
    private store: Store<fromRoot.AppState>
  ) { }

  ngOnInit() {
    this.address$ = this.store.select(fromRoot.getAddress);
    this.ethbalance$ = this.store.select(fromRoot.getBalance);
  }

  onSplit(event) {
    let {firstRecipient, secondRecipient, amount} = event;

    this.store.dispatch(fromSplitter.BalancesActions.split({
      bob: firstRecipient,
      carol: secondRecipient,
      amount
    }));
  }

  onWithdraw(event) {
    this.store.dispatch(fromSplitter.BalancesActions.withdraw());
  }

  onAdd(event) {
    let {address} = event;
    this.store.dispatch(fromSplitter.BalancesActions.loadBalance({
      address
    }));
  }

}
