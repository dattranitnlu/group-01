import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { IUsersManagement, UsersManagement } from '../models/users-management';
import { RootObject } from '../models/root-object';

@Injectable({
  providedIn: 'root'
})
export class UsersManagementService {

  constructor(private apiService: ApiService) {}
  list(): Observable<IUsersManagement> {
    return this.apiService.get<IUsersManagement>(this.apiService.apiUrl.user);
  }

  get(id): Observable<UsersManagement> {
    return this.apiService.get<UsersManagement>(`${this.apiService.apiUrl.user}/${id}`);
  }

  post(user: UsersManagement): Observable<RootObject<UsersManagement>> {
    return this.apiService.post<UsersManagement>(this.apiService.apiUrl.user, user);
  }

  put(id: number, user: UsersManagement):Observable<UsersManagement> {
    return this.apiService.put<UsersManagement>(`${this.apiService.apiUrl.user}/${id}`, user);
  }

  delete(id): Observable<IUsersManagement> {
    return this.apiService.delete<IUsersManagement>(`${this.apiService.apiUrl.user}/${id}`);
  }
}
