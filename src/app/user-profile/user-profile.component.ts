import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AppUsersService} from '../users.service';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../users';
import {Group} from '../groups';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnChanges {

  constructor(public appUsersService: AppUsersService,
              public fb: FormBuilder) {}

  form: FormGroup;

  @Input() currUser: User;
  newUser: User = new User(null, null, null, null, null);
  @Input() currGroup: Group;
  newGroup: Group = new Group(null);

  public user: User;

  ngOnChanges(changes: SimpleChanges): void {
    if ('currUser' in changes) {
      this.user = this.currUser || this.newUser;
      this.form = this.fb.group({
        name: [this.user.name, Validators.required],
        email: [this.user.email, Validators.email],
        password: [this.user.password,  Validators.minLength(8)],
        confirmPassword: [this.user.password,  Validators.minLength(8)],
        groupMemb: [this.user.groupMemb],
      });
    }
  }

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
      // this.currUser = null;
      this.user = this.newUser;
    }
}


