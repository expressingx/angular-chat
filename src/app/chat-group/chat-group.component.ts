import { Component, OnInit } from '@angular/core';
import { ChatGroup } from 'src/models/ChatGroup';
import { GroupService } from '../shared/group.service';

@Component({
  selector: 'app-chat-group',
  templateUrl: './chat-group.component.html',
  styleUrls: ['./chat-group.component.css']
})
export class ChatGroupComponent implements OnInit {

  public chatGroups: ChatGroup[];
  public currentGroup: ChatGroup;

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.currentGroup = {
      id: null,
      name: ''
    };
  }

  loadChatGroups() {
    this.groupService.getAllGroups().subscribe(
      (groups: ChatGroup[]) => this.chatGroups = groups
    );
  }

  selectGroup(group: ChatGroup) {
    this.currentGroup = group;
  }

  chatGroupSaved(group: ChatGroup) {
    if (group.id) {
      //save
    } else {
      this.groupService.createGroup(group).subscribe(
        () => this.loadChatGroups()
      );
    }
  }
}
