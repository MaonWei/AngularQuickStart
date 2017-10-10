import { NgModule } from '@angular/core';
import { MatToolbarModule,MatInputModule,MatSidenavModule,MatButtonModule,MatCardModule,MatIconModule,MatCheckboxModule,MatSlideToggleModule,MatTabsModule,MatMenuModule} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule,MatInputModule,MatSidenavModule,MatButtonModule,MatCardModule,MatIconModule,MatCheckboxModule,MatSlideToggleModule,MatTabsModule,MatMenuModule],
  exports: [MatToolbarModule,MatInputModule,MatSidenavModule,MatButtonModule,MatCardModule,MatIconModule,MatCheckboxModule,MatSlideToggleModule,MatTabsModule,MatMenuModule],
})
export class CustomMaterialModule { }