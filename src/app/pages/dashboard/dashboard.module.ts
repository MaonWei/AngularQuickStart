import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { FormsModule } from '@angular/forms';
//import { AppTranslationModule } from '../../app.translation.module';
import { NgcModule } from '../../shared/shared.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
   // AppTranslationModule,
   NgcModule,
    routing
  ],
  declarations: [ 
    Dashboard
  ],
  providers: [  
  ]
})
export class DashboardModule {}
