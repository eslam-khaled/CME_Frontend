import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../Services/reservation-service.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  reservation = {
    reservationDate: new Date(),
    roomId: 0,
    customerId: 0,
    numberOfNights: 0,
    totalPrice: 0,
  };

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

  addReservation() {
    this.reservationService.addReservation(this.reservation).subscribe((response) => {
      // Handle the response or perform any necessary actions
    });
  }

}
