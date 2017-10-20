import {Component, Inject, OnInit, ViewChild,ViewContainerRef} from '@angular/core';
import { MdSidenav, MdDialogConfig, MdDialogRef } from '@angular/material';
import { Model } from './../../models/Model ';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard  implements OnInit{
  title = 'app works!';
  models: Model[] = [];
  selectedModel: Model;
  @ViewChild('sidenav') sidenav: MdSidenav;
  constructor(private vcr: ViewContainerRef,@Inject('modelsService') private modelsService) {
  }

  ngOnInit(){
    this.models = this.modelsService.getAll();
  }

  showDetails(model: Model){
    // 1. set selected models
    this.selectedModel = model;
    // 2. open sidenav
    // 2. open sidenav
    this.sidenav.open();
  }

  // openDialog() {
  //   // dialog config
  //   const config = new MdDialogConfig();
  //   config.viewContainerRef = this.vcr;
  //   // open dialog
  //   const dialog = this.dialog.open(SettingsDialogComponent, config);
  // }

  // addMessage() {
  //   // dialog config
  //   const config = new MdDialogConfig();
  //   config.viewContainerRef = this.vcr;
  //   // open dialog
  //   const dialog:any = this.dialog.open(AddMessageComponent, config);
  //   // pass data to dialog
  //   dialog.selectedModel = this.selectedModel;
  //   console.log(dialog);
  // }

}


// @Component({
//   selector: 'app-settings',
//   template: `
//   <label>Would you like to receive notifications?</label>
//   <md-slide-toggle></md-slide-toggle>
//   `
// })
// export class SettingsDialogComponent{

// }


@Component({
  selector: 'add-message',
  template:`
  <form (submit)="addMessage()">
    <md-input-container>
      <input mdInput placeholder="Message" name="content" [(ngModel)]="content">
    </md-input-container>
    <button md-raised-button color="primary">Add Message</button>
  </form>
  `
})
export class AddMessageComponent {
  content = "";

  constructor(private dialogRef: MdDialogRef<AddMessageComponent>) {
  }

  addMessage() {
    const selectedModel = (<MdDialogRef<AddMessageComponent> & ISelectedModel> this.dialogRef).selectedModel;
    selectedModel.messages.push({
        who: 'Jaime',
        content: this.content
      });
    this.dialogRef.close();
  }
}

interface ISelectedModel {
  selectedModel: Model;
}
