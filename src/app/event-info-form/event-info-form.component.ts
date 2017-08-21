import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation';

@Component({
  selector: 'event-info-form',
  templateUrl: './event-info-form.component.html',
  styleUrls: ['./event-info-form.component.scss']
})
export class EventInfoFormComponent implements OnInit {

  reservation: Reservation;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.getCurrentReservation()
  }

  getCurrentReservation(): void {
    this.reservation = this.reservationService.getCurrentReservation()
  }

  setReservation(reservation): void {
    this.reservationService.setReservation(reservation);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.reservation); }

}
