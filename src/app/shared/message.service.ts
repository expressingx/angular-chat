import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from 'src/models/Message';

@Injectable()
export class MessageService {

    BASE_URL = "http://localhost:3000/message/"

    constructor(
        private http: HttpClient
    ) { }

    postMessage(message: Message) {
        return this.http.post(this.BASE_URL, message, {
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            })
        })
    }
}