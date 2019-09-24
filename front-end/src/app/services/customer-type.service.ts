import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-object';
import { ApiService } from './api.service';
import { CustomerType } from '../models/customer-type';
@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private apiService: ApiService) { }

  // get all
  list(): Observable<RootObject<[CustomerType]>> {
    return this.apiService.get<RootObject<[CustomerType]>>(this.apiService.apiUrl.customerTypes);
  }
  get(id): Observable<RootObject<CustomerType>> {
    return this.apiService.get<RootObject<CustomerType>>(`${this.apiService.apiUrl.customerTypes}/${id}`);
  }
  delete(id): Observable<RootObject<[CustomerType]>> {
    return this.apiService.delete<RootObject<[CustomerType]>>(`${this.apiService.apiUrl.customerTypes}/${id}`);
  }
  save(data: CustomerType): Observable<RootObject<[CustomerType]>> {
    if (data.id === 0) {
      return this.apiService.post<RootObject<[CustomerType]>>(this.apiService.apiUrl.customerTypes, data);
    } else {
      return this.apiService.put<RootObject<[CustomerType]>>(`${this.apiService.apiUrl.customerTypes}/${data.id}`, data);
    }
  }
}
