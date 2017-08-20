import { Component, OnInit } from '@angular/core';
import { VenueTileComponent } from '../venue-tile/venue-tile.component';
import { ReservationService } from '../reservation.service';
import { Venue } from '../venue';

@Component({
  selector: 'app-venue-choice',
  templateUrl: './venue-choice.component.html',
  styleUrls: ['./venue-choice.component.scss']
})
export class VenueChoiceComponent implements OnInit {

  venues: Venue[];

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

  updateSelected(venue: Venue): void {
    this.reservationService.updateSelectedVenue(venue);
  }

  getSelected(): Venue {
    return this.reservationService.getSelectedVenue();
  }

  isSelected(venue?: Venue): boolean {
    const selectedVenue = this.getSelected();
    return (selectedVenue && selectedVenue.id === venue.id) ? true : false;
  }

}
