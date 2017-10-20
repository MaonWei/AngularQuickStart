import { Injectable } from '@angular/core';
import {  HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';


@Injectable()
export class AuthenticationService {
     tokenEndPointUrl: string;

    constructor(private http: HttpClient) {
    }
    // updateToken(): Observable<boolean> {
    //     const body: string = 'refresh_token=' + this.refreshToken + '&grant_type=refresh_token'; 
    //     return this.http.post(this.tokenEndPointUrl, body);
    // }
}