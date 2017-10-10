import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bc-nav-item',
    templateUrl: './bcNavItem.html',
    styleUrls: ['./bcNavItem.scss'],
  })
export class BcNavItemComponent {
  @Input() icon = '';
  @Input() hint = '';
  @Input() routerLink: string | any[] = '/';
  @Output() navigate = new EventEmitter();
}