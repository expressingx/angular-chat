import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/message.service';
import { Message } from 'src/models/Message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  messages: Message[];

  ngOnInit() {
  }

  getUsers() {
    this.messageService.getMessages()
      .subscribe(messages => this.messages = messages);
  }

}
