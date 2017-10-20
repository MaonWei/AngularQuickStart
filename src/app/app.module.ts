import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// UI
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CustomMaterialModule } from './app.materialModule';

// environment
import { environment } from '../environments/environment';

// components
import { AppComponent } from './app.component';
import { NgcModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

// routing
import { routing } from './app.routing';

// tool
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// db
import { DBModule } from '@ngrx/db';
import { schema } from './config/db';

// guards
import { AuthGuard} from "./core/guards/index";


// reducers
import { reducers ,metaReducers} from './reducers';

// services
import { MyHttpInterceptor } from './core/common/http.interceptor';

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
    StoreModule.forRoot(reducers,{ metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    DBModule.provideDB(schema),   
    PagesModule,
    routing
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
