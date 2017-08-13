import { Component, OnInit } from '@angular/core';
import { VenueTileComponent } from '../venue-tile/venue-tile.component';

import { Venue } from '../venue';

@Component({
  selector: 'app-venue-choice',
  templateUrl: './venue-choice.component.html',
  styleUrls: ['./venue-choice.component.scss']
})
export class VenueChoiceComponent implements OnInit {

  constructor() { }

  venues: Venue[] = [
    {
      name: 'BBQ',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/8b/56/e7/8b56e7856999a69bbb1818103da4e716.jpg',
      description: 'BBQ like you ain\'t never had. Pork, beef, chick, collard greens, mac\'n\'cheese, corn bread, hush puppies, pickles, beer.',
      websiteUrl: 'http://www.waynessmokeshack.com/',
    },
    {
      name: 'BBQ',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/8b/56/e7/8b56e7856999a69bbb1818103da4e716.jpg',
      description: 'BBQ like you ain\'t never had. Pork, beef, chick, collard greens, mac\'n\'cheese, corn bread, hush puppies, pickles, beer.',
      websiteUrl: 'http://www.waynessmokeshack.com/',
    },
    {
      name: 'BBQ',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/8b/56/e7/8b56e7856999a69bbb1818103da4e716.jpg',
      description: 'BBQ like you ain\'t never had. Pork, beef, chick, collard greens, mac\'n\'cheese, corn bread, hush puppies, pickles, beer.',
      websiteUrl: 'http://www.waynessmokeshack.com/',
    },
    {
      name: 'BBQ',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/8b/56/e7/8b56e7856999a69bbb1818103da4e716.jpg',
      description: 'BBQ like you ain\'t never had. Pork, beef, chick, collard greens, mac\'n\'cheese, corn bread, hush puppies, pickles, beer.',
      websiteUrl: 'http://www.waynessmokeshack.com/',
    },
    {
      name: 'BBQ',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/8b/56/e7/8b56e7856999a69bbb1818103da4e716.jpg',
      description: 'BBQ like you ain\'t never had. Pork, beef, chick, collard greens, mac\'n\'cheese, corn bread, hush puppies, pickles, beer.',
      websiteUrl: 'http://www.waynessmokeshack.com/',
    },
  ]
  ngOnInit() {
  }

}
