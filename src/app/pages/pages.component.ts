import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as layout from '../actions/layout';

@Component({
  selector: 'pages',
  template: `
  <bc-layout>
  <bc-page-top appName="Mason" (openMenu)="openSidenav()">
  </bc-page-top>
  <md-sidenav-container fxFlex>
  <bc-sidenav [open]="showSidenav$ | async">
      <bc-nav-item (navigate)="closeSidenav()"  routerLink="/" icon="book" hint="dashbord">
      Dashboard
    </bc-nav-item>
    <bc-nav-item (navigate)="closeSidenav()" routerLink="/pages/accounts" icon="search" >
     Accounts
    </bc-nav-item>
    <bc-nav-item (navigate)="closeSidenav()" routerLink="/pages/orders" icon="search" >
    Orders
   </bc-nav-item>
  </bc-sidenav>
  <!-- this flex item takes the rest of the screen in height -->

  <router-outlet></router-outlet>
  </md-sidenav-container>
</bc-layout>
    `,
    styleUrls: ['./pages.scss']
})
export class Pages {
  showSidenav$: Observable<boolean>;
  constructor(private store: Store<fromRoot.State>) {
    this.showSidenav$=this.store.select(fromRoot.getShowSidenav)
  }

  closeSidenav() {
   this.store.dispatch(new layout.CloseSidenavAction());
  }
  openSidenav() {
    this.store.dispatch(new layout.OpenSidenavAction());
  }
}
