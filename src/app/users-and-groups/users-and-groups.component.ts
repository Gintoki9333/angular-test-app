import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {users, User} from "../users";
import {Group, groups} from '../groups';

@Component({
  selector: "app-users-and-groups",
  templateUrl: "./users-and-groups.component.html",
  styleUrls: ["./users-and-groups.component.scss"]
})
export class UsersAndGroupsComponent implements OnInit {

  users = users;
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

  setSelectedGroup(group){
    this.selectedGroup = group;
    this.onSelectedGroup.emit(this.selectedGroup);
  }

  constructor() {}

  ngOnInit() {}
}
