import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-object';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  host = "http://localhost:8081";
  apiUrl = {
    student: `${this.host}/student`,
    userType: `${this.host}/user-type`,
    user: `${this.host}/user`,
    classes: `${this.host}/class`,
    semester: `${this.host}/semester`,
    exam: `${this.host}/exam`,
    answersheet: `${this.host}/answersheet`,
    test: `${this.host}/test`,
    questionType: `${this.host}/questions-type`,
    question: `${this.host}/question`,
    testDetail: `${this.host}/test-detail`,
    option: `${this.host}/option`,
    part: `${this.host}/part`,
    subject: `${this.host}/subject`,


    customer: `${this.host}/subject`,
    customerType: `${this.host}/subject`
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  put<T>(url: string, attribute: T): Observable<RootObject<T>> {
    const httpOption = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.put<RootObject<T>>(url, attribute, httpOption);
  }

  post<T>(url: string, attribute: T): Observable<RootObject<T>> {
    const httpOption = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<RootObject<T>>(url, attribute, httpOption);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
}
