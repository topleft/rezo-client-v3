import { Component, OnInit, Input } from '@angular/core';
import { MealTileComponent } from '../meal-tile/meal-tile.component';
import { ReservationService } from '../reservation.service';

import { Meal } from '../meal';

@Component({
  selector: 'meal-choice',
  templateUrl: './meal-choice.component.html',
  styleUrls: ['./meal-choice.component.scss']
})

export class MealChoiceComponent implements OnInit {

  meals: Meal[];
  selectedMeals: Meal[];

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.getMeals();
    this.getSelectedMeals();
  }

  getMeals(): void {
    this.reservationService.getMeals()
    .then((result) => {console.log(result); this.meals = result;});
  }

  getSelectedMeals(): void {
    this.selectedMeals = this.reservationService.getSelectedMeals();
  }

  updateSelectedMeals(meal: Meal): void {
    const selectedMeals = this.reservationService.updateSelectedMeals(meal);
    this.selectedMeals = this.reservationService.getSelectedMeals();
  }

  isSelected(meal: Meal): boolean {
    return this.selectedMeals.indexOf(meal) !== -1;
  }



}
