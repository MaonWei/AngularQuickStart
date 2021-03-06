import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  // {
  //   path: 'register',
  //   loadChildren: 'app/pages/register/register.module#RegisterModule'
  // },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsModule' },
      { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
