import {groups} from './groups';

export class User {
  constructor(
    public name: string,
    public email?: any,
    public password?: any,
    public confirmPassword?: any,
    public groupMemb?: any[],
    public userPrms?: any[]
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    const newGroups = groups.map(e => Object.assign({value: false}, e));
    this.groupMemb = newGroups;
    this.userPrms = [
      { name: 'View Dashboards', value: false },
      { name: 'Edit Dashboards', value: false },
      { name: 'Manage Datasources', value: false },
      { name: 'Manage Users', value: false }
    ];
  }
}

// export let users: User[] = [
//   new User('John', 'John95@mail.ru', 'qwerty123', 'qwerty123'),
//   new User('User', 'user@mail.ru'),
//   new User('Admin', 'admin@mail.ru')
// ];
//
// export function addNewUser(data: User) {
//   users.push({
//     name: data.name,
//     email: data.email,
//     password: data.password,
//     confirmPassword: data.confirmPassword,
//     groupMemb: data.groupMemb,
//     userPrms: data.userPrms = [
//       { name: 'View Dashboards', value: false },
//       { name: 'Edit Dashboards', value: false },
//       { name: 'Manage Datasources', value: false },
//       { name: 'Manage Users', value: false }
//     ]
//   });
// }
//
// export function deleteUser(deleteUserName) {
//   users = users.filter(e => e.name !== deleteUserName);
//   console.log(users);
// }

