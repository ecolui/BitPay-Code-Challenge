import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LogEffortPage } from '../pages/log-effort/log-effort';
import { TabsPage } from '../pages/tabs/tabs';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { effortReducer  } from '.././reducers/Effort';
import { selectedEffortReducer } from '.././reducers/SelectedEffort';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NumPadComponent } from '../components/num-pad/num-pad';
import { EffortComponent } from '../components/effort/effort';
import { WorkoutComponent } from '../components/workout/workout';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LogEffortPage,
    NumPadComponent,
    EffortComponent,
    WorkoutComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.provideStore(
      {
        effort : effortReducer,
        selectedEffort : selectedEffortReducer
      }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LogEffortPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
