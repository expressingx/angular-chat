import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../shared/message.service';
import { Message } from 'src/models/Message';
import { ChatGroup } from 'src/models/ChatGroup';
import { GroupService } from '../shared/group.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService,private groupService: GroupService) { }

  messages: Message[];

  @Input()  set  chatGroup(chatGroup: ChatGroup){
    if (!chatGroup || !chatGroup.id){
      return;
    }
    this.groupService.getAllMessages(this.chatGroup.id,new Date()).then((messages)=> this.messages = messages);
  }

  async ngOnInit() {
    
  }


}
