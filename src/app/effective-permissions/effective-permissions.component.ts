import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../groups';

@Component({
  selector: 'app-effective-permissions',
  templateUrl: './effective-permissions.component.html',
  styleUrls: ['./effective-permissions.component.scss']
})
export class EffectivePermissionsComponent implements OnInit {

  @Input() currGroup: Group;

  constructor() {}

  clickCheckbox(name) {
    const g = this.currGroup.effectivePrms.find(e => e.name === name);
    g.value = !g.value;
  }

  ngOnInit() {}
}
