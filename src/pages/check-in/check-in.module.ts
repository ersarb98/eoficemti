import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckInPage } from './check-in';
import { Ionic2RatingModule } from "ionic2-rating";

@NgModule({
  declarations: [
    CheckInPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckInPage),
    Ionic2RatingModule
  ],
})
export class CheckInPageModule {}
