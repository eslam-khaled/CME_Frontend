import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'https://localhost:7274/api/Customer';

  constructor(private http: HttpClient) { }

  addCustomer(customer: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, customer);
  }
}
