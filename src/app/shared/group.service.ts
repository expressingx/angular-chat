import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Message } from 'src/models/Message';
import { ChatGroup } from 'src/models/ChatGroup';
import { Observable } from 'rxjs';

@Injectable()
export class GroupService {
    
    BASE_MESSAGE_URL = "http://localhost:3000/message/"
    BASE_GROUP_URL = "http://localhost:3000/chatGroup/"

    constructor(
        private http: HttpClient
    ) { }

    async getAllMessages(groupId: string) {
        let msg = await this.http.get<Message[]>(this.BASE_MESSAGE_URL).toPromise();

        return msg.filter(m => m.groupId == groupId);
    }

    getAllGroups(): Observable<ChatGroup[]> {
        return this.http.get<ChatGroup[]>(this.BASE_GROUP_URL);
    }
}