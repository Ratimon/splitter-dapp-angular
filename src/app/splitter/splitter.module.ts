import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material';

import { RouterModule, Routes } from '@angular/router';

// import {SplitterDependencyModule} from './splitter.dependency.module'

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers} from './store/reducers';

// services
import * as fromServices from './services';
import {SplitterContractToken} from './services/tokens/splitter-contract-token';


// effects
import {effects} from './store/effects';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.DashboardComponent,
    // canActivate: [fromGuards.ProjectsInitialLoadGuard],
  },
  // {
  //     path: ':id',
  //     // component: fromContainers.SelectPurchaseContractComponent,
  //     // we need to make sure this guard is triggered when we link /projects/id;source=table clicked from email
  //     // canActivate: [fromGuards.ProjectExistsGuard],  
  // }
];

@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    // SplitterDependencyModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('splitter', reducers),
    EffectsModule.forFeature(effects)
  ],
  // providers: fromServices.services,
  providers: [
    ...fromServices.services,
    SplitterContractToken
  ],
  exports: [
    // ...fromContainers.containers,
    // ...fromComponents.components,
  ],
})
export class SplitterModule { }
