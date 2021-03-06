import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocationServiceProvider } from '../providers/location-service/location-service';
import { Geolocation } from '@ionic-native/geolocation';
import { RequestServiceProvider } from '../providers/request-service/request-service';
import { HttpClientModule } from '@angular/common/http';
import { TaskDetailsPage } from '../pages/task-details/task-details';
import { LoginPage } from '../pages/login/login';
import { NewOccurrencePage } from '../pages/new-occurrence/new-occurrence';
import { FeedPage } from '../pages/feed/feed';
import { VehicleServiceProvider } from '../providers/vehicle-service/vehicle-service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TaskDetailsPage,
    NewOccurrencePage,
    FeedPage,
    LoginPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TaskDetailsPage,
    NewOccurrencePage,
    FeedPage,
    LoginPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationServiceProvider,
    Geolocation,
    RequestServiceProvider,
    VehicleServiceProvider,
    LocationServiceProvider
  ]
})
export class AppModule {}
