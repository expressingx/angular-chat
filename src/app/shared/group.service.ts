import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from 'src/models/Message';
import { ChatGroup } from 'src/models/ChatGroup';
import { Observable } from 'rxjs';

@Injectable()
export class GroupService {
    
    BASE_MESSAGE_URL = "http://192.168.122.21:3000/message/"
    BASE_GROUP_URL = "http://192.168.122.21:3000/chatGroup/"

    constructor(
        private http: HttpClient
    ) { }

    async getAllMessages(groupId: string, timeStamp: Date) {
        let msg = await this.http.get<Message[]>(this.BASE_MESSAGE_URL).toPromise();

        return msg.filter(m => m.groupId == groupId  && new Date(m.timeStamp) > timeStamp);
    }

    getAllGroups(): Observable<ChatGroup[]> {
        return this.http.get<ChatGroup[]>(this.BASE_GROUP_URL);
    }

    createGroup(group: ChatGroup) {
        return this.http.post(this.BASE_GROUP_URL, group, {
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            })
        })
    }
}