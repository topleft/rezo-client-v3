import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ReservationComponent } from '../reservation/reservation.component';
import { VenueChoiceComponent } from '../venue-choice/venue-choice.component';
import { MealChoiceComponent } from '../meal-choice/meal-choice.component';
import { AboutComponent } from '../about/about.component';

const routes:Routes = [
  {
    path: '',
    children: [
       { path: 'reservation', component: ReservationComponent },
       { path: 'reservation/venue-choice', component: VenueChoiceComponent },
       { path: 'reservation/meal-choice', component: MealChoiceComponent },
       { path: 'about', component: AboutComponent }
    ]
  },
  { path: '**', redirectTo: '' }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class RoutingModule { }
