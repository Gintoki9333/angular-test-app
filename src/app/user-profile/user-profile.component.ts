import { Component, OnInit, Input} from '@angular/core';
import {AppUsersService} from '../users.service';
import { FormControl, Validators, FormBuilder} from '@angular/forms';
import { User} from '../users';
import {Group} from '../groups';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public appUsersService: AppUsersService,
              public fb: FormBuilder) {}

  form =  this.fb.group({
  name: [''],
  email: [''],
  password: [''],
  confirmPassword: [''],
  groupMemb: [''],
});

  @Input() currUser: User;
  newUser: User = new User(null, null, null, null, null);
  @Input() currGroup: Group;
  newGroup: Group = new Group(null);

  addUser() {
    if (this.form.valid) {
      console.log('Form: ', this.form);
      const formData = { ...this.form.value };
      console.log('Form Data: ', formData);
      this.appUsersService.addNewUser(formData);
      this.form.reset();
    }
  }

  clear() {
      this.form.reset();
    }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: [null,  Validators.minLength(8)],
      confirmPassword: [null,  Validators.minLength(8)],
      groupMemb: [this.currUser ? this.currUser.groupMemb : this.newUser.groupMemb],
    });
  }
}
