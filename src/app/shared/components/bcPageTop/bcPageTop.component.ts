import { Component,Input, Output,Inject, EventEmitter } from '@angular/core';

@Component({
    selector: 'bc-page-top',
    templateUrl: './bcPageTop.html',
    styleUrls: ['./bcPageTop.scss'],
  })
export class BcPageTopComponent {
  @Output() openMenu = new EventEmitter();
  @Input() appName: any
  constructor(){
    this.appName=this.appName||"ABM"
  }
}