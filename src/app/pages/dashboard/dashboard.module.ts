import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { FormsModule } from '@angular/forms';
//import { AppTranslationModule } from '../../app.translation.module';
import { CustomMaterialModule } from './../../app.materialModule';
import { NgcModule } from '../../shared/shared.module';

import { Dashboard } from './dashboard.component';
import { routing } from './dashboard.routing';
import { ModelsService } from './../../services/models.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule,
   // AppTranslationModule,
    NgcModule,
    routing
  ],
  declarations: [
    Dashboard
  ],
  providers: [
    {provide: 'modelsService', useClass: ModelsService},
  ]
})
export class DashboardModule {}
