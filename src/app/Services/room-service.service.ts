import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomDTO } from '../Models/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private baseUrl = 'https://localhost:7274/api/Room';

  constructor(private http: HttpClient) { }

  getAllRooms(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetAll`);
  }

  addRoom(room: RoomDTO): Observable<any> {
    return this.http.post<any>(this.baseUrl, room);
  }
}
