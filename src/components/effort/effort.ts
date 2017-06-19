import { Component, OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'effort',
  templateUrl: 'effort.html'
})
export class EffortComponent {

  exerciseEffort : any;

  constructor(private _store : Store<any>) {
    this.exerciseEffort = {exercise : '', effortStr: '0'};
    this._store.select('selectedEffort')
      .subscribe(selectedEffort => {
        this.exerciseEffort = selectedEffort;
      });
  }

  //Thing to do more research on --- are there memory leaks in this._store.select.subscribe....?
  /*  ngOnDestroy(){}
  */

}
