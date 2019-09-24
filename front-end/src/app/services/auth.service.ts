import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  constructor(private router: Router, private cookieService: CookieService) { }
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', value.toString());
  }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  clear() {
    localStorage.clear();
    this.cookieService.delete('userInfo');
    this.cookieService.delete('token');
    this.router.navigate(['/']);
  }
}
