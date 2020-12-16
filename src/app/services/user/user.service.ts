import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient
  ) { }

  loginUser(credentials) {
    return this.http.post(environment.API_URL + 'users/login', credentials, { observe: 'response' });
  }

  getUsers() {
    return this.http.get(environment.API_URL + 'users');
  }
  getUserById(_id) {
    return this.http.get(environment.API_URL + 'users/' + _id)
  }

  updateTraining(data) {
    return this.http.post(environment.API_URL + 'users/update', data)
  }
  getPublicData(): Observable<any> {
    return this.http.get(environment.API_URL + 'publicdata');
  }

}