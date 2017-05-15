import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-competitions',
  templateUrl: './competitions.component.html'
})
export class CompetitionsComponent {

  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.usernameCtrl = fb.control('', [Validators.required, Validators.minLength(3)]);
    this.passwordCtrl = fb.control('', Validators.required);
    this.userForm = fb.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });
  }
  reset() {
    this.usernameCtrl.setValue('');
    this.passwordCtrl.setValue('');
  }
  register() {
    console.log(this.userForm.value);
  }
}

