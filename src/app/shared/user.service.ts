import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/models/User';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    BASE_URL = "http://localhost:3000/user"

    constructor(
        private http: HttpClient
    ) { } 

    getUser(name: string): Observable<User> {
        return this.http.get<User>(this.BASE_URL);
    }

    createUser(user: User) {
        return this.http.post(this.BASE_URL, user, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }
}