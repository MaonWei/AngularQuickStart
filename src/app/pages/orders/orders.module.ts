import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { FormsModule } from '@angular/forms';
//import { AppTranslationModule } from '../../app.translation.module';
import { CustomMaterialModule } from './../../app.materialModule';
import { NgcModule } from '../../shared/shared.module';

import { Orders } from './orders.component';
import { OrderListComponent } from './components/orderList';
import { OrderEditComponent } from './components/orderEdit';
import { routing } from './orders.routing';




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
    Orders,
    OrderListComponent,
    OrderEditComponent
  ],
  providers: [   ]
})
export class  OrdersModule {}
