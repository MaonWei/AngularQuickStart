import { Component, ChangeDetectionStrategy } from '@angular/core';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {
  title = 'app';
  color = 'accent';
  checked = false;
  disabled = false;

  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;
}
