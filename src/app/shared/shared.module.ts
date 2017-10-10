import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CustomMaterialModule } from './../app.materialModule';

import { 
    BcLayoutComponent,
    BcNavItemComponent,
    BcNotFoundPageComponent,
    BcPageTopComponent,
    BcSidenavComponent
    
  } from './components';


  const NGC_COMPONENTS = [
    BcLayoutComponent,
    BcNavItemComponent,
    BcNotFoundPageComponent,
    BcPageTopComponent,
    BcSidenavComponent
  ];

  @NgModule({
    declarations: [   
      ...NGC_COMPONENTS
    ],
    imports: [    
      RouterModule,
      CustomMaterialModule
    ],
    exports: [     
      ...NGC_COMPONENTS
    ]
  })

  export class NgcModule {
    static forRoot(): ModuleWithProviders {
      return <ModuleWithProviders> {
        ngModule: NgcModule       
      };
    }
  }
  