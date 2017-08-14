import { Component, OnInit, Input } from '@angular/core';
import { Venue } from '../venue';
import { VenueService } from '../venue.service';

@Component({
  selector: 'venue-tile',
  templateUrl: './venue-tile.component.html',
  styleUrls: ['./venue-tile.component.scss']
})

export class VenueTileComponent implements OnInit {
  @Input() venue: Venue;
  @Input() isSelected: boolean;

  constructor(private venueService: VenueService) { }

  ngOnInit() {
  }

}
