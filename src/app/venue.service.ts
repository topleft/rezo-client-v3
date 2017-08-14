import { Injectable } from '@angular/core';
import { Venue } from './venue'
import { VENUES } from './mock-venues';

@Injectable()
export class VenueService {

  constructor() { }

  getVenues(): Promise<any> {
    return Promise.resolve(VENUES);
  }

}
