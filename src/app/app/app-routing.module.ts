import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as guards from './guards/eth-init.guard';
import * as fromComponents from './components/index';


const routes: Routes = [
    {
      path: '',
      redirectTo: '/splitter',
      pathMatch: 'full'
    },
    {
      path: 'splitter',
      // here we use the TypeScript Dynamic Imports in Angular 8
      loadChildren: () => import('../splitter/splitter-routing.module').then(mod => mod.SplitterRoutingModule),
      canActivate: [guards.EthInitGuard],
    },
    { path: '**', component: fromComponents.NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
