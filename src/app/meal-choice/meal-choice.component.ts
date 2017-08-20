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
  totalMeals: number = 0;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.getMeals();
  }

  getMeals(): void {
    this.reservationService.getMeals()
    .then((result) => this.meals = result)
    .catch(console.log); // update with alert
  }

  updateSelectedMeals(meal: Meal): void {
    this.reservationService.updateSelectedMeals(meal);
    this.getTotalMeals()
  }

  isSelected(meal: Meal): boolean {
    const selectedMeals = this.reservationService.getSelectedMeals()
    return selectedMeals.indexOf(meal) !== -1;
  }

  getTotalMeals(): void {
    this.totalMeals = 0;
    const selectedMeals = this.reservationService.getSelectedMeals()
    selectedMeals.forEach(x => this.totalMeals += Number(x.quantity))
  }

}
