import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitterRoutingModule } from './splitter-routing.module';

import { Observable, from, of, zip } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { ethers, Contract, utils } from 'ethers';

// services
import * as fromServices from './services';

@NgModule({
  declarations: [
    // ...fromContainers.containers,
    // ...fromComponents.components
  ],
  imports: [
    CommonModule,
    SplitterRoutingModule,
    // MaterialModule
  ],
  providers: fromServices.services,
  exports: [
    // ...fromContainers.containers,
    // ...fromComponents.components,
  ],
})
export class SplitterModule { }
