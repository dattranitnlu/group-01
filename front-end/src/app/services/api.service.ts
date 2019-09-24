import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private cookieService: CookieService) {
   }
  baseUrl = 'http://localhost:3000/';
  apiUrl = {
    userTypes: `${this.baseUrl}user-types`,
    users: {
      home: `${this.baseUrl}users`,
      getByType: `${this.baseUrl}users/getByUserType`,
      login: `${this.baseUrl}users/login`
    },
    classes: {
      home: `${this.baseUrl}classes`,
      getByType: `${this.baseUrl}classes/getByUser`,
    },
    students: {
      home: `${this.baseUrl}students`,
      // getByType: `${this.baseUrl}students/getByUser`,
    },

    customerTypes: `${this.baseUrl}customerTypes`,
    customers: {
      home: `${this.baseUrl}customers`,
      getByType: `${this.baseUrl}customers/getByCustomerType`,
    }
  };
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
  put<T>(url: string, data: Object): Observable<T> {
    return this.http.put<T>(url, data);
  }
  post<T>(url: string, data: Object): Observable<T> {
    return this.http.post<T>(url, data);
  }
}
