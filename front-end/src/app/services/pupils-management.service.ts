import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { IPupilsManagement, PupilsManagement } from '../models/pupils-management';
import { RootObject } from '../models/root-object';

@Injectable({
  providedIn: 'root'
})
export class PupilsManagementService {

  constructor(private apiService: ApiService) { }

  list(): Observable<IPupilsManagement> {
    return this.apiService.get<IPupilsManagement>(this.apiService.apiUrl.student);
  }

  get(id): Observable<PupilsManagement> {
    return this.apiService.get<PupilsManagement>(`${this.apiService.apiUrl.student}/${id}`);
  }

  post(user: PupilsManagement): Observable<RootObject<PupilsManagement>> {
    return this.apiService.post<PupilsManagement>(this.apiService.apiUrl.student, user);
  }

  put(id: number, user: PupilsManagement): Observable<RootObject<PupilsManagement>> {
    return this.apiService.put<PupilsManagement>(`${this.apiService.apiUrl.student}/${id}`, user);
  }

  delete(id): Observable<IPupilsManagement> {
    return this.apiService.delete<IPupilsManagement>(`${this.apiService.apiUrl.student}/${id}`);
  }
}
