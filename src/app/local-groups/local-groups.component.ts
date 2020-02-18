import {Component, Output, EventEmitter} from '@angular/core';
import {Group, groups} from '../groups';

@Component({
  selector: 'app-local-groups',
  templateUrl: './local-groups.component.html',
  styleUrls: ['./local-groups.component.scss']
})
export class LocalGroupsComponent{

  groups = groups;
  selectedGroup: Group;
  @Output() onSelectedGroup = new EventEmitter();

  setSelectedGroup(group) {
    console.log('get group', group);
    this.selectedGroup = group;
    this.onSelectedGroup.emit(this.selectedGroup);
  }
}
