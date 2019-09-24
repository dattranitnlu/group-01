import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { RootObject } from '../models/root-object';
import { ApiService } from './api.service';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  // get all
  list(page: Page): Observable<RootObject<[Customer]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObject<[Customer]>>(`${this.apiService.apiUrl.customers.home}?${queryString}`);
  }
  getByType(id, page: Page): Observable<RootObject<[Customer]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObject<[Customer]>>(`${this.apiService.apiUrl.customers.getByType}/${id}?${queryString}`);
  }
  get(id): Observable<RootObject<Customer>> {
    return this.apiService.get<RootObject<Customer>>(`${this.apiService.apiUrl.customers.home}/${id}`);
  }
  delete(id): Observable<RootObject<Customer>> {
    return this.apiService.delete<RootObject<Customer>>(`${this.apiService.apiUrl.customers.home}/${id}`);
  }
  save(data: Customer): Observable<RootObject<Customer>> {
    if (data.id === 0) {
      return this.apiService.post<RootObject<Customer>>(this.apiService.apiUrl.customers.home, data);
    } else {
      return this.apiService.put<RootObject<Customer>>(`${this.apiService.apiUrl.customers.home}/${data.id}`, data);
    }
  }
}
