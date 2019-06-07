import { Component, OnInit } from '@angular/core';
import { ChatGroup } from 'src/models/ChatGroup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentChatGroup: ChatGroup;

  constructor() { }

  ngOnInit() {
  }

  groupSelected(group: ChatGroup) {
    this.currentChatGroup = group;
  }

}
