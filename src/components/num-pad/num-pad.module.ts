import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NumPadComponent } from './num-pad';

@NgModule({
  declarations: [
    NumPadComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    NumPadComponent
  ]
})
export class NumPadComponentModule {}
