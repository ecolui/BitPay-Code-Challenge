import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { WorkoutComponent } from './workout';

@NgModule({
  declarations: [
    WorkoutComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    WorkoutComponent
  ]
})
export class WorkoutComponentModule {}
