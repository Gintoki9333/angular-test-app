import {Component, Input} from '@angular/core';
import {User} from '../users';
import {groups} from '../groups';

@Component({
  selector: 'app-group-memberships',
  templateUrl: './group-memberships.component.html',
  styleUrls: ['./group-memberships.component.scss']
})
export class GroupMembershipsComponent {

  newGroups = Object.assign({}, groups);

  @Input() currUser: User;

  clickCheckbox(name) {
    const g = this.currUser.groupMemb.find(e => e.name === name);
    // g.value = !g.value;
  }
}
