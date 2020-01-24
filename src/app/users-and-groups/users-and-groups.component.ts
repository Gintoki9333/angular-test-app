import {Component, Output, EventEmitter} from '@angular/core';
import {User,
  // users
} from '../users';
import {Group, groups} from '../groups';
import {AppUsersService} from '../users.service';

@Component({
  selector: 'app-users-and-groups',
  templateUrl: './users-and-groups.component.html',
  styleUrls: ['./users-and-groups.component.scss']
})
export class UsersAndGroupsComponent {

  constructor(public appUsersService: AppUsersService) {}

  users = this.appUsersService.users;
  groups = groups;
  @Output() onSelectedUser = new EventEmitter();
  selectedUser: User;
  @Output() onSelectedGroup = new EventEmitter();
  selectedGroup: Group;

  setSelectedUser(user) {
    console.log('get user', user);
    this.selectedUser = user;
    this.onSelectedUser.emit(this.selectedUser);
  }

  setSelectedGroup(group) {
    console.log('get group', group);
    this.selectedGroup = group;
    this.onSelectedGroup.emit(this.selectedGroup);
  }
}
