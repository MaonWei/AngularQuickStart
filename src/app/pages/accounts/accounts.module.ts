import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { FormsModule } from '@angular/forms';
//import { AppTranslationModule } from '../../app.translation.module';
import { CustomMaterialModule } from './../../app.materialModule';
import { NgcModule } from '../../shared/shared.module';

import { AccountsComponent } from './accounts.component';
import { routing }       from './accounts.routing';



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
    AccountsComponent
  ],
  providers: [  
  ]
})
export class  AccountsModule {}
