import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../meal'

@Component({
  selector: 'meal-tile',
  templateUrl: './meal-tile.component.html',
  styleUrls: ['./meal-tile.component.scss']
})
export class MealTileComponent implements OnInit {
  @Input() meal: Meal;
  @Input() isSelected: boolean;

  constructor() { }

  ngOnInit() {
  }

}
