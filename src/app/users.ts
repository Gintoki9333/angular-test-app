export class User {
  constructor(
    public name: string,
    public email?: any,
    public password?: any,
    public confirmPassword?: any,
    public groups?: any[],
    public userPrms?: any[]
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.groups = groups;
    this.userPrms = [
      { name: 'View Dashboards', value: false },
      { name: 'Edit Dashboards', value: false },
      { name: 'Manage Datasources', value: false },
      { name: 'Manage Users', value: false }
    ];
  }
}

export let users: User[] = [
  new User('John', 'John95@mail.ru', 'qwerty123', 'qwerty123'),
  new User('User', 'user@mail.ru'),
  new User('Admin', 'admin@mail.ru')
];

export function addNewUser(data: User) {
  users.push({
    name: data.name,
    email: data.email,
    password: data.password,
    confirmPassword: data.confirmPassword,
    groups: data.groups,
    userPrms: data.userPrms = [
      { name: 'View Dashboards', value: false },
      { name: 'Edit Dashboards', value: false },
      { name: 'Manage Datasources', value: false },
      { name: 'Manage Users', value: false }
    ]
  });
}

// export function changeUser(user) {
//   Object.assign(
//     users.find(e => e.name === user.name),
//     user
//   );
// }

export function deleteUser(deleteUserName) {
  users = users.filter(e => e.name !== deleteUserName);
  console.log(users);
}

