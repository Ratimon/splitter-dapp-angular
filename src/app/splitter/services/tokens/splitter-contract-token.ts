import { Injectable } from '@angular/core';
import { Contract } from 'ethers';
import { Provider } from '../../../app/services/tokens/web3-token';
import { environment } from '../../../../environments/environment'

// import {SplitterDependencyModule} from '../../splitter.dependency.module'

const SPLITTER_CONTRACT_ADDRESS = environment.splitterContractAddress;

const abi = [
  "event LogSplit(address indexed sender, address indexed bob, address indexed carol, uint amount)",
  "event LogWithdrawn(address indexed who, uint amount)",
  "function split(address bob, address carol)",
  "function withdraw()",
  "function balances(address arg1) view public returns (string)"
];

// @Injectable()
@Injectable(
    // {providedIn: SplitterDependencyModule}
)
export class SplitterContractToken extends Contract {
  constructor(provider: Provider) {
    super(SPLITTER_CONTRACT_ADDRESS, abi, provider.getSigner());
  }

};