import {Injectable} from '@angular/core';
import {User} from './users';

@Injectable({
  providedIn: 'root'
})

export class AppUsersService {

    public users: User[] = [
    new User('John', 'John95@mail.ru', 'qwerty123', 'qwerty123'),
    new User('User', 'user@mail.ru'),
    new User('Admin', 'admin@mail.ru')
  ];

    public addNewUser(data: User) {
    this.users.push({
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      groupMemb: data.groupMemb,
      userPrms: data.userPrms = [
        {name: 'View Dashboards', value: false},
        {name: 'Edit Dashboards', value: false},
        {name: 'Manage Datasources', value: false},
        {name: 'Manage Users', value: false}
      ]
    });
  }

    public deleteUser(deleteUserName) {
    this.users = this.users.filter(e => e.name !== deleteUserName);
    console.log(this.users);
  }

}
