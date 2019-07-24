import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable , of } from 'rxjs';

import { ethers } from 'ethers';


import * as fromRoot from '../../../app/store';

// import {Balance} from '../../models/balance.model'

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

}
