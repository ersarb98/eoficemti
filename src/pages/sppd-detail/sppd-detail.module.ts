import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SppdDetailPage } from './sppd-detail';

@NgModule({
  declarations: [
    SppdDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SppdDetailPage),
  ],
})
export class SppdDetailPageModule {}
