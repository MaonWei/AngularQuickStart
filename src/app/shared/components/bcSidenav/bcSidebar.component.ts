import { Component, Input } from '@angular/core';


@Component({
    selector: 'bc-sidenav',
    templateUrl: './bcSidebar.html',
    styleUrls: ['./bcSidebar.scss'],
  
  })

export class BcSidenavComponent {
  @Input() open = false;
}