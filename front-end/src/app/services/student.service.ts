import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Page } from '../models/page';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-object';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private apiService: ApiService) { }
  list(page: Page): Observable<RootObject<[Student]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObject<[Student]>>(`${this.apiService.apiUrl.students.home}?${queryString}`);
  }

  get(id): Observable<RootObject<Student>> {
    return this.apiService.get<RootObject<Student>>(`${this.apiService.apiUrl.students.home}/${id}`);
  }

  post(data: Student): Observable<RootObject<Student>> {
    return this.apiService.post<RootObject<Student>>(this.apiService.apiUrl.students.home, data);
  }

  put(id: number, data: Student):Observable<RootObject<Student>> {
    return this.apiService.put<RootObject<Student>>(`${this.apiService.apiUrl.students.home}/${id}`, data);
  }

  delete(id): Observable<RootObject<Student>> {
    return this.apiService.delete<RootObject<Student>>(`${this.apiService.apiUrl.students.home}/${id}`);
  }

  save(data: Student): Observable<RootObject<Student>>  {
    if(data.id === 0) {
      return this.apiService.post<RootObject<Student>>(this.apiService.apiUrl.students.home, data);
    }
    else {
      return this.apiService.put<RootObject<Student>>(`${this.apiService.apiUrl.students.home}/${data.id}`, data);
    }
  }
}
