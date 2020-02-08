import {Component, Input} from '@angular/core';
import {Group} from '../groups';

@Component({
  selector: 'app-effective-permissions',
  templateUrl: './effective-permissions.component.html',
  styleUrls: ['./effective-permissions.component.scss']
})
export class EffectivePermissionsComponent {

  @Input() currGroup: Group;

  clickCheckbox(name) {
    const g = this.currGroup.effectivePrms.find(e => e.name === name);
    g.value = !g.value;
  }
}
