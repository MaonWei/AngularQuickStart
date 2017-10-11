import { Component } from '@angular/core';
import { Routes } from '@angular/router';


@Component({
  selector: 'pages',
  template: `
  <bc-layout>
  <bc-sidenav [open]="showSidenav$ | async">  
  <bc-nav-item (navigate)="closeSidenav()" *ngIf="loggedIn$ | async" routerLink="/" icon="book" hint="View your book collection">
  My Collection
</bc-nav-item>
<bc-nav-item (navigate)="closeSidenav()" *ngIf="loggedIn$ | async" routerLink="/books/find" icon="search" hint="Find your next book!">
  Browse Books
</bc-nav-item>
<bc-nav-item (navigate)="closeSidenav()" *ngIf="!(loggedIn$ | async)">
  Sign In
</bc-nav-item>
<bc-nav-item (navigate)="logout()" *ngIf="loggedIn$ | async">
  Sign Out
</bc-nav-item>
  </bc-sidenav>
  <bc-page-top appName="Mason" (openMenu)="openSidenav()">    
  </bc-page-top>
  <router-outlet></router-outlet>  
</bc-layout>   
    
    `
})
export class Pages {

  constructor() {
  }

  ngOnInit() {
    
  }
}
