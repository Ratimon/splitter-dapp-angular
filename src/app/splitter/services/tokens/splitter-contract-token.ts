import { Injectable } from '@angular/core';
import { Contract } from 'ethers';
import { Provider } from '../../../app/services/tokens/web3-token';
import { environment } from '../../../../environments/environment'

import {SplitterModule} from '../../splitter.module'

const SPLITTER_CONTRACT_ADDRESS = environment.splitterContractAddress;

const abi = [
  'event LogSplit(address indexed sender, address indexed bob, address indexed carol, uint amount)',
  'event LogWithdrawn(address indexed who, uint amount)',
  'modifier validAddress(address paramAddress)',

  'constructor() public',

  'function function split(address bob, address carol) payable public validAddress(bob) validAddress(carol)',
  'function withdraw() public'
];

// @Injectable()
@Injectable(
    // {providedIn: SplitterModule}
)
export class SplitterContractToken extends Contract {
  constructor(provider: Provider) {
    super(SPLITTER_CONTRACT_ADDRESS, abi, provider.getSigner());
  }

};