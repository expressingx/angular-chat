import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  @Input() users: User[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  
}
