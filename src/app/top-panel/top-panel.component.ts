import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {addNewGroup, Group, deleteGroup} from '../groups';
import {User, deleteUser} from '../users';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss']
})
export class TopPanelComponent implements OnInit {

  form: FormGroup;
  @Input() currGroup: Group;
  @Input() currUser: User;

  addGroup() {
    if (this.form.valid) {
      console.log('Form: ', this.form);
      const formData = { ...this.form.value };
      console.log('Form Data: ', formData);
      this.form.reset();
      addNewGroup(formData);
    }
  }

  delete() {
    if (this.currUser.name) {
      deleteUser(this.currUser.name);
      console.log(deleteUser(this.currUser));
    } else if (this.currGroup.name) {
      deleteGroup(this.currGroup.name);
      console.log(deleteGroup(this.currGroup));
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('',
        Validators.required
      ),
    });
  }
}
