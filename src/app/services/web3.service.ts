import { Injectable } from '@angular/core';

import Web3 from 'web3';
import SplitterArtifact from '../../../build/contracts/Splitter.json';


// @Injectable({
//   // providedIn: 'root'
// })
@Injectable()
export class Web3Service {

  private accounts;
  private web3;
  private eventFactory;
  public ready;

  constructor() { }
}
