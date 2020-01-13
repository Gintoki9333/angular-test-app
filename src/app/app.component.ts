import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {User} from './users';
import {Group} from './groups';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tz';

  selectedUser: User;
  selectedGroup: Group;

  handlerUser(userValue: User) {
    this.selectedUser = userValue;
    console.log('selected user', userValue);
  }

  handlerGroup(groupValue: Group) {
    this.selectedGroup = groupValue;
    console.log('selected group', groupValue);
  }
}
