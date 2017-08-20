import { Injectable } from '@angular/core';
import { Venue } from './venue'
import { Meal } from './meal'
import { VENUES } from './mock-venues';
import { MEALS } from './mock-meals';

@Injectable()
export class ReservationService {
  selectedVenue: Venue;
  selectedMeals: Meal[] = [];

  constructor() { }

  /////////////////////
  // VENUE METHODS  //
  ///////////////////

  getVenues(): Promise<any> {
    return Promise.resolve(VENUES);
  }

  getSelectedVenue(): Venue {
    return this.selectedVenue;
  }

  updateSelectedVenue(venue?: Venue): void {
    this.selectedVenue = (venue === this.selectedVenue) ? null : venue;
  }

  /////////////////////
  //  MEAL METHODS  //
  ///////////////////

  getMeals(): Promise<any> {
    return Promise.resolve(MEALS);
  }

  getSelectedMeals(): Meal[] {
    return this.selectedMeals;
  }

  updateSelectedMeals(meal?: Meal): void {
    const mealIndex = this.selectedMeals.indexOf(meal);
    let selectedMeals = this.selectedMeals.slice()
    if (mealIndex === -1) {
      selectedMeals.push(meal);
    } else {
      selectedMeals.splice(mealIndex, 1);
    }
    this.selectedMeals = selectedMeals;
  }

}
