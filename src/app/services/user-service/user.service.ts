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
  getUserById(_id) {
    return this.http.get('http://localhost:3000/users/' + _id)
  }

  updateTraining(data) {
    return this.http.post('http://localhost:3000/users/update', data)

  }

}