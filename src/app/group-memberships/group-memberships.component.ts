import {Component, Input} from '@angular/core';
import {User} from '../users';

@Component({
  selector: 'app-group-memberships',
  templateUrl: './group-memberships.component.html',
  styleUrls: ['./group-memberships.component.scss']
})
export class GroupMembershipsComponent {

  @Input() currUser = User;

  // clickCheckbox(name) {
  //   const g = this.currUser.groupMemb.find<User>(e => e.name === name);
  //   g.value = !g.value;
  // }

}
