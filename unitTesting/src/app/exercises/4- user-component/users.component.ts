import { Component, OnInit } from '@angular/core';

import { UserService }       from './user.service';

export class UsersComponent implements OnInit {
  users: any[];

  constructor(private _service: UserService) {	}

  // 1. User services should be called and users should be setted
  ngOnInit() {
    this._service.getUsers().subscribe(users => {
      this.users = users
    });
  }

  // 1. If user cofirm it should delete it
  // 2. If user won't confirm it won't delete
  // 3. If user cofirm it should delete it and call _service.deleteUser
  // 4. Should not call the server if user cancels
  // 5. If user cofirm and there is an error on the server it undo the changes
  // 6. If user confirm and there is an error it should display an alert
  deleteUser(user) {
    if (confirm("Are you sure you want to delete " + user.name + "?")) {
      var index = this.users.indexOf(user)
      this.users.splice(index, 1);

      this._service.deleteUser(user.id).subscribe(
        null,
        err => {
          alert("Could not delete the user.");
          this.users.splice(index, 0, user);
        });
    }
  }
}
