import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from 'src/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  currentUser: User;

  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.getUsers();
    this.resetCurrentUser();
  }

  resetCurrentUser() {
    this.currentUser = { id: null, userName: '' };
  }

  selectUser(user) {
    this.selectUser = user;
  }

  cancel(user) {
    this.resetCurrentUser();
  }

  getUsers() {
    this.usersService.getAllUsers()
      .subscribe(users => this.users = users);
  }

  saveItem(user) {
      this.createUser(user);
  }

  createUser(user) {
    this.usersService.createUser(user)
      .subscribe(response => {
        this.getUsers();
        this.resetCurrentUser();
      });
  }
}
