import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RoutingModule} from './routing/routing.module';

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AboutComponent } from './about/about.component';
import { VenueChoiceComponent } from './venue-choice/venue-choice.component';
import { VenueTileComponent } from './venue-tile/venue-tile.component';

import { ReservationService } from './reservation.service';
import { MealChoiceComponent } from './meal-choice/meal-choice.component';
import { MealTileComponent } from './meal-tile/meal-tile.component';
import { EventInfoFormComponent } from './event-info-form/event-info-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    ReservationComponent,
    AboutComponent,
    VenueChoiceComponent,
    VenueTileComponent,
    MealChoiceComponent,
    MealTileComponent,
    EventInfoFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
