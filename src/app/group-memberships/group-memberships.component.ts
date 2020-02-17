import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {User} from '../users';

@Component({
  selector: 'app-group-memberships',
  templateUrl: './group-memberships.component.html',
  styleUrls: ['./group-memberships.component.scss']
})
export class GroupMembershipsComponent implements OnChanges {

  @Input() currUser: User;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('groupMemb', this.currUser.groupMemb);
  }

  clickCheckbox(name) {
    const g = this.currUser.groupMemb.find(e => e.name === name);
    g.value = !g.value;
  }
}
