/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MealTileComponent } from './meal-tile.component';

describe('MealTileComponent', () => {
  let component: MealTileComponent;
  let fixture: ComponentFixture<MealTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
