import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing }from './pages.routing';
import { NgcModule } from '../shared/shared.module';
import { CustomMaterialModule } from './../app.materialModule';
//import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, NgcModule, routing,CustomMaterialModule],
  declarations: [Pages]
})
export class PagesModule {
}
