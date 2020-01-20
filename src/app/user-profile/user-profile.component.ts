import { Component, OnInit, Input} from '@angular/core';
// import {addNewUser} from '../users';
import {AppUsersService} from '../users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User} from '../users';
import { Group } from '../groups';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public appUsersService: AppUsersService) {}

  form: FormGroup;

  @Input() currUser: User;
  newUser: User = new User(null, null, null, null, null);
  @Input() currGroup: Group;
  newGroup: Group = new Group(null);


  addUser() {
    if (this.form.valid) {
      console.log('Form: ', this.form);
      const formData = { ...this.form.value };
      console.log('Form Data: ', formData);
      if (!this.currUser) {
        this.appUsersService.addNewUser(formData);
      }
    }
  }

  clear() {
      this.form.reset();
    }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('',
        Validators.required
      ),
      email: new FormControl('',
        Validators.email),
      password: new FormControl(null,
        Validators.minLength(8),
      ),
      confirmPassword: new FormControl(null,
        Validators.minLength(8)),
    });
  }
}
