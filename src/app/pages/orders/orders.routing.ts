
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { Orders } from './orders.component';
import { OrderListComponent } from './components/orderList';
import { OrderEditComponent } from './components/orderEdit';

// noinspection TypeScriptValidateTypes

export const routes: Routes = [
  {
    path: '',
    component: Orders,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: OrderListComponent },
      { path: 'edit', component: OrderEditComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
