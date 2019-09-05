import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { IClassesManagement, ClassesManagement } from '../models/classes-management';
import { RootObject } from '../models/root-object';

@Injectable({
  providedIn: 'root'
})
export class ClassesManagementService {

  constructor(private apiService: ApiService) { }
  list(): Observable<IClassesManagement> {
    return this.apiService.get<IClassesManagement>(this.apiService.apiUrl.classes);
  }

  get(id): Observable<ClassesManagement> {
    return this.apiService.get<ClassesManagement>(`${this.apiService.apiUrl.classes}/${id}`);
  }

  post(aClass: ClassesManagement): Observable<RootObject<ClassesManagement>> {
    return this.apiService.post<ClassesManagement>(this.apiService.apiUrl.classes, aClass);
  }

  put(id: number, aClass: ClassesManagement):Observable<RootObject<ClassesManagement>> {
    return this.apiService.put<ClassesManagement>(`${this.apiService.apiUrl.classes}/${id}`, aClass);
  }

  delete(id): Observable<IClassesManagement> {
    return this.apiService.delete<IClassesManagement>(`${this.apiService.apiUrl.classes}/${id}`);
  }
}
