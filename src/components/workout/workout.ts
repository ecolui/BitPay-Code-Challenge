import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { EffortComponent } from '../effort/effort';

import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

import { Store } from '@ngrx/store';

@Component({
  selector: 'workout',
  templateUrl: 'workout.html'
})
export class WorkoutComponent {

  @ViewChild('userSelectedEffort') selectedEffort: EffortComponent;
  //workoutRepo : Array<any> = new Array<any>();
  private workoutRepo;
  private cummulativeEffort;

  constructor(private _store: Store<Array<{ any }>>) {
    this._store.select('effort')
      .subscribe(effortCollection => {
        this.workoutRepo = effortCollection;
        this.cummulativeEffort = this.workoutRepo.reduce((x, y) => x + y.effort, 0);
      });
  }
}
