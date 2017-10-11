import { Component,Input, Output,Inject, EventEmitter } from '@angular/core';

@Component({
    selector: 'bc-page-top-bar',
    templateUrl: './bcTopBar.html',
    styleUrls: ['./bcTopBar.scss'],
  })
export class BcTopBarComponent {
  @Output() openMenu = new EventEmitter();
  @Input() appName: any
  constructor(){
    this.appName=this.appName||"ABM"
  }
}