import { Injectable } from '@angular/core';
import { Venue } from './venue'
import { VENUES } from './mock-venues';

@Injectable()
export class VenueService {
  selectedVenue: Venue;

  constructor() { }

  getVenues(): Promise<any> {
    return Promise.resolve(VENUES);
  }

  setSelectedVenue(venue?: Venue): void {
    venue ? this.selectedVenue = venue : this.selectedVenue = null;
  }

}
