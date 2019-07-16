import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//     {
//       path: '',
//       // component: fromContainers.PurchaseContractCollectionComponent,
//       // canActivate: [fromGuards.ProjectsInitialLoadGuard],
//     },
//     {
//         path: 'new',
//         component: fromContainers.NewPurchaseContractComponent,
//     },
//     {
//         path: ':id',
//         // component: fromContainers.SelectPurchaseContractComponent,
//         // we need to make sure this guard is triggered when we link /projects/id;source=table clicked from email
//         // canActivate: [fromGuards.ProjectExistsGuard],  
//     }

//   ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SplitterRoutingModule { }
