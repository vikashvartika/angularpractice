import { Injectable } from '@angular/core';
//import { Login } from 'src/app/interfaces/login';
// import { ILogin } from '../interfaces/login';
import { ILogin } from 'src/app/interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
  }
}
