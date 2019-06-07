import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatGroup } from 'src/models/ChatGroup';
import { GroupService } from 'src/app/shared/group.service';

@Component({
  selector: 'app-chat-edit',
  templateUrl: './chat-edit.component.html',
  styleUrls: ['./chat-edit.component.css']
})
export class ChatEditComponent implements OnInit {
  @Input() public chatGroup: ChatGroup;
  @Output() public saved: EventEmitter<ChatGroup> = new EventEmitter<ChatGroup>();

  constructor(private chatGroupService: GroupService) { }

  ngOnInit() {
  }

  public save() {
    this.saved.emit(this.chatGroup);
  }

}
