import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

//UI
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CustomMaterialModule } from './app.materialModule';

//environment
import { environment } from '../environments/environment';

// components
import { AppComponent } from './app.component';
import { NgcModule } from './shared/shared.module';

// routing
import { routing } from './app.routing';

//tool
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//db
import { DBModule } from '@ngrx/db';
import { schema } from './config/db';

// guards
import { AuthenticatedGuard} from "./shared/authenticated.guard";

// reducers
//import { reducer } from "./app.reducers";

// services


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,  
    NgbModule.forRoot(), 
    FlexLayoutModule,
    FormsModule,
    NgcModule.forRoot(),
    CustomMaterialModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    DBModule.provideDB(schema),   
    
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
