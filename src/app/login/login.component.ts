import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
  

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    loginClick() {
        this.userService.getAllUsers().subscribe(u => {
            let exist = u.find(user => user.userName == this.userService.currentUser.userName);
            if (exist) {
                this.userService.currentUser = exist;
            } else {
                this.userService.createUser();
            }
            this.router.navigate(['']);
        })
    }
}