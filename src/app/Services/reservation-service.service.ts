import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'https://localhost:7274/api/Reservation';

  constructor(private http: HttpClient) { }

  addReservation(reservation: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, reservation);
  }
}
