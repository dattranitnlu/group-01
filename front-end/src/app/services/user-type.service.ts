import { Injectable } from '@angular/core';
import { Page } from '../models/page';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-object';
import { UserType } from '../models/user-type';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  constructor(private apiService: ApiService) { }

  list(page: Page): Observable<RootObject<[UserType]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObject<[UserType]>>(`${this.apiService.apiUrl.userTypes}?${queryString}`);
  }

  get(id): Observable<RootObject<UserType>> {
    return this.apiService.get<RootObject<UserType>>(`${this.apiService.apiUrl.userTypes}/${id}`);
  }

  delete(id): Observable<RootObject<UserType>> {
    return this.apiService.delete<RootObject<UserType>>(`${this.apiService.apiUrl.userTypes}/${id}`);
  }

  save(data: UserType): Observable<RootObject<UserType>> {
    if (data.id === 0) {
      return this.apiService.post<RootObject<UserType>>(this.apiService.apiUrl.userTypes, data);
    } else {
      return this.apiService.put<RootObject<UserType>>(`${this.apiService.apiUrl.userTypes}/${data.id}`, data);
    }
  }
}
