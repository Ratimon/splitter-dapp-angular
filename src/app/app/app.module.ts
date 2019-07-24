import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './containers/app/app.component';
import * as fromComponents from './components';

// services
import * as fromServices from './services';

// store
import * as fromRootStore from './store';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS, metaReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    fromComponents.components
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),

    StoreRouterConnectingModule.forRoot(

    ),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    EffectsModule.forRoot(fromRootStore.effects),

  ],
  providers: fromServices.services,
  bootstrap: [AppComponent]
})
export class AppModule { }
