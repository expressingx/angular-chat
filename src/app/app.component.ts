import { Component } from '@angular/core';
import { UserService } from './shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor(
    private user: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.user.currentUser.userName == '') {
      this.router.navigate(['login']);
    }
  }
}