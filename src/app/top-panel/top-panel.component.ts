import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Group, addNewGroup, deleteGroup} from '../groups';
import {User,
  // deleteUser
} from '../users';
import {AppUsersService} from '../users.service';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss']
})
export class TopPanelComponent implements OnInit {

  constructor(public appUsersService: AppUsersService) {}

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
    if (this.currUser && this.currUser.name) {
      this.appUsersService.deleteUser(this.currUser.name);
      this.currUser = null;
    } else if (this.currGroup && this.currGroup.name) {
      deleteGroup(this.currGroup.name);
      this.currGroup = null;
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
