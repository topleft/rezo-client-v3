import { Component, OnInit } from '@angular/core';
import { VenueTileComponent } from '../venue-tile/venue-tile.component';
import { ReservationService } from '../reservation.service';
import { Venue } from '../venue';

@Component({
  selector: 'app-venue-choice',
  templateUrl: './venue-choice.component.html',
  styleUrls: ['./venue-choice.component.scss'],
  providers: []
})
export class VenueChoiceComponent implements OnInit {

  venues: Venue[];
  selectedVenue: Venue;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.getVenues();
    this.getSelected();
  }

  getVenues(): void {
    this.reservationService.getVenues()
    .then((result) => this.venues = result)
    .catch(console.log); // update with alert
  }

  setSelected(venue: Venue): void {
    const selectedVenue = this.reservationService.selectedVenue
    if (selectedVenue && selectedVenue.id === venue.id) {
      this.reservationService.setSelectedVenue();
    } else {
      this.reservationService.setSelectedVenue(venue);
    }
    // need an observable to keep track of this?
    // so that we don't have to keep setting the local selectedVenue
    this.getSelected()
  }

  getSelected(): void {
    this.selectedVenue = this.reservationService.selectedVenue;
  }
}
