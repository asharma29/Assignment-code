// code for product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';
@Injectable()
export class UserService {

    constructor(
        private http: HttpClient) { }

    // Create a get http request (get product information in json format)
    getUsers(email: string): Observable<EmailValidator> {
        return this.http.get(`$this.localserver:3000`)
            
    }

    // Create a post http request (post/add product data to server)
    
}