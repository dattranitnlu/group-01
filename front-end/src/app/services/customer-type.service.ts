import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerType } from '../models/customer-type';
import { ApiService } from './api.service';

// import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private apiService: ApiService) { }

  list(): Observable<CustomerType> {
    return this.apiService.get<CustomerType>(this.apiService.apiUrl.customerType);
  }

  get(id): Observable<CustomerType> {
    return this.apiService.get<CustomerType>(`${this.apiService.apiUrl.customerType}/${id}`);
  }
}
