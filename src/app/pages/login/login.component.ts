import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Authenticate } from './../../models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   
    @Input()
    set pending(isPending: boolean) {
      if (isPending) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    }

    @Input() errorMessage: string | null;

    @Output() submitted = new EventEmitter<Authenticate>();
    constructor() { }
    ngOnInit() {}

    form: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
      });

      submit() {
        if (this.form.valid) {
          this.submitted.emit(this.form.value);
        }
      }
}