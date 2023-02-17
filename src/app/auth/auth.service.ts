import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  // loggedIn: boolean = false;
  constructor() { }
  isAuthenticated() {
    return this.isLoggedIn;
  }
}
