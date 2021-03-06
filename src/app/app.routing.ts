import { Routes,RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { BcNotFoundPageComponent } from './shared/components/bcNotFound/bcNotFoundPage.Component';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', component: BcNotFoundPageComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });