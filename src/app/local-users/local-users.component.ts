import {Component, Output, EventEmitter} from '@angular/core';
import {User} from '../users';
import {AppUsersService} from '../users.service';

@Component({
  selector: 'app-local-users',
  templateUrl: './local-users.component.html',
  styleUrls: ['./local-users.component.scss']
})
export class LocalUsersComponent {

  constructor(public appUsersService: AppUsersService) {}

  users = this.appUsersService.users;
  @Output() onSelectedUser = new EventEmitter();
  selectedUser: User;

  setSelectedUser(user) {
    console.log('get user', user);
    this.selectedUser = user;
    this.onSelectedUser.emit(this.selectedUser);
  }
}
