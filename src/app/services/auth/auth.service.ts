import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwthelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated() {

    const token = localStorage.getItem('arkus-token');
    if (!token) {
      return false;
    }
    const isExpired = jwthelper.isTokenExpired(token)
    return !isExpired


  }


}
