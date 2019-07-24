import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material';


import { RouterModule, Routes } from '@angular/router';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

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
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    // StoreModule.forFeature('splitter', reducers),
    // EffectsModule.forFeature(effects)
  ],
  exports: [
    RouterModule,
    ...fromContainers.containers,
    ...fromComponents.components
  ]
})
export class SplitterRoutingModule { }
