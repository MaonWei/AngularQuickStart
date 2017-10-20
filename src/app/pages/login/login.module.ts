import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from './../../app.materialModule';
import { LoginComponent  } from './login.component';
import { routing } from './login.routing';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    routing
  ],
  declarations: [
    LoginComponent
  ] ,
   providers: [  ]
})
export class LoginModule {}
