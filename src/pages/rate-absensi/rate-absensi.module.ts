import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RateAbsensiPage } from './rate-absensi';
import { Ionic2RatingModule } from "ionic2-rating";

@NgModule({
  declarations: [
    RateAbsensiPage,    
  ],
  imports: [
    IonicPageModule.forChild(RateAbsensiPage),
    Ionic2RatingModule
  ],
})
export class RateAbsensiPageModule {}
