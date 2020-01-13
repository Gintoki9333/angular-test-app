import {Component, Input, OnInit} from '@angular/core';
import {groups} from '../groups';

@Component({
  selector: 'app-group-memberships',
  templateUrl: './group-memberships.component.html',
  styleUrls: ['./group-memberships.component.scss']
})
export class GroupMembershipsComponent implements OnInit {

  @Input() groups = groups;

  constructor() {}

  ngOnInit() {
  }

}
