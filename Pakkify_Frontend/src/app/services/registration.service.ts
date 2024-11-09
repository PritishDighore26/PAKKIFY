import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    //   private registerUrl = environment.apiUrl + '/api/user';

    //   register(userData: any): Observable<any> {
    //     return this.http.post(this.registerUrl, userData);
    //   }

    constructor(private http: HttpClient) { }

    //   getData() {
    //     return this.http.get(${this.register}/register);
    //   }
    //   createData(data: any) {
    //     return this.http.post(${this.register}/register);
    //   }

    //   private baseUrl = environment.apiUrl;

    //   constructor(private http: HttpClient) {}

    createData(user: User): Observable<any> {
        return this.http.post(http://localhost:8080/api/user/register,user);
  }
}