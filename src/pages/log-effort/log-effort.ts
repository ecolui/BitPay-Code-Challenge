import { Component, ViewChild, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { EffortComponent  } from '../.././components/effort/effort';
import { WorkoutComponent  } from '../.././components/workout/workout';
import { Store } from '@ngrx/store';

@IonicPage()
@Component({
  selector: 'page-log-effort',
  templateUrl: 'log-effort.html',
})
export class LogEffortPage implements AfterViewChecked{  

  @ViewChild('userWorkout') workoutChildComponent : WorkoutComponent;

  week : number;
  cumulativeEffort : number;
  maxReps : number;
  maxRepsExceeded : boolean;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private alertCtrl: AlertController,
              private _store : Store<any>,
              private cdRef:ChangeDetectorRef) {
    this.week = 7;
    this.cumulativeEffort = 34214;
    this.maxReps = 10000;
    this.maxRepsExceeded = false;
  }

  updateEffort(event : CustomEvent){
    if (event.detail.numeric < this.maxReps){
      this._store.dispatch({
        type: 'UPDATE_EFFORT',
        payload: {
          effort : event.detail.numeric,
          effortStr : event.detail.str,
          week : this.week,

          //HARD CODED VALUE -- NEEDS REFACTORING          
          exercise : 'Pushups'
          }
      });
      this.cdRef.detectChanges();
    }
    else
    {      
      this.maxRepsExceeded = true;
      setTimeout(()=>{
        event.detail.undo();
        this.maxRepsExceeded = false;
      },6000);
      this.alertCtrl.create(
        {title: 'Too many reps!!',
         subTitle: 'Please enter a realistic number of reps.',
         buttons: ['OK']}).present();
    }
  }

  //IMPORTANT: If you don't manually check for changes, you'll unfortunately get a
  //ExpressionChangedAfterItHasBeenCheckedError error!
  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogEffortPage');
  }

}
