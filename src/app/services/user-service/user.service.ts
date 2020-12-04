import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get('http://localhost:3000/users');
  }

}