import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/models/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  originalName: string;
  selectedUser: User;
  @Output() saved = new EventEmitter();

  @Input() set user(value: User){
    if (value) { this.originalName = value.userName; }
    this.selectedUser = Object.assign({}, value);
  }
}
