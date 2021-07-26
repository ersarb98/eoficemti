import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbsenMobileDetailPage } from './absen-mobile-detail';

@NgModule({
  declarations: [
    AbsenMobileDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AbsenMobileDetailPage),
  ],
})
export class AbsenMobileDetailPageModule {}
