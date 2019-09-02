import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private apiService: ApiService) { }
  list(): Observable<Customer> {
    return this.apiService.get<Customer>(this.apiService.apiUrl.customer);
  }

  get(id): Observable<Customer> {
    return this.apiService.get<Customer>(`${this.apiService.apiUrl.customer}/${id}`);
  }
}
