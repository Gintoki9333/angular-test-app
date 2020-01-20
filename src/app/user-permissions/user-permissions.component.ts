import { Component, Input} from '@angular/core';
import { User } from '../users';

@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.scss']
})
export class UserPermissionsComponent{
  @Input() currUser: User;

  constructor() {}

  clickCheckbox(name) {
    const u = this.currUser.userPrms.find(e => e.name === name);
    u.value = !u.value;
  }
}
