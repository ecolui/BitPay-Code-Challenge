import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogEffortPage } from './log-effort';

@NgModule({
  declarations: [
    LogEffortPage,
  ],
  imports: [
    IonicPageModule.forChild(LogEffortPage),
  ],
  exports: [
    LogEffortPage
  ]
})
export class LogEffortPageModule {}
