import { Component, OnInit, Input } from '@angular/core';
import { Venue } from '../venue';

@Component({
  selector: 'venue-tile',
  templateUrl: './venue-tile.component.html',
  styleUrls: ['./venue-tile.component.scss']
})

export class VenueTileComponent implements OnInit {
  @Input() venue: Venue;
  constructor() { }

  ngOnInit() {
  }

}
