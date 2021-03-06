export class Group {
  constructor(
    public name: string,
    public effectivePrms?: any[]) {
    this.name = name;
    this.effectivePrms = [
      {name: 'View Dashboards', value: false},
      {name: 'Edit Dashboards', value: false},
      {name: 'Manage Datasources', value: false},
      {name: 'Manage Users', value: false}
    ];
  }
}

export let groups: Group[] = [
  new Group('Admin'),
  new Group('User')
];

export function addNewGroup(data: Group) {
  groups.push({
    name: data.name,
    effectivePrms: data.effectivePrms = [
      {name: 'View Dashboards', value: false},
      {name: 'Edit Dashboards', value: false},
      {name: 'Manage Datasources', value: false},
      {name: 'Manage Users', value: false}
    ]
  });
}

export function deleteGroup(deleteGroupName) {
  deleteGroupName = groups.findIndex(e => e.name === deleteGroupName);
  groups.splice(deleteGroupName, 1);
  console.log(groups);
  console.log(deleteGroupName);
}


