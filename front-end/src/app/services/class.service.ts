import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-object';
import { Class } from '../models/class';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private apiService: ApiService) { }
  list(page: Page): Observable<RootObject<[Class]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObject<[Class]>>(`${this.apiService.apiUrl.classes.home}?${queryString}`);
  }

  getByType(id, page: Page): Observable<RootObject<[Class]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObject<[Class]>>(`${this.apiService.apiUrl.classes.getByType}/${id}?${queryString}`);
  }

  get(id): Observable<RootObject<Class>> {
    return this.apiService.get<RootObject<Class>>(`${this.apiService.apiUrl.classes.home}/${id}`);
  }

  post(aClass: Class): Observable<RootObject<Class>> {
    return this.apiService.post<RootObject<Class>>(this.apiService.apiUrl.classes.home, aClass);
  }

  put(id: number, aClass: Class):Observable<RootObject<Class>> {
    return this.apiService.put<RootObject<Class>>(`${this.apiService.apiUrl.classes.home}/${id}`, aClass);
  }

  delete(id): Observable<RootObject<Class>> {
    return this.apiService.delete<RootObject<Class>>(`${this.apiService.apiUrl.classes.home}/${id}`);
  }

  save(item: Class): Observable<RootObject<Class>>  {
    if(item.id === 0) {
      return this.apiService.post<RootObject<Class>>(this.apiService.apiUrl.classes.home, item);
    }
    else {
      return this.apiService.put<RootObject<Class>>(`${this.apiService.apiUrl.classes.home}/${item.id}`, item);
    }
  }
}
