import { Component, OnInit } from '@angular/core';
import { VenueTileComponent } from '../venue-tile/venue-tile.component';
import { VenueService } from '../venue.service';
import { Venue } from '../venue';

@Component({
  selector: 'app-venue-choice',
  templateUrl: './venue-choice.component.html',
  styleUrls: ['./venue-choice.component.scss'],
  providers: [VenueService]
})
export class VenueChoiceComponent implements OnInit {

  venues: Venue[];

  constructor(private venueService: VenueService) { }

  ngOnInit() {
    this.getVenues();
  }

  getVenues(): void {
    this.venueService.getVenues()
    .then((result) => this.venues = result)
    .catch(console.log) // update with alert
  }

}
