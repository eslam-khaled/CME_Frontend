import { Component, OnInit } from '@angular/core';
import { RoomService } from '../Services/room-service.service';
import { RoomDTO } from '../Models/Room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  rooms: RoomDTO[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.getAllRooms();
  }

  getAllRooms() {
    this.roomService.getAllRooms().subscribe((response) => {
      debugger;
      this.rooms = response.pagesList;
    });
  }

}
