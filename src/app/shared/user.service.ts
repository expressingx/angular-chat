import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/models/User';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {

    BASE_URL = "http://192.168.122.21:3000/user/"

    currentUser: User = {
        id: '',
        userName: ''
    };

    constructor(
        private http: HttpClient
    ) { } 

    getUser(name: string): Observable<User> {
        return this.http.get<User>(this.BASE_URL);
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.BASE_URL);
    }

    createUser() {
        this.currentUser.id = uuid();

        return this.http.post(this.BASE_URL, JSON.stringify(this.currentUser), {
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            })
        }).toPromise();
    }
}