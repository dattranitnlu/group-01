import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-object';
import { User } from '../models/user';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apiService: ApiService) { }

  login(username: string, password: string): Observable<RootObject<Login>> {
    const data = {
      username: username,
      password: password,
    };
    return this.apiService.post<RootObject<Login>>(this.apiService.apiUrl.users.login, data);
  }

  list(page: Page): Observable<RootObject<[User]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObject<[User]>>(`${this.apiService.apiUrl.users.home}?${queryString}`);
  }

  getByType(id, page: Page): Observable<RootObject<[User]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObject<[User]>>(`${this.apiService.apiUrl.users.getByType}/${id}?${queryString}`);
  }

  get(id): Observable<RootObject<User>> {
    return this.apiService.get<RootObject<User>>(`${this.apiService.apiUrl.users.home}/${id}`);
  }

  delete(id): Observable<RootObject<User>> {
    return this.apiService.delete<RootObject<User>>(`${this.apiService.apiUrl.users.home}/${id}`);
  }

  save(user: User): Observable<RootObject<User>>  {
    if(user.id === 0) {
      return this.apiService.post<RootObject<User>>(this.apiService.apiUrl.users.home, user);
    }
    else {
      return this.apiService.put<RootObject<User>>(`${this.apiService.apiUrl.users.home}/${user.id}`, user);
    }
  }
}
