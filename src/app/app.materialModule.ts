import { NgModule } from '@angular/core';
import { MatToolbarModule,MatInputModule,MatSidenavModule,MatButtonModule,MatCardModule,MatIconModule,MatCheckboxModule,MatSlideToggleModule,MatTabsModule,MatMenuModule,MatListModule,MatGridListModule} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule,MatInputModule,MatSidenavModule,MatButtonModule,MatCardModule,MatIconModule,MatCheckboxModule,MatSlideToggleModule,MatTabsModule,MatMenuModule,MatListModule,MatGridListModule],
  exports: [MatToolbarModule,MatInputModule,MatSidenavModule,MatButtonModule,MatCardModule,MatIconModule,MatCheckboxModule,MatSlideToggleModule,MatTabsModule,MatMenuModule,MatListModule,MatGridListModule],
})
export class CustomMaterialModule { }